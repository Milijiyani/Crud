import React, { useState } from 'react';
import { backend_url } from '../config'
import axios from 'axios'
export default function Contactus() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    
    const createContactus = () => {
        // console.log(email)
        // console.log(password)
        axios
            .post(backend_url + "/contact/contact", {
            name,
            email,
            message
            
        })
            .then(response => {

                if (response.status === 200) {
                    console.log(response.data.message);
                } else {
                    console.log("Something went wrong");
                }
            })
            .catch(function (error) {
                console.log("Error:", error);
            });
    }
  return (
    <>  
   <header className="ltn__header-area ltn__header-5 ltn__header-transparent gradient-color-2">
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
                         <li className="menu-icon"><a href="/cart">Cart</a>

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
        <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
            <div className="ltn__utilize-menu-inner ltn__scrollbar">
                <div className="ltn__utilize-menu-head">
                    <div className="site-logo">
                        <a href="index-2.html"><img src="img/logo.png" alt="Logo"/></a>
                    </div>
                    <button className="ltn__utilize-close">×</button>
                </div>
                <div className="ltn__utilize-menu-search-form">
                    <form action="#">
                        <input type="text" placeholder="Search..."/>
                        <button><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <div className="ltn__utilize-menu">
                    <ul>
                        <li><a href="/">Home</a>
                            
                        </li>
                        <li><a href="/about">About</a>
                            
                        </li>
                        <li><a href="/shop">Shop</a>
                            
                        </li>
                        <li><a href="/contactus">Contact us</a></li>
                    </ul>
                </div>
                <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                    <ul>
                        <li>
                            <a href="account.html" title="My Account">
                                <span className="utilize-btn-icon">
                                    <i className="far fa-user"></i>
                                </span>
                                My Account
                            </a>
                        </li>
                        <li>
                            <a href="wishlist.html" title="Wishlist">
                                <span className="utilize-btn-icon">
                                    <i className="far fa-heart"></i>
                                    <sup>3</sup>
                                </span>
                                Wishlist
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div className="ltn__social-media-2">
                    <ul>
                        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="ltn__utilize-overlay"></div>
        <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bg="img/bg/9.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                            <div className="section-title-area ltn__section-title-2">
                                <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                                <h1 className="section-title white-color">Contact Us</h1>
                            </div>
                            <div className="ltn__breadcrumb-list">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li>Contact</li>
                                
                                                   

                                                   
                                    </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ltn__contact-address-area mb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                            <div className="ltn__contact-address-icon">
                                <img src="img/icons/10.png" alt="Icon Image"/>
                            </div>
                            <h3>Email Address</h3>
                            <p>info@webmail.com <br/>
                                jobs@webexample.com</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                            <div className="ltn__contact-address-icon">
                                <img src="img/icons/11.png" alt="Icon Image"/>
                            </div>
                            <h3>Phone Number</h3>
                            <p>+0123-456789 <br/> +987-6543210</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                            <div className="ltn__contact-address-icon">
                                <img src="img/icons/12.png" alt="Icon Image"/>
                            </div>
                            <h3>Office Address</h3>
                            <p>18/A, New Born Town Hall <br/>
                                India, </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        <div className="ltn__contact-message-area mb-120 mb--100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__form-box contact-form-box box-shadow white-bg">
                            <h4 className="title-2">Get A Quote</h4>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" value={name}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-email ltn__custom-icon">
                                            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" value={email}/>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="input-item input-item-textarea ltn__custom-icon">
                                    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter message"></textarea>
                                </div>
                               
                               
                                    <button className="btn-btn-secondary" onClick={createContactus} type="submit">Send</button>
                              
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ltn__feature-area before-bg-bottom-2 mb--30--- plr--5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__feature-item-box-wrap ltn__border-between-column white-bg">
                            <div className="row">
                                <div className="col-xl-3 col-md-6 col-12">
                                    <div className="ltn__feature-item ltn__feature-item-8">
                                        <div className="ltn__feature-icon">
                                            <img src="img/icons/icon-img/11.png" alt="#"/>
                                        </div>
                                        <div className="ltn__feature-info">
                                            <h4>Curated Products</h4>
                                            <p>Provide Curated Products for
                                                all product over 1000.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-12">
                                    <div className="ltn__feature-item ltn__feature-item-8">
                                        <div className="ltn__feature-icon">
                                            <img src="img/icons/icon-img/12.png" alt="#"/>
                                        </div>
                                        <div className="ltn__feature-info">
                                            <h4>Handmade</h4>
                                            <p>We ensure the product quality
                                                that is our main goal</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-12">
                                    <div className="ltn__feature-item ltn__feature-item-8">
                                        <div className="ltn__feature-icon">
                                            <img src="img/icons/icon-img/13.png" alt="#"/>
                                        </div>
                                        <div className="ltn__feature-info">
                                            <h4>Natural Food</h4>
                                            <p>Return product within 3 days
                                                for any product you buy</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-12">
                                    <div className="ltn__feature-item ltn__feature-item-8">
                                        <div className="ltn__feature-icon">
                                            <img src="img/icons/icon-img/14.png" alt="#"/>
                                        </div>
                                        <div className="ltn__feature-info">
                                            <h4>Free home delivery</h4>
                                            <p>We ensure the product quality
                                                that you can trust easily</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="ltn__footer-area  ">
            <div className="footer-top-area  section-bg-1 plr--5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-about-widget">
                                <div className="footer-logo">
                                    <div className="site-logo">
                                        <img src="img/logo.png" alt="Logo"/>
                                    </div>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
                                <div className="footer-address">
                                    <ul>
                                        <li>
                                            <div className="footer-address-icon">
                                                <i className="icon-placeholder"></i>
                                            </div>
                                            <div className="footer-address-info">
                                                <p>Mumbai, Gujarat, India</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-address-icon">
                                                <i className="icon-call"></i>
                                            </div>
                                            <div className="footer-address-info">
                                                <p><a href="tel:+91-123-456789">+91-123-456789</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-address-icon">
                                                <i className="icon-mail"></i>
                                            </div>
                                            <div className="footer-address-info">
                                                <p><a href="mailto:example@example.com">example@example.com</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ltn__social-media mt-20">
                                    <ul>
                                        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                                        <li><a href="#" title="Youtube"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-menu-widget clearfix">
                                <h4 className="footer-title">Company</h4>
                                <div className="footer-menu">
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
                        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-menu-widget clearfix">
                                <h4 className="footer-title">Services.</h4>
                                <div className="footer-menu">
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
                        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-menu-widget clearfix">
                                <h4 className="footer-title">Customer Care</h4>
                                <div className="footer-menu">
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
                        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-widget footer-newsletter-widget">
                                <h4 className="footer-title">Newsletter</h4>
                                <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                                <div className="footer-newsletter">
                                    <form action="#">
                                        <input type="email" name="email" placeholder="Email*"/>
                                        <div className="btn-wrapper">
                                            <button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <h5 className="mt-30">We Accept</h5>
                                <img src="img/icons/payment-4.png" alt="Payment Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ltn__copyright-area ltn__copyright-2 section-bg-2  ltn__border-top-2--- plr--5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="ltn__copyright-design clearfix">
                                <p>All Rights Reserved @ Company <span className="current-year"></span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 align-self-center">
                            <div className="ltn__copyright-menu text-right text-end">
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
        <script src="js/plugins.js"></script>
        <script src="js/contact.js"></script>
        <script src="js/main.js"></script>
    </>
)
}
