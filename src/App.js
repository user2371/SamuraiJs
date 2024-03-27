import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from '../node_modules/react-router-dom/dist/index';

const App = () => {
  return (
    <BrowserRouter>
    <div className="appWrapper">
      <Header />
      <Navbar />
      <div className="appWrapperContent">
        <Routes>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/dialogs/*" element={<Dialogs/>}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
