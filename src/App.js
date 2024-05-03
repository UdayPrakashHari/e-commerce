import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Shipping from './shipping.png';
import Return from './prd-return.png';
import Gift from './giftVoucher.png';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openCartSideScreen = () => {
    document.getElementById('cartSideScreen').style.width = '300px';
  };

  const closeCartSideScreen = () => {
    document.getElementById('cartSideScreen').style.width = '0';
  };

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    const newTotalPrice = updatedCartItems.reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(newTotalPrice);
    alert('Item added to the cart')
  };  
  function mailBtn() {
    alert('You are successfully subscribed');
  }

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1); // Remove the item at the specified index
    setCartItems(updatedCartItems);
    const newTotalPrice = updatedCartItems.reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(newTotalPrice);
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: 'white' }}>
        <div className="container-fluid">
          <div className="navbar-brand text-danger mx-3">
            <h2>Shop<span className='text-dark'>Online</span></h2>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavToggle}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <form className="d-flex ms-auto my-2 my-lg-0" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for Products"
                aria-label="Search"
                style={{ width: '100%' }}
              />
              <button className="btn btn-danger" type="submit">
                Search
              </button>
            </form>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home-section" style={{ color: 'maroon' }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features-section" style={{ color: 'black' }}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery-section" style={{ color: 'black' }}>
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#product-section" style={{ color: 'black' }}>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog-section" style={{ color: 'black' }}>
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" style={{ color: 'black' }}>
                  Contact
                </a>
              </li>
              <li className="nav-item pt-2">
                <a href="#" onClick={openCartSideScreen} className="nav-link">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span className="badge bg-secondary ms-1">{cartItems.length}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      {/* Background images */}
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
          </div>

          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100 " alt="..." />
          </div>

          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100 " alt="..." />
          </div>

          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100 " alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>



      {/* Features section --Shipping, Gift Vouchers */}
      <div className="features mt-5" id="features-section">
        <div class="feature">
          <img src={Shipping} alt="" class="featureIcon" />
          <span class="featureTitle">Free Shipping</span>
          <span class="featureDesc">Free worldwide shipping on all orders</span>
        </div>

        <div class="feature">
          <img class="featureIcon" src={Return} />
          <span class="featureTitle">15 Days Return</span>
          <span class="featureDesc">Easy return and refund in 7 days</span>
        </div>

        <div class="feature">
          <img class="featureIcon" src={Gift} />
          <span class="featureTitle">Gift Vouchers</span>
          <span class="featureDesc">Get gift cards on every purchase</span>
        </div>
      </div>


      {/* Gallery Section */}
      <div className="container mb-5" id="gallery-section">
        <div class="head">
          <h2 className='text-center mt-5 mb-3'>Featured Products</h2>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="img-box">
                <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="img-box">
                <img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="img-box">
                <img src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
            </div>
          </div>
        </div>
      </div>


      {/* Product section */}
      <div className="head text-center" id="product-section">
        <h2 className='mt-5'> Products</h2>
      </div>
      <div class="prd-container mb-5" id="product-section">
        <div class="grid-item1">
          <img className='rounded' src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image1" />
          <p>Men Shirt </p>
          <p><strong>Price:</strong> 499/-</p>
          <button onClick={()=>addToCart({ name: 'Men Shirt', price: 499})}>Add to cart</button>
        </div>

        <div class="grid-item2">
          <img className='rounded' src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image2" />
          <p> Men Shirt</p>
          <p><strong>Price:</strong> 499/-</p>
          <button onClick={()=>addToCart({ name:'Men Shirt', price: 499})}>Add to cart</button>
        </div>

        <div class="grid-item3">
          <img className='rounded' src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image3" />
          <p> Men Shirt</p>
          <p><strong>Price:</strong> 999/-</p>
          <button onClick={()=>addToCart({name:'Men Shirt', price: 999})}>Add to cart</button>
        </div>

        <div class="grid-item4">
          <img className='rounded'src="https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img4" />
          <p> Laptop</p>
          <p><strong>Price:</strong> 29,999/-</p>
          <button onClick={()=>addToCart({name: 'Laptop', price: 29999})}>Add to cart</button>
        </div>

        <div class="grid-item5">
          <img className='rounded' src="https://images.unsplash.com/photo-1586077427825-15dca6b44dba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image3" />
          <p>Laptop</p>
          <p><strong>Price:</strong> 45,600/-</p>
          <button onClick={()=>addToCart({name: 'Laptop', price: 45600})}>Add to cart</button>
        </div>

        <div class="grid-item6">
          <img className='rounded' src="https://images.unsplash.com/photo-1578950435899-d1c1bf932ab2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image3" />
          <p>Laptop</p>
          <p><strong>Price:</strong> 52,999/-</p>
          <button onClick={()=>addToCart({ name:'Laptop', price: 52999})}>Add to cart</button>
        </div>

        <div class="grid-item7">
          <img className='rounded' src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image3" />
          <p>Samsung S2</p>
          <p><strong>Price:</strong> 23,999/-</p>
          <button onClick={()=>addToCart({ name: 'Samsung S2', price: 23999})}>Add to cart</button>
        </div>

        <div class="grid-item8">
          <img className='rounded' src="https://images.unsplash.com/photo-1558885544-2defc62e2e2b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image3" />
          <p>Samsung S3</p>
          <p><strong>Price:</strong> 43,999/-</p>
          <button onClick={()=>addToCart({name: 'Samsung S3', price: 43999})}>Add to cart</button>
        </div>
      </div>


      {/* Review section */}
      <div className="container mt-3 mb-5" id="blog-section">
        <div class="head text-center" style={{ paddingBottom: "30px" }}>
          <h2>Customer Reviews</h2>
        </div>

        <div class="row">
          <div class="col-md-3">
            <div class="card rounded text-center">
              <div class="image-box pt-3">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded'/>
              </div>
              <div class="card-title">
                <h4>Jane</h4>
              </div>
              <div class="card-text">
                <p style={{ fontWeight: "lighter" }}>"Great products! Love the quality and variety."</p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card rounded text-center">
              <div class="image-box pt-3">
                <img src="https://images.unsplash.com/photo-1672761431799-5e91a0ae2f60?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded'/></div>
              <div class="card-title">
                <h4>John</h4>
              </div>
              <div class="card-text">
                <p style={{ fontWeight: "lighter" }}>"Excellent service and fast delivery. Will shop again!"</p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card rounded text-center">
              <div class="image-box pt-3"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded'/></div>
              <div class="card-title">
                <h4>Sandy</h4>
              </div>
              <div class="card-text">
                <p style={{ fontWeight: "lighter" }}>"Amazing experience. The prices are unbeatable!"</p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card rounded text-center">
              <div class="image-box pt-3"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded' /></div>
              <div class="card-title">
                <h4>Mike</h4>
              </div>
              <div class="card-text">
                <p style={{ fontWeight: "lighter" }}>"Excellent service and fast delivery. Will shop again!"</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <hr />

      {/* Footer Section */}
      <section id="contact" className="footer_wrapper wrapper pt-5">
        <div className="container pb-3">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4">
              <h5>Office Location</h5>
              <p class="ps-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim erat ut laoreet
                pharetra</p>
              <div class="contact-info text-dark">
                <ul class="list-unstyled p-0" style={{ listStyle: "none" }}>
                  <li><a href="#" class="text-dark"><i class="fa fa-home me-3 "> </i> No. 96, South City, Bengaluru</a></li>
                  <li><a href="#" class="text-dark"><i class="fa fa-phone me-3 "> </i>+91-7894561230</a></li>
                  <li><a href="#" class="text-dark"><i class="fa fa-envelope me-3 "> </i>info@shop-online.com</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
              <h5>About</h5>
              <ul class="link-widget p-0" style={{ listStyle: 'none' }}>
                <li><a href="#" style={{ color: 'black' }}>Quick Links</a></li>
                <li><a href="#" style={{ color: 'black' }}>Track Order</a></li>
                <li><a href="#" style={{ color: 'black' }}>Delivery</a></li>
                <li><a href="#" style={{ color: 'black' }}>Our Store</a></li>
                <li><a href="#" style={{ color: 'black' }}>Return & Exchange Status</a></li>
                <li><a href="#" style={{ color: 'black' }}>ClubS Rewards </a></li>
                <li><a href="#" style={{ color: 'black' }}>Refer a rriend</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
              <h5>Policy </h5>
              <ul class="link-widget p-0" style={{ listStyle: 'none' }}>
                <li><a href="#" style={{ color: 'black' }}>About Us</a></li>
                <li><a href="#" style={{ color: 'black' }}>Store locator</a></li>
                <li><a href="#" style={{ color: 'black' }}>FAQs</a></li>
                <li><a href="#" style={{ color: 'black' }}>Blogs</a></li>
                <li><a href="#" style={{ color: 'black' }}>Guarantee</a></li>
                <li><a href="#" style={{ color: 'black' }}>Buy Gift Card</a></li>
                <li><a href="#" style={{ color: 'black' }}>Return Policy</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4">
              <h5>Newsletter</h5>
              <div class="form-group mb-4">
                <input type="email" class="form-control bg-transparent" placeholder="Enter Your Email Here" id="Subscribe" />
                <button type="submit" class="main-btn rounded-2 mt-3 border-white text-light" id="btn"
                  onClick={mailBtn}>Subscribe</button>
              </div>

            </div>
          </div>
        </div>
        <div className="container-fluid copyright-section text-center text-light">
          <p className="pt-3 pb-3" style={{ borderRadius: '5px', backgroundColor: 'maroon' }}>©ShopOnline All Rights Reserved</p>
        </div>
      </section>



      {/* Side screen for cart */}
      
      <div id="cartSideScreen" className="side-screen">
        <div className="head">
          <p className='text-start'><FontAwesomeIcon icon={faShoppingCart} /> My Cart</p>
          <button onClick={closeCartSideScreen} className="btn btn-light p-1 ms-5">Close</button>
        </div>
        <div className="cart" id="cartSideScreenContent">
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name} - Rs. {item.price}</p>
              <button
                className='btn btn-outline-dark'
                onClick={() => removeItem(index)} // Pass the index to the removeItem function
              >
                X
              </button>
            </div>
          ))}
        </div>
        <p className='ms-2' id="totalPrice" style={{ fontWeight: 'bold' }}>Total: Rs. {totalPrice}/-</p>
      </div>
    </>
  );
}

export default App;
