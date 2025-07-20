import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';

import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { compose } from 'redux';
import { setInitializedSuccess, setInitializedSuccessThunkCreator } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}


class App extends React.Component {
  componentDidMount() {
    this.props.setInitializedSuccessThunkCreator();
  }

  render() {

    return (
      (!this.props.initializedSuccess)
        ? <Preloader />
        :
        <div className="appWrapper">
          <HeaderContainer />
          <Navbar />
          <div className="appWrapperContent">
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer/>}></Route>
              <Route path="/dialogs/*" element={<DialogsContainer />}></Route>
              <Route path="/users/*" element={<UsersContainer />}></Route>
              <Route path="/login/*" element={<Login />}></Route>
            </Routes>
          </div>
        </div>
    )
  }
}

let mapStateToProps = (state) => {
  return { initializedSuccess: state.app.initializedSuccess }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { setInitializedSuccessThunkCreator })
)(App)
