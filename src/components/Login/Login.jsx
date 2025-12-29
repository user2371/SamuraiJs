import React from "react"
import { reduxForm } from "redux-form";
import LoginReduxForm from "./LoginForm";
import { connect } from "react-redux";
import { postLoginDataThunkCreator } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";


 const Login = (props) => {
  debugger
  const customOnSubmit = (formData) => {
    props.postLoginDataThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
   return <Navigate to="/profile/"/>
  }
  
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={customOnSubmit} captchaURL={props.captchaURL}/>
    </div>
  )
};

let mapStateToProps = (state) => {
  
  return {
    isAuth: state.authReducer.isAuth,
    captchaURL: state.authReducer.captchaURL
  }
}

export default connect(mapStateToProps, {postLoginDataThunkCreator})(Login);
