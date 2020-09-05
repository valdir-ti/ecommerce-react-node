import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomeScreen from './components/HomeScreen/HomeScreen';
import ProductScreen from './components/ProductScreen/ProductScreen';
import CartScreen from './components/CartScreen/CartScreen';
import SigninScreen from './components/SigninScreen/SigninScreen';
import RegisterScreen from './components/RegisterScreen/RegisterScreen';

function App() {

  const userSignin = useSelector(state=>state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add('open');
  }  
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove('open');
  }

  return (

    <BrowserRouter>
        <div className="grid-container">

          <header className="header">
          
            <div className="brand">        
              <button onClick={openMenu}>
                &#9776;
              </button>
              <Link to="/">amazona</Link>
          </div>

          <div className="header-links">
            <Link to="/cart">Cart</Link> | 
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> : <Link to="/signin">Signin</Link>
            }            
          </div>

        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        
        <main className="main">
          <div className="content">
            <Route path="/register" component={RegisterScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact component={HomeScreen} />
          </div>
        </main>

        <footer className="footer">
          &copy; All right reserved.
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
