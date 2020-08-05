import React from 'react';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add('open');
  }  
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove('open');
  }

  return (
    <div className="grid-container">

      <header className="header">
      
        <div className="brand">        
          <button onClick={openMenu}>
            &#9776;
          </button>
          <a href="index.html">amazona</a>
      </div>

      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Signin</a>
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
        <ul className="products">
          
          <li>
            <div className="product">
              <img src="/images/d1.jpg" alt="product" className="product-image" />
              <div className="product-name">
                <a href="product.html">Slim shirt</a>
              </div>            
              <div className="product-brand">Nike</div>             
              <div className="product-price">$65</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img src="/images/d1.jpg" alt="product" className="product-image" />
              <div className="product-name">
                <a href="product.html">Slim shirt 2</a>
              </div>            
              <div className="product-brand">Nike</div>             
              <div className="product-price">$65</div>
              <div className="product-rating">4.2 Stars (44 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img src="/images/d1.jpg" alt="product" className="product-image" />
              <div className="product-name">
                <a href="product.html">Slim shirt 3</a>
              </div>            
              <div className="product-brand">Nike</div>             
              <div className="product-price">$65</div>
              <div className="product-rating">4.9 Stars (65 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img src="/images/d1.jpg" alt="product" className="product-image" />
              <div className="product-name">
                <a href="product.html">Slim shirt 4</a>
              </div>            
              <div className="product-brand">Nike</div>             
              <div className="product-price">$65</div>
              <div className="product-rating">3.5 Stars (6 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img src="/images/d1.jpg" alt="product" className="product-image" />
              <div className="product-name">
                <a href="product.html">Slim shirt 5</a>
              </div>            
              <div className="product-brand">Nike</div>             
              <div className="product-price">$65</div>
              <div className="product-rating">4.1 Stars (20 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img src="/images/d1.jpg" alt="product" className="product-image" />
              <div className="product-name">
                <a href="product.html">Slim shirt 6</a>
              </div>            
              <div className="product-brand">Nike</div>             
              <div className="product-price">$60</div>
              <div className="product-rating">4 Stars (16 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img src="/images/d1.jpg" alt="product" className="product-image" />
              <div className="product-name">
                <a href="product.html">Slim shirt 7</a>
              </div>            
              <div className="product-brand">Nike</div>             
              <div className="product-price">$63</div>
              <div className="product-rating">5 Stars (14 Reviews)</div>
            </div>
          </li>

        </ul>
      </div>
    </main>

    <footer className="footer">
      &copy; All right reserved.
    </footer>

  </div>
  );
}

export default App;
