const { config } = require("dotenv");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function stripePaymentGateway(req, res) {
  try {
    const productsList = req.body.products;

    const lineItems = await Promise.all(
      productsList.map(async (product) => {
        const response = await fetch(
          `http://localhost:8000/product/${product.id}`
        );
        const item = await response.json();

        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.title.shortTitle,
              description: item.title.longTitle,
            },
            unit_amount: item.price.cost * 100,
          },
          quantity: product.quantity,
        };
      })
    );

    const shippingOptions = [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 40 * 100,
            currency: "inr",
          },
          display_name: "Ekart Logistics",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 2,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: "rushikesh@gmail.com",
      mode: "payment",
      shipping_options: shippingOptions,
      line_items: lineItems,
      success_url: "http://localhost:3000/checkout/success",
      cancel_url: "http://localhost:3000/checkout/fail",
    });
    res.status(200).json({ id: session.id });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

module.exports = {
  stripePaymentGateway,
};
