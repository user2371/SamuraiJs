import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, HashRouter } from 'react-router-dom';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { lazy } from 'react';   

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer')); 

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
    this.props.initializeApp();
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
              <Route path="/profile/:userId?" element={<ProfileContainer />}></Route>
              <Route path="/dialogs/*" element={<Suspense fallback={<Preloader/>}><DialogsContainer /></Suspense>}></Route>
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

/*export default*/ const AppContainer = compose(
  
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App)


let SamuraiJsApp = (props) => {
  return (
    <HashRouter >
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default SamuraiJsApp;