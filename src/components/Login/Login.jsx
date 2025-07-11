import React from "react"
import { reduxForm } from "redux-form";
import LoginReduxForm from "./LoginForm";


 const Login = (props) => {
  const customOnSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={customOnSubmit}/>
    </div>
  )
};

export default Login;
