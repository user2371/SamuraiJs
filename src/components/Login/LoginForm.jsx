import React from "react"
import { Field, reduxForm } from "redux-form";
import { CustomFieldCreator } from "../common/FormsControl/FormsControl";
import styles from "./Login.module.css"
import { reaquiredField } from "../../utils/validators/validators";

const Input = CustomFieldCreator("input");
const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>        
        <div className={styles.loginField}><Field component={Input} name="login" validate={[reaquiredField]} type="text" placeholder="Login"/></div>
        <div className={styles.passwordField}><Field component={Input} name="password" validate={[reaquiredField]} type="password" placeholder="Password" /></div>
        <div className={styles.loginCheckbox}><Field component={Input} name="remember me" type="checkbox" id="rememberMe"  /><label htmlFor="rememberMe">Remember me</label></div><br/>
        <div><button>Login</button></div>
      </form>
    
  )
};
 let LoginReduxForm = reduxForm( {form: 'Login'} )(LoginForm)


export default LoginReduxForm
