import React from "react"
import { Field, reduxForm } from "redux-form";
import { CustomFieldCreator } from "../common/FormsControl/FormsControl";
import styles from "./Login.module.css"
import { reaquiredField } from "../../utils/validators/validators";

const Input = CustomFieldCreator("input");
const LoginForm = ({handleSubmit, error}, ...props) => {
  return (
      <form onSubmit={handleSubmit}> 
        <div className={styles.loginField}><Field component={Input} name="email" validate={[reaquiredField]} type="text" placeholder="admin"/></div>
        <div className={styles.passwordField}><Field component={Input} name="password" validate={[reaquiredField]} type="password" placeholder="123" /></div>
        <div className={styles.loginCheckbox}><Field component={Input} name="rememberMe" type="checkbox" id="rememberMe"  /><label htmlFor="rememberMe">Remember me</label></div><br/>
        {error && <div className={styles.summaryFormError}>{error}</div>}
        <div><button>Login</button></div>        
      </form>
    
  )
};
 let LoginReduxForm = reduxForm( {form: 'Login'} )(LoginForm)


export default LoginReduxForm
