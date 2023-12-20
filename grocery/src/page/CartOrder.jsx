import React, { useState, useEffect } from "react";


export default function CartOrder() {
    const [cartItems, setCartItems] = useState([]);
    // const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updateCartItemQuantity = (index, newQuantity) => {
        console.log(index)
        console.log(newQuantity)
        

        // Ensure the new quantity is a positive number
        newQuantity = Math.max(1, newQuantity);

        // Create a copy of cartItems to modify
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = newQuantity;

        // Update the state with the updated cart items
        setCartItems(updatedCartItems);

        // Update the local storage with the updated cart items
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };


    // Function to remove a cart item
    const removeCartItem = (index) => {
        // Create a copy of cartItems to modify
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);

        // Update the state with the updated cart items
        setCartItems(updatedCartItems);

        // Update the local storage with the updated cart items
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };

    // Retrieve cart items from local storage when the component mounts
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedCartItems);
    }, []);
    // const updateCartItemQuantity = (index, newQuantity) => {
    //   newQuantity = Math.max(1, newQuantity);
    //   cartItems[index].quantity = newQuantity;
    //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
    //   setCartItems([...cartItems]);
    // };

    // const removeCartItem = (index) => {
    //   cartItems.splice(index, 1);

    //   localStorage.setItem("cartItems", JSON.stringify(cartItems));

    //   // setCartItems([...cartItems]);
    // };
    return (
        <>    <header className="ltn__header-area ltn__header-5 ltn__header-transparent gradient-color-2">
                {/* ltn__header-top-area start */}
                <div className="ltn__header-top-area d-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="ltn__top-bar-menu"></div>
                            </div>
                            <div className="col-md-5">
                                <div className="top-bar-right text-right text-end">
                                    <div className="ltn__top-bar-menu">
                                        <ul>
                                            <li>
                                                {/* ltn__social-media */}
                                                <div className="ltn__social-media">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Facebook">
                                                                <i className="fab fa-facebook-f" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Twitter">
                                                                <i className="fab fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Instagram">
                                                                <i className="fab fa-instagram" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Dribbble">
                                                                <i className="fab fa-dribbble" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ltn__header-top-area end */}
                {/* ltn__header-middle-area start */}
                <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black ltn__logo-right-menu-option plr--9---">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="site-logo-wrap">
                                    <div className="site-logo">
                                        <a href="index-2.html">
                                            <img src="img/logo-2.png" alt="Logo" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col header-menu-column menu-color-white">
                                <div className="header-menu d-none d-xl-block">
                                    <nav>
                                        <div className="ltn__main-menu">
                                            <ul>
                                                <li className="menu-icon">
                                                    <a href="/">Home</a>
                                                </li>
                                                <li className="menu-icon">

                                                    <a href="/about">About</a>
                                                </li>
                                                <li className="menu-icon">
                                                    <a href="/shop">Shop</a>
                                                </li>
                                                <li className="menu-icon">
                                                    <a href="/cart">Cart</a>
                                                </li>
                                                <li>
                                                    <a href="/contactus">Contact us</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="ltn__header-options ltn__header-options-2">
                                {/* header-search-1 */}
                                <div className="header-search-wrap">
                                    <div className="header-search-1">
                                        <div className="search-icon">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                            <i className="icon-cancel  for-search-close" />
                                        </div>
                                    </div>
                                    <div className="header-search-1-form">
                                        <form id="#" method="get" action="#">
                                            <input
                                                type="text"
                                                name="search"
                                                defaultValue=""
                                                placeholder="Search here..."
                                            />
                                            <button type="submit">
                                                <span>
                                                    <i className="icon-search" />
                                                </span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                {/* user-menu */}
                                <div className="ltn__drop-menu user-menu">
                                    <ul>
                                        <li>
                                            <a href="/"><i class="fa-solid fa-user"></i></a>
                                            <ul>
                                                <li>
                                                    <a href="login.html">Sign in</a>
                                                </li>
                                                <li>
                                                    <a href="register.html">Register</a>
                                                </li>
                                                <li>
                                                    <a href="account.html">My Account</a>
                                                </li>
                                                <li>
                                                    <a href="wishlist.html">Wishlist</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* mini-cart */}

                                {/* mini-cart */}
                                {/* Mobile Menu Button */}




                                <div className="mobile-menu-toggle d-xl-none">
                                    <a
                                        href="#ltn__utilize-mobile-menu"
                                        className="ltn__utilize-toggle"
                                    >
                                        <svg viewBox="0 0 800 600">
                                            <path
                                                d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                                id="top"
                                            />
                                            <path d="M300,320 L540,320" id="middle" />
                                            <path
                                                d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                                id="bottom"
                                                transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ltn__header-middle-area end */}
            </header>
            <title>Broccoli - Organic Food HTML Template</title>


            <div id="ltn__utilize-mobile-menu" class="ltn__utilize ltn__utilize-mobile-menu">
                <div class="ltn__utilize-menu-inner ltn__scrollbar">
                    <div class="ltn__utilize-menu-head">
                        <div class="site-logo">
                            <a href="index-2.html"><img src="img/logo.png" alt="Logo" /></a>
                        </div>
                        <button class="ltn__utilize-close">×</button>
                    </div>
                    <div class="ltn__utilize-menu-search-form">
                        <form action="#">
                            <input type="text" placeholder="Search..." />
                            <button><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                    <div class="ltn__utilize-menu">
                        <ul>
                            <li><a href="/">Home</a>

                            </li>
                            <li><a href="/about">About</a>

                            </li>
                            <li><a href="/shop">Shop</a>

                            </li>
                            <li>
                                <a href="/cart">Cart</a>
                            </li>
                            <li><a href="/contactus">Contact us</a></li>
                        </ul>
                    </div>
                    <div class="ltn__utilize-buttons ltn__utilize-buttons-2">
                        <ul>
                            <li>
                                <a href="account.html" title="My Account">
                                    <span class="utilize-btn-icon">
                                        <i class="far fa-user"></i>
                                    </span>
                                    My Account
                                </a>
                            </li>
                            <li>
                                <a href="wishlist.html" title="Wishlist">
                                    <span class="utilize-btn-icon">
                                        <i class="far fa-heart"></i>
                                        <sup>3</sup>
                                    </span>
                                    Wishlist
                                </a>
                            </li>
                            <li>
                                <a href="cart.html" title="Shoping Cart">
                                    <span class="utilize-btn-icon">
                                        <i class="fas fa-shopping-cart"></i>
                                        <sup>5</sup>
                                    </span>
                                    Shoping Cart
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="ltn__social-media-2">
                        <ul>
                            <li><a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" title="Linkedin"><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="#" title="Instagram"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="ltn__utilize-overlay"></div>


            <div class="ltn__breadcrumb-area ltn__breadcrumb-area-3 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image plr--9---" data-bg="img/bg/9.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                                <div class="section-title-area ltn__section-title-2">
                                    <h6 class="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                                    <h1 class="section-title white-color">Cart</h1>
                                </div>
                                <div class="ltn__breadcrumb-list">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li>Cart</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Shopping Cart Section Begin */}
            <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((cartItem, index) => (
                        console.log(cartItem),
                      <tr>
                        <td className="product__cart__item">
                        
                          <div className="product__cart__item__pic col-l-6">
                            
                            <img
                              src={`http://localhost:3001/images/${cartItem.image}`}
                              alt={cartItem.productname}
                            />
                          </div>
                          </td>
                          <td>
                          <div style={{paddingLeft:190}} className="product__cart__item__text col-lg-6">
                            {/* product-name  here*/}
                            <h6>Name:{cartItem.name}</h6>
                            {/* product catagorie */}
                            <h6>Catagorie:{cartItem.categorie} </h6>
                            {/* price here */}
                            <h5>RS.&nbsp;{cartItem.price}</h5>
                          </div>
                         
                        </td>
                        <td className="quantity__item">
                          <div className="quantity">
                            <div className="pro-qty">
                              <span
                                className="qty-decrease qtybtn"
                                onClick={() => updateCartItemQuantity(index, cartItem.quantity - 1)}

                              >
                                -
                              </span>
                              <input
                                type="number"
                                value={cartItem.quantity}
                                readOnly
                              />
                              <span
                                className="qty-increase qtybtn"
                                onClick={() => updateCartItemQuantity(index, cartItem.quantity + 1)}
                              >
                                +
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="cart__price">
                          RS.&nbsp;{cartItem.price * cartItem.quantity}
                        </td>
                        {/* <td className="cart__price">$ 30.00</td> */}
                        <td className="cart__close">
                              <button className="icon_close" onClick={() => removeCartItem(index)}>×</button>
                          {/* <span
                            className="icon_close"
                            onClick={() => removeCartItem(index)}
                          />  */}
                        </td>
                      </tr>
                    ))}


                  </tbody>
                </table>
              </div>
              {/* <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                    <a href="#">Continue Shopping</a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn update__btn">
                    <a href="#">
                      <i className="fa fa-spinner" /> Update cart
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
       
          </div>
        </div>
      </section>
            {/* Shopping Cart Section End */}
            <footer class="ltn__footer-area  ">
                <div class="footer-top-area  section-bg-1 plr--5">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-3 col-md-6 col-sm-6 col-12">
                                <div class="footer-widget footer-about-widget">
                                    <div class="footer-logo">
                                        <div class="site-logo">
                                            <img src="img/logo.png" alt="Logo" />
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
                                    <div class="footer-address">
                                        <ul>
                                            <li>
                                                <div class="footer-address-icon">
                                                    <i class="icon-placeholder"></i>
                                                </div>
                                                <div class="footer-address-info">
                                                    <p>Mumbai, Gujarat, India</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="footer-address-icon">
                                                    <i class="icon-call"></i>
                                                </div>
                                                <div class="footer-address-info">
                                                    <p><a href="tel:+0123-456789">+0123-456789</a></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="footer-address-icon">
                                                    <i class="icon-mail"></i>
                                                </div>
                                                <div class="footer-address-info">
                                                    <p><a href="mailto:example@example.com">example@example.com</a></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="ltn__social-media mt-20">
                                        <ul>
                                            <li><a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#" title="Linkedin"><i class="fab fa-linkedin"></i></a></li>
                                            <li><a href="#" title="Youtube"><i class="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-md-6 col-sm-6 col-12">
                                <div class="footer-widget footer-menu-widget clearfix">
                                    <h4 class="footer-title">Company</h4>
                                    <div class="footer-menu">
                                        <ul>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="shop.html">All Products</a></li>
                                            <li><a href="locations.html">Locations Map</a></li>
                                            <li><a href="faq.html">FAQ</a></li>
                                            <li><a href="contact.html">Contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-md-6 col-sm-6 col-12">
                                <div class="footer-widget footer-menu-widget clearfix">
                                    <h4 class="footer-title">Services.</h4>
                                    <div class="footer-menu">
                                        <ul>
                                            <li><a href="order-tracking.html">Order tracking</a></li>
                                            <li><a href="wishlist.html">Wish List</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="account.html">My account</a></li>
                                            <li><a href="about.html">Terms & Conditions</a></li>
                                            <li><a href="about.html">Promotional Offers</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-md-6 col-sm-6 col-12">
                                <div class="footer-widget footer-menu-widget clearfix">
                                    <h4 class="footer-title">Customer Care</h4>
                                    <div class="footer-menu">
                                        <ul>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="account.html">My account</a></li>
                                            <li><a href="wishlist.html">Wish List</a></li>
                                            <li><a href="order-tracking.html">Order tracking</a></li>
                                            <li><a href="faq.html">FAQ</a></li>
                                            <li><a href="contact.html">Contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-sm-12 col-12">
                                <div class="footer-widget footer-newsletter-widget">
                                    <h4 class="footer-title">Newsletter</h4>
                                    <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                                    <div class="footer-newsletter">
                                        <form action="#">
                                            <input type="email" name="email" placeholder="Email*" />
                                            <div class="btn-wrapper">
                                                <button class="theme-btn-1 btn" type="submit"><i class="fas fa-location-arrow"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                    <h5 class="mt-30">We Accept</h5>
                                    <img src="img/icons/payment-4.png" alt="Payment Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ltn__copyright-area ltn__copyright-2 section-bg-2  ltn__border-top-2--- plr--5">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 col-12">
                                <div class="ltn__copyright-design clearfix">
                                    <p>All Rights Reserved @ Company <span class="current-year"></span></p>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 align-self-center">
                                <div class="ltn__copyright-menu text-right text-end">
                                    <ul>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Claim</a></li>
                                        <li><a href="#">Privacy & Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div class="ltn__modal-area ltn__quick-view-modal-area">
                <div class="modal fade" id="quick_view_modal" tabindex="-1">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="ltn__quick-view-modal-inner">
                                    <div class="modal-product-item">
                                        <div class="row">
                                            <div class="col-lg-6 col-12">
                                                <div class="modal-product-img">
                                                    <img src="img/product/4.png" alt="#" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-12">
                                                <div class="modal-product-info">
                                                    <div class="product-ratting">
                                                        <ul>
                                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                                            <li><a href="#"><i class="far fa-star"></i></a></li>
                                                            <li class="review-total"> <a href="#"> ( 95 Reviews )</a></li>
                                                        </ul>
                                                    </div>
                                                    <h3>Vegetables Juices</h3>
                                                    <div class="product-price">
                                                        <span>1490.00</span>
                                                        <del>1650.00</del>
                                                    </div>
                                                    <div class="modal-product-meta ltn__product-details-menu-1">
                                                        <ul>
                                                            <li>
                                                                <strong>Categories:</strong>
                                                                <span>
                                                                    <a href="#">Parts</a>
                                                                    <a href="#">Car</a>
                                                                    <a href="#">Seat</a>
                                                                    <a href="#">Cover</a>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="ltn__product-details-menu-2">

                                                    </div>
                                                    <div class="ltn__product-details-menu-3">
                                                        <ul>
                                                            <li>
                                                                <a href="#" class="" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                                                    <i class="far fa-heart"></i>
                                                                    <span>Add to Wishlist</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="" title="Compare" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                                                    <i class="fas fa-exchange-alt"></i>
                                                                    <span>Compare</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <hr />
                                                    <div class="ltn__social-media">
                                                        <ul>
                                                            <li>Share:</li>
                                                            <li><a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                                            <li><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                                                            <li><a href="#" title="Linkedin"><i class="fab fa-linkedin"></i></a></li>
                                                            <li><a href="#" title="Instagram"><i class="fab fa-instagram"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
