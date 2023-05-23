const { config } = require("dotenv");
config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function stripePaymentGateway(req, res) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: "rushikesh@gmail.com",
      mode: "payment",
      success_url: "http://localhost:3000/checkout/success",
      cancel_url: "http://localhost:3000/checkout/fail",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "P1",
              description: "descriptionop",
            },
            unit_amount: 1500,
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "P2",
              description: "descriptiono2",
            },
            unit_amount: 3000,
          },
          quantity: 2,
        },
      ],
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
