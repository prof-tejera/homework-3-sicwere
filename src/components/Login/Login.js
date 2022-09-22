import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

const Login = ({props: { username, password, remember, submit }}) => {
  const removeProp = 'text'
  const { [removeProp]: usernameText, ...usernameProps } = username
  const { [removeProp]: passwordText, ...passwordProps } = password
  const { [removeProp]: rememberText, ...rememberProps } = remember
  return (
    <>
      <label>{usernameText}<Input type="text" {...usernameProps} /></label>
      <label>{passwordText}<Input type="password" {...passwordProps} /></label>
      <label><Input type="checkbox" {...rememberProps} />{rememberText}</label>
      <label><Button {...submit} /></label>
    </>
  )
};

export default Login