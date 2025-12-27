import React from "react"
import { reduxForm } from "redux-form";
import LoginReduxForm from "./LoginForm";
import { connect } from "react-redux";
import { login, postLoginDataThunkCreator } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";


 const Login = (props) => {
  const customOnSubmit = (formData) => {
    props.login(formData.email, formData.password)
  }

  if (props.isAuth) {
   return <Navigate to="/profile/"/>
  }
  
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={customOnSubmit}/>
    </div>
  )
};

let mapStateToProps = (state) => {
  
  return {
    isAuth: state.authReducer.isAuth
  }
}

export default connect(mapStateToProps, {login})(Login);
