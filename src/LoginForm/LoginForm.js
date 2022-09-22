import "./LoginForm.css";
import Login from "components/Login/Login";

const LoginForm = () => {
  const loginProps = {
    username: {
      id: "username",
      name: "username",
      text: "Username:",
      style: {
        padding: "10px",
        margin: "10px"
      }
    },
    password: {
      id: "password",
      name: "password",
      text: "Password:",
      style: {
        padding: "10px",
        margin: "10px"
      }
    },
    remember: {
      id: "rememberLogin",
      name: "rememberLogin",
      text: "Remember me",
      style: {
        margin: "10px"
      }
    },
    submit: {
      text: "Sign in",
      style: {
        backgroundColor: "cyan"
      }
    }
  }
  return (
    <Login props={loginProps} />
  );
};

export default LoginForm;
