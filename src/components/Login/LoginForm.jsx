import React from "react"
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>        
        <div><Field component="input" name="login" type="text" placeholder="Login"/></div>
        <div><Field component="input" name="password" type="password" placeholder="Password" /></div>
        <div><label><Field component="input" name="remember me" type="checkbox" />Remember me</label></div><br/>
        <div><button>Login</button></div>
      </form>
    
  )
};
 let LoginReduxForm = reduxForm( {form: 'Login'} )(LoginForm)


export default LoginReduxForm
