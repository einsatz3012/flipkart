import React, { useContext, useState } from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  width: 95vh;
  // height: 70vh;
  min-width: 400px;
  min-height: 200px;
  max-height: 90vh;
`;

const Image = styled(Box)`
  width: 30%;
  background: #2874f0;
  background-image: url("https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png");
  background-repeat: no-repeat;
  background-position: center 85%;
  color: #fff;
  padding: 40px 33px;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;

  &:hover {
    background: #ee5d17;
  }
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  color: #2874f0;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

const Link = styled("a")`
  color: #2874f0;
  text-decoration: none;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    const response = await authenticateSignup(signup);

    if (!response) return;

    handleClose();
    setAccount(signup.firstname);
    setSignup(signupInitialValues);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    const response = await authenticateLogin(login);

    if (response.status === 200) {
      handleClose();
      setAccount(response.data.message.firstname);
      setError(false);
      setLogin(loginInitialValues);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px", color: "#dbdbdb" }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Username"
                onChange={(e) => {
                  onValueChange(e);
                }}
                name="username"
              />
              <TextField
                variant="standard"
                label="Enter Password"
                onChange={(e) => {
                  onValueChange(e);
                }}
                name="password"
              />
              {error && <Error>Please enter valid Username or password</Error>}

              <Text>
                By continuing, you agree to Flipkart's &nbsp;
                <Link
                  target="_blank"
                  href="https://www.flipkart.com/pages/terms"
                >
                  Terms of Use &nbsp;
                </Link>
                and &nbsp;
                <Link
                  target="_blank"
                  href="https://www.flipkart.com/pages/privacypolicy"
                >
                  Privacy Policy
                </Link>
                .
              </Text>

              <LoginButton onClick={loginUser}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>

              <CreateAccount
                onClick={() => toggleAccount(accountInitialValues.signup)}
              >
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                name="firstname"
                label="Enter First Name"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                name="lastname"
                label="Enter Last Name"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                name="username"
                label="Enter Username"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                name="email"
                label="Enter Email"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                name="password"
                label="Enter Password"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                name="phone"
                label="Enter Phone"
                onChange={(e) => onInputChange(e)}
              />
              <Text>
                By continuing, you agree to Flipkart's&nbsp;
                <Link
                  target="_blank"
                  href="https://www.flipkart.com/pages/terms"
                >
                  Terms of Use&nbsp;
                </Link>
                and&nbsp;
                <Link
                  target="_blank"
                  href="https://www.flipkart.com/pages/privacypolicy"
                >
                  Privacy Policy
                </Link>
                .
              </Text>

              <LoginButton onClick={signupUser}>Continue</LoginButton>

              <CreateAccount
                onClick={() => toggleAccount(accountInitialValues.login)}
              >
                Existing User? Log in
              </CreateAccount>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
