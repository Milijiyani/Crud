import React from 'react'

export default function About() {
  return (
     <><>
     {/*[if lte IE 9]>
     <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
       <![endif]*/}
     {/* Add your site or application content here */}
     {/* Body main wrapper start */}
     <div className="body-wrapper">
       {/* HEADER AREA START (header-5) */}
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
                           <a href="/contact">Contact us</a>
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
       {/* HEADER AREA END */}
       {/* Utilize Cart Menu Start */}
       <div
         id="ltn__utilize-cart-menu"
         className="ltn__utilize ltn__utilize-cart-menu">
         <div className="ltn__utilize-menu-inner ltn__scrollbar">
           <div className="ltn__utilize-menu-head">
             <span className="ltn__utilize-menu-title">Cart</span>
             <button className="ltn__utilize-close">×</button>
           </div>
           <div className="mini-cart-product-area ltn__scrollbar">
             <div className="mini-cart-item clearfix">
               <div className="mini-cart-img">
                 <a href="#">
                   <img src="img/product/1.png" alt="Image" />
                 </a>
                 <span className="mini-cart-item-delete">
                   <i className="icon-cancel" />
                 </span>
               </div>
               <div className="mini-cart-info">
                 <h6>
                   <a href="#">Red Hot Tomato</a>
                 </h6>
                 <span className="mini-cart-quantity">1 x 650.00</span>
               </div>
             </div>
             <div className="mini-cart-item clearfix">
               <div className="mini-cart-img">
                 <a href="#">
                   <img src="img/product/2.png" alt="Image" />
                 </a>
                 <span className="mini-cart-item-delete">
                   <i className="icon-cancel" />
                 </span>
               </div>
               <div className="mini-cart-info">
                 <h6>
                   <a href="#">Vegetables Juices</a>
                 </h6>
                 <span className="mini-cart-quantity">1 x 850.00</span>
               </div>
             </div>
             <div className="mini-cart-item clearfix">
               <div className="mini-cart-img">
                 <a href="#">
                   <img src="img/product/3.png" alt="Image" />
                 </a>
                 <span className="mini-cart-item-delete">
                   <i className="icon-cancel" />
                 </span>
               </div>
               <div className="mini-cart-info">
                 <h6>
                   <a href="#">Orange Sliced Mix</a>
                 </h6>
                 <span className="mini-cart-quantity">1 x 920.00</span>
               </div>
             </div>
             <div className="mini-cart-item clearfix">
               <div className="mini-cart-img">
                 <a href="#">
                   <img src="img/product/4.png" alt="Image" />
                 </a>
                 <span className="mini-cart-item-delete">
                   <i className="icon-cancel" />
                 </span>
               </div>
               <div className="mini-cart-info">
                 <h6>
                   <a href="#">Orange Fresh Juice</a>
                 </h6>
                 <span className="mini-cart-quantity">1 x 680.00</span>
               </div>
             </div>
           </div>
           <div className="mini-cart-footer">
             <div className="mini-cart-sub-total">
               <h5>
                 Subtotal: <span>3100.00</span>
               </h5>
             </div>
             <div className="btn-wrapper">
               <a href="cart.html" className="theme-btn-1 btn btn-effect-1">
                 View Cart
               </a>
               <a href="cart.html" className="theme-btn-2 btn btn-effect-2">
                 Checkout
               </a>
             </div>
             <p>Free Shipping on All Orders Over 1000!</p>
           </div>
         </div>
       </div>
       {/* Utilize Cart Menu End */}
       {/* Utilize Mobile Menu Start */}
       <div
         id="ltn__utilize-mobile-menu"
         className="ltn__utilize ltn__utilize-mobile-menu"
       >
         <div className="ltn__utilize-menu-inner ltn__scrollbar">
           <div className="ltn__utilize-menu-head">
             <div className="site-logo">
               <a href="index-2.html">
                 <img src="img/logo.png" alt="Logo" />
               </a>
             </div>
             <button className="ltn__utilize-close">×</button>
           </div>
           <div className="ltn__utilize-menu-search-form">
             <form action="#">
               <input type="text" placeholder="Search..." />
               <button>
                 <i className="fas fa-search" />
               </button>
             </form>
           </div>
           <div className="ltn__utilize-menu">
             <ul>
               <li>
                 <a href="/">Home</a>
                
               </li>
               <li>
                 <a href="/about">About</a>
                 
               </li>
               <li>
                 <a href="/shop">Shop</a>
                
               </li>
           
               <li>
                 <a href="/cart">Cart</a>
                
               </li>
               <li>
                 <a href="contact.html">Contact</a>
               </li>
             </ul>
           </div>
           <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
             <ul>
               <li>
                 <a href="account.html" title="My Account">
                   <span className="utilize-btn-icon">
                     <i className="far fa-user" />
                   </span>
                   My Account
                 </a>
               </li>
               <li>
                 <a href="wishlist.html" title="Wishlist">
                   <span className="utilize-btn-icon">
                     <i className="far fa-heart" />
                     <sup>3</sup>
                   </span>
                   Wishlist
                 </a>
               </li>
               <li>
                 <a href="cart.html" title="Shoping Cart">
                   <span className="utilize-btn-icon">
                     <i className="fas fa-shopping-cart" />
                     <sup>5</sup>
                   </span>
                   Shoping Cart
                 </a>
               </li>
             </ul>
           </div>
           <div className="ltn__social-media-2">
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
                 <a href="#" title="Linkedin">
                   <i className="fab fa-linkedin" />
                 </a>
               </li>
               <li>
                 <a href="#" title="Instagram">
                   <i className="fab fa-instagram" />
                 </a>
               </li>
             </ul>
           </div>
         </div>
       </div>
       {/* Utilize Mobile Menu End */}
       <div className="ltn__utilize-overlay" />
       {/* BREADCRUMB AREA START */}
       <div
         className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
         data-bg="img/bg/5.jpg"
       >
         <div className="container">
           <div className="row">
             <div className="col-lg-12">
               <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                 <div className="section-title-area ltn__section-title-2">
                   <h6 className="section-subtitle ltn__secondary-color">
                     // Welcome to our company
                   </h6>
                   <h1 className="section-title white-color">About Us</h1>
                 </div>
                 <div className="ltn__breadcrumb-list">
                   <ul>
                     <li>
                       <a href="/">Home</a>
                     </li>
                     <li>About Us</li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* BREADCRUMB AREA END */}
       {/* ABOUT US AREA START */}
       <div className="ltn__about-us-area pt-120--- pb-120">
         <div className="container">
           <div className="row">
             <div className="col-lg-6 align-self-center">
               <div className="about-us-img-wrap about-img-left">
                 <img src="img/others/6.png" alt="About Us Image" />
               </div>
             </div>
             <div className="col-lg-6 align-self-center">
               <div className="about-us-info-wrap">
                 <div className="section-title-area ltn__section-title-2">
                   <h6 className="section-subtitle ltn__secondary-color">
                     Know More About Shop
                   </h6>
                   <h1 className="section-title">
                     Trusted Organic <br className="d-none d-md-block" /> Food
                     Store
                   </h1>
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                     do eiusmod tempor incididunt ut labore
                   </p>
                 </div>
                 <p>
                   sellers who aspire to be good, do good, and spread goodness. We
                   democratic, self-sustaining, two-sided marketplace which thrives
                   on trust and is built on community and quality content.
                 </p>
                 <div className="about-author-info d-flex">
                   <div className="author-name-designation  align-self-center">
                     <h4 className="mb-0">Jerry Henson</h4>
                     <small>/ Shop Director</small>
                   </div>
                   <div className="author-sign">
                     <img src="img/icons/icon-img/author-sign.png" alt="#" />
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* ABOUT US AREA END */}
       {/* FEATURE AREA START ( Feature - 6) */}
       <div className="ltn__feature-area section-bg-1 pt-115 pb-90">
         <div className="container">
           <div className="row">
             <div className="col-lg-12">
               <div className="section-title-area ltn__section-title-2 text-center">
                 <h6 className="section-subtitle ltn__secondary-color">
                   // features //
                 </h6>
                 <h1 className="section-title">
                   Why Choose Us<span>.</span>
                 </h1>
               </div>
             </div>
           </div>
           <div className="row justify-content-center">
             <div className="col-lg-4 col-sm-6 col-12">
               <div className="ltn__feature-item ltn__feature-item-7">
                 <div className="ltn__feature-icon-title">
                   <div className="ltn__feature-icon">
                     <span>
                       <img src="img/icons/icon-img/21.png" alt="#" />
                     </span>
                   </div>
                   <h3>
                     <a href="service-details.html">All Kind Brand</a>
                   </h3>
                 </div>
                 <div className="ltn__feature-info">
                   <p>
                     Lorem ipsum dolor sit ame it, consectetur adipisicing elit,
                     sed do eiusmod te mp or incididunt ut labore.
                   </p>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-sm-6 col-12">
               <div className="ltn__feature-item ltn__feature-item-7">
                 <div className="ltn__feature-icon-title">
                   <div className="ltn__feature-icon">
                     <span>
                       <img src="img/icons/icon-img/22.png" alt="#" />
                     </span>
                   </div>
                   <h3>
                     <a href="service-details.html">Curated Products</a>
                   </h3>
                 </div>
                 <div className="ltn__feature-info">
                   <p>
                     Lorem ipsum dolor sit ame it, consectetur adipisicing elit,
                     sed do eiusmod te mp or incididunt ut labore.
                   </p>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-sm-6 col-12">
               <div className="ltn__feature-item ltn__feature-item-7">
                 <div className="ltn__feature-icon-title">
                   <div className="ltn__feature-icon">
                     <span>
                       <img src="img/icons/icon-img/23.png" alt="#" />
                     </span>
                   </div>
                   <h3>
                     <a href="service-details.html">Pesticide Free Goods</a>
                   </h3>
                 </div>
                 <div className="ltn__feature-info">
                   <p>
                     Lorem ipsum dolor sit ame it, consectetur adipisicing elit,
                     sed do eiusmod te mp or incididunt ut labore.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* FEATURE AREA END */}
       {/* TEAM AREA START (Team - 3) */}
       <div className="ltn__team-area pt-115 pb-90">
         <div className="container">
           <div className="row">
             <div className="col-lg-12">
               <div className="section-title-area ltn__section-title-2 text-center">
                 <h1 className="section-title white-color---">Team Member</h1>
               </div>
             </div>
           </div>
           <div className="row justify-content-center">
             <div className="col-xl-3 col-lg-4 col-sm-6">
               <div className="ltn__team-item">
                 <div className="team-img">
                   <img src="img/team/1.jpg" alt="Image" />
                 </div>
                 <div className="team-info">
                   <h6 className="ltn__secondary-color">// founder //</h6>
                   <h4>
                     <a href="team-details.html">Rosalina D. William</a>
                   </h4>
                   <div className="ltn__social-media">
                     <ul>
                       <li>
                         <a href="#">
                           <i className="fab fa-facebook-f" />
                         </a>
                       </li>
                       <li>
                         <a href="#">
                           <i className="fab fa-twitter" />
                         </a>
                       </li>
                       <li>
                         <a href="#">
                           <i className="fab fa-linkedin" />
                         </a>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
               <div className="ltn__team-item">
                 <div className="team-img">
                   <img src="img/team/2.jpg" alt="Image" />
                 </div>
                 <div className="team-info">
                   <h6 className="ltn__secondary-color">// founder //</h6>
                   <h4>
                     <a href="team-details.html">Rosalina D. William</a>
                   </h4>
                   <div className="ltn__social-media">
                     <ul>
                       <li>
                         <a href="#">
                           <i className="fab fa-facebook-f" />
                         </a>
                       </li>
                       <li>
                         <a href="#">
                           <i className="fab fa-twitter" />
                         </a>
                       </li>
                       <li>
                         <a href="#">
                           <i className="fab fa-linkedin" />
                         </a>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
               <div className="ltn__team-item">
                 <div className="team-img">
                   <img src="img/team/3.jpg" alt="Image" />
                 </div>
                 <div className="team-info">
                   <h6 className="ltn__secondary-color">// founder //</h6>
                   <h4>
                     <a href="team-details.html">Rosalina D. William</a>
                   </h4>
                   <div className="ltn__social-media">
                     <ul>
                       <li>
                         <a href="#">
                           <i className="fab fa-facebook-f" />
                         </a>
                       </li>
                       <li>
                         <a href="#">
                           <i className="fab fa-twitter" />
                         </a>
                       </li>
                       <li>
                         <a href="#">
                           <i className="fab fa-linkedin" />
                         </a>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-xl-3 col-lg-4 col-sm-6">
               <div className="ltn__team-item">
                 <div className="team-img">
                   <img src="img/team/4.jpg" alt="Image" />
                 </div>
                 <div className="team-info">
                   <h6 className="ltn__secondary-color">// founder //</h6>
                   <h4>
                     <a href="team-details.html">Rosalina D. William</a>
                   </h4>
                   <div className="ltn__social-media">
                     <ul>
                       <li>
                         <a href="#">
                           <i className="fab fa-facebook-f" />
                         </a>
                       </li>
                       <li>
                         <a href="#">
                           <i className="fab fa-twitter" />
                         </a>
                       </li>
                       <li>
                         <a href="#">
                           <i className="fab fa-linkedin" />
                         </a>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* TEAM AREA END */}
       {/* CALL TO ACTION START (call-to-action-5) */}
       <div
         className="call-to-action-area call-to-action-5 bg-image bg-overlay-theme-90 pt-40 pb-25 d-none"
         data-bg="img/bg/13.jpg"
       >
         <div className="container">
           <div className="row">
             <div className="col-lg-12">
               <div className="call-to-action-inner call-to-action-inner-5 text-center">
                 <h2 className="white-color text-decoration">
                   24/7 Availability, Make{" "}
                   <a href="contact.html">An Appointment</a>
                 </h2>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* CALL TO ACTION END */}
       {/* PROGRESS BAR AREA START */}
       <div className="ltn__progress-bar-area before-bg-right pt-115 pb-95 d-none">
         <div className="container">
           <div className="row">
             <div className="col-lg-6">
               <div className="ltn__progress-bar-wrap">
                 <div className="section-title-area ltn__section-title-2">
                   <h6 className="section-subtitle ltn__secondary-color">
                     // skills
                   </h6>
                   <h1 className="section-title">
                     We Have A Skillest Team Ever<span>.</span>
                   </h1>
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                     do eiusmod tempor incididunt ut labore
                   </p>
                 </div>
                 <div className="ltn__progress-bar-inner">
                   <div className="ltn__progress-bar-item">
                     <p>Car Repair</p>
                     <div className="progress">
                       <div
                         className="progress-bar wow fadeInLeft"
                         data-wow-duration="0.5s"
                         data-wow-delay=".5s"
                         role="progressbar"
                         style={{ width: "72%" }}
                       >
                         <span>72%</span>
                       </div>
                     </div>
                   </div>
                   <div className="ltn__progress-bar-item">
                     <p>Car Rental Service</p>
                     <div className="progress">
                       <div
                         className="progress-bar wow fadeInLeft"
                         data-wow-duration="0.5s"
                         data-wow-delay=".5s"
                         role="progressbar"
                         style={{ width: "74%" }}
                       >
                         <span>74%</span>
                       </div>
                     </div>
                   </div>
                   <div className="ltn__progress-bar-item">
                     <p>Car Cleaning &amp; Parts</p>
                     <div className="progress">
                       <div
                         className="progress-bar wow fadeInLeft"
                         data-wow-duration="0.5s"
                         data-wow-delay=".5s"
                         role="progressbar"
                         style={{ width: "81%" }}
                       >
                         <span>81%</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-lg-6 align-self-center">
               <div
                 className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50-- bg-image ml-30"
                 data-bg="img/others/5.jpg"
               >
                 <a
                   className="ltn__video-icon-2 ltn__video-icon-2-border---"
                   href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0"
                   data-rel="lightcase:myCollection"
                 >
                   <i className="fa fa-play" />
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* PROGRESS BAR AREA END */}
       {/* TESTIMONIAL AREA START (testimonial-4) */}
       <div className="ltn__testimonial-area section-bg-1 pt-115 pb-70">
         <div className="container-fluid">
           <div className="row">
             <div className="col-lg-12">
               <div className="section-title-area ltn__section-title-2 text-center">
                 <h6 className="section-subtitle ltn__secondary-color">
                   // Testimonials
                 </h6>
                 <h1 className="section-title">
                   Clients Feedbacks<span>.</span>
                 </h1>
               </div>
             </div>
           </div>
           <div className="row ltn__testimonial-slider-3-active slick-arrow-1 slick-arrow-1-inner">
             <div className="col-lg-12">
               <div className="ltn__testimonial-item ltn__testimonial-item-4">
                 <div className="ltn__testimoni-img">
                   <img src="img/testimonial/6.jpg" alt="#" />
                 </div>
                 <div className="ltn__testimoni-info">
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                   </p>
                   <h4>Rosalina D. William</h4>
                   <h6>Founder</h6>
                 </div>
                 <div className="ltn__testimoni-bg-icon">
                   <i className="far fa-comments" />
                 </div>
               </div>
             </div>
             <div className="col-lg-12">
               <div className="ltn__testimonial-item ltn__testimonial-item-4">
                 <div className="ltn__testimoni-img">
                   <img src="img/testimonial/7.jpg" alt="#" />
                 </div>
                 <div className="ltn__testimoni-info">
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                   </p>
                   <h4>Rosalina D. William</h4>
                   <h6>Founder</h6>
                 </div>
                 <div className="ltn__testimoni-bg-icon">
                   <i className="far fa-comments" />
                 </div>
               </div>
             </div>
             <div className="col-lg-12">
               <div className="ltn__testimonial-item ltn__testimonial-item-4">
                 <div className="ltn__testimoni-img">
                   <img src="img/testimonial/1.jpg" alt="#" />
                 </div>
                 <div className="ltn__testimoni-info">
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                   </p>
                   <h4>Rosalina D. William</h4>
                   <h6>Founder</h6>
                 </div>
                 <div className="ltn__testimoni-bg-icon">
                   <i className="far fa-comments" />
                 </div>
               </div>
             </div>
             <div className="col-lg-12">
               <div className="ltn__testimonial-item ltn__testimonial-item-4">
                 <div className="ltn__testimoni-img">
                   <img src="img/testimonial/2.jpg" alt="#" />
                 </div>
                 <div className="ltn__testimoni-info">
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                   </p>
                   <h4>Rosalina D. William</h4>
                   <h6>Founder</h6>
                 </div>
                 <div className="ltn__testimoni-bg-icon">
                   <i className="far fa-comments" />
                 </div>
               </div>
             </div>
             <div className="col-lg-12">
               <div className="ltn__testimonial-item ltn__testimonial-item-4">
                 <div className="ltn__testimoni-img">
                   <img src="img/testimonial/5.jpg" alt="#" />
                 </div>
                 <div className="ltn__testimoni-info">
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                   </p>
                   <h4>Rosalina D. William</h4>
                   <h6>Founder</h6>
                 </div>
                 <div className="ltn__testimoni-bg-icon">
                   <i className="far fa-comments" />
                 </div>
               </div>
             </div>
             {/*  */}
           </div>
         </div>
       </div>
       {/* TESTIMONIAL AREA END */}
       {/* FAQ AREA START (faq-2) (ID > accordion_2) */}
       <div className="ltn__faq-area pt-115 pb-120">
         <div className="container">
           <div className="row">
             <div className="col-lg-12">
               <div className="section-title-area ltn__section-title-2 text-center">
                 <h1 className="section-title white-color---">Some Questions</h1>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-lg-6">
               <div className="ltn__faq-inner ltn__faq-inner-2">
                 <div id="accordion_2">
                   {/* card */}
                   <div className="card">
                     <h6
                       className="collapsed ltn__card-title"
                       data-bs-toggle="collapse"
                       data-bs-target="#faq-item-2-1"
                       aria-expanded="false"
                     >
                       How to buy a product?
                     </h6>
                     <div
                       id="faq-item-2-1"
                       className="collapse"
                       data-parent="#accordion_2"
                     >
                       <div className="card-body">
                         <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                           sed do eiusmod tempor incididunt ut labore et dolore
                           magna aliqua. Scelerisque eleifend donec pretium
                           vulputate sapien nec sagittis. Proin libero nunc
                           consequat interdum. Condimentum lacinia quis vel eros
                           donec ac.
                         </p>
                       </div>
                     </div>
                   </div>
                   {/* card */}
                   <div className="card">
                     <h6
                       className="ltn__card-title"
                       data-bs-toggle="collapse"
                       data-bs-target="#faq-item-2-2"
                       aria-expanded="true"
                     >
                       How can i make refund from your website?
                     </h6>
                     <div
                       id="faq-item-2-2"
                       className="collapse show"
                       data-parent="#accordion_2"
                     >
                       <div className="card-body">
                         <div className="ltn__video-img alignleft">
                           <img src="img/bg/17.jpg" alt="video popup bg image" />
                           <a
                             className="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----"
                             href="https://www.youtube.com/embed/LjCzPp-MK48?autoplay=1&showinfo=0"
                             data-rel="lightcase:myCollection"
                           >
                             <i className="fa fa-play" />
                           </a>
                         </div>
                         <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                           sed do eiusmod tempor incididunt ut labore et dolore
                           magna aliqua. Scelerisque{" "}
                         </p>
                       </div>
                     </div>
                   </div>
                   {/* card */}
                   <div className="card">
                     <h6
                       className="collapsed ltn__card-title"
                       data-bs-toggle="collapse"
                       data-bs-target="#faq-item-2-3"
                       aria-expanded="false"
                     >
                       I am a new user. How should I start?
                     </h6>
                     <div
                       id="faq-item-2-3"
                       className="collapse"
                       data-parent="#accordion_2"
                     >
                       <div className="card-body">
                         <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                           sed do eiusmod tempor incididunt ut labore et dolore
                           magna aliqua. Scelerisque eleifend donec pretium
                           vulputate sapien nec sagittis. Proin libero nunc
                           consequat interdum. Condimentum lacinia quis vel eros
                           donec ac.
                         </p>
                       </div>
                     </div>
                   </div>
                   {/* card */}
                   <div className="card">
                     <h6
                       className="collapsed ltn__card-title"
                       data-bs-toggle="collapse"
                       data-bs-target="#faq-item-2-4"
                       aria-expanded="false"
                     >
                       Returns and refunds
                     </h6>
                     <div
                       id="faq-item-2-4"
                       className="collapse"
                       data-parent="#accordion_2"
                     >
                       <div className="card-body">
                         <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                           sed do eiusmod tempor incididunt ut labore et dolore
                           magna aliqua. Scelerisque eleifend donec pretium
                           vulputate sapien nec sagittis. Proin libero nunc
                           consequat interdum. Condimentum lacinia quis vel eros
                           donec ac.
                         </p>
                       </div>
                     </div>
                   </div>
                   {/* card */}
                   <div className="card">
                     <h6
                       className="collapsed ltn__card-title"
                       data-bs-toggle="collapse"
                       data-bs-target="#faq-item-2-5"
                       aria-expanded="false"
                     >
                       Are my details secured?
                     </h6>
                     <div
                       id="faq-item-2-5"
                       className="collapse"
                       data-parent="#accordion_2"
                     >
                       <div className="card-body">
                         <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                           sed do eiusmod tempor incididunt ut labore et dolore
                           magna aliqua. Scelerisque eleifend donec pretium
                           vulputate sapien nec sagittis. Proin libero nunc
                           consequat interdum. Condimentum lacinia quis vel eros
                           donec ac. Mauris sit amet massa vitae tortor. Quisque id
                           diam vel quam elementum pulvinar. Gravida in fermentum
                           et sollicitudin ac orci phasellus. Facilisis gravida
                           neque convallis a cras semper. Non arcu risus quis
                           varius quam quisque id.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-lg-6">
               <aside className="sidebar-area ltn__right-sidebar mt-60">
                 {/* Banner Widget */}
                 <div className="widget ltn__banner-widget">
                   <a href="shop.html">
                     <img src="img/bg/12.png" alt="Banner Image" />
                   </a>
                 </div>
               </aside>
             </div>
           </div>
         </div>
       </div>
       {/* FAQ AREA START */}
       {/* NEWSLETTER AREA START */}
       <div
         className="ltn__newsletter-area section-bg-1 bg-overlay-black-90 pt-110 pb-90 bg-image"
         data-bg="img/bg/2.jpg"
       >
         <div className="container">
           <div className="row">
             <div className="col-lg-8 offset-lg-2">
               <div className="ltn__newsletter-inner text-center">
                 <h1 className="white-color">We make your inbox better</h1>
                 <p className="white-color">
                   Sign up to our newsletter to receive grooming tips, style
                   inspiration, <br /> exclusive access to pre-launch product
                   pricing and more.
                 </p>
                 <form action="#" className="ltn__form-box">
                   <input type="email" name="email" placeholder="Email*" />
                   <div className="btn-wrapper">
                     <button
                       className="theme-btn-1 btn btn-effect-1 text-uppercase"
                       type="submit"
                     >
                       Subscribe
                     </button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* NEWSLETTER AREA END */}
       {/* BLOG AREA START (blog-3) */}
       <div className="ltn__blog-area pt-115 pb-70">
         <div className="container">
           <div className="row">
             <div className="col-lg-12">
               <div className="section-title-area ltn__section-title-2 text-center">
                 <h1 className="section-title white-color---">Leatest Blog</h1>
               </div>
             </div>
           </div>
           <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
             {/* Blog Item */}
             <div className="col-lg-12">
               <div className="ltn__blog-item ltn__blog-item-3">
                 <div className="ltn__blog-img">
                   <a href="blog-details.html">
                     <img src="img/blog/1.jpg" alt="#" />
                   </a>
                 </div>
                 <div className="ltn__blog-brief">
                   <div className="ltn__blog-meta">
                     <ul>
                       <li className="ltn__blog-author">
                         <a href="#">
                           <i className="far fa-user" />
                           by: Admin
                         </a>
                       </li>
                       <li className="ltn__blog-tags">
                         <a href="#">
                           <i className="fas fa-tags" />
                           Services
                         </a>
                       </li>
                     </ul>
                   </div>
                   <h3 className="ltn__blog-title">
                     <a href="blog-details.html">
                       Common Engine Oil Problems and Solutions
                     </a>
                   </h3>
                   <div className="ltn__blog-meta-btn">
                     <div className="ltn__blog-meta">
                       <ul>
                         <li className="ltn__blog-date">
                           <i className="far fa-calendar-alt" />
                           June 24, 2020
                         </li>
                       </ul>
                     </div>
                     <div className="ltn__blog-btn">
                       <a href="blog-details.html">Read more</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             {/* Blog Item */}
             <div className="col-lg-12">
               <div className="ltn__blog-item ltn__blog-item-3">
                 <div className="ltn__blog-img">
                   <a href="blog-details.html">
                     <img src="img/blog/2.jpg" alt="#" />
                   </a>
                 </div>
                 <div className="ltn__blog-brief">
                   <div className="ltn__blog-meta">
                     <ul>
                       <li className="ltn__blog-author">
                         <a href="#">
                           <i className="far fa-user" />
                           by: Admin
                         </a>
                       </li>
                       <li className="ltn__blog-tags">
                         <a href="#">
                           <i className="fas fa-tags" />
                           Services
                         </a>
                       </li>
                     </ul>
                   </div>
                   <h3 className="ltn__blog-title">
                     <a href="blog-details.html">
                       How and when to replace brake rotors
                     </a>
                   </h3>
                   <div className="ltn__blog-meta-btn">
                     <div className="ltn__blog-meta">
                       <ul>
                         <li className="ltn__blog-date">
                           <i className="far fa-calendar-alt" />
                           July 23, 2020
                         </li>
                       </ul>
                     </div>
                     <div className="ltn__blog-btn">
                       <a href="blog-details.html">Read more</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             {/* Blog Item */}
             <div className="col-lg-12">
               <div className="ltn__blog-item ltn__blog-item-3">
                 <div className="ltn__blog-img">
                   <a href="blog-details.html">
                     <img src="img/blog/3.jpg" alt="#" />
                   </a>
                 </div>
                 <div className="ltn__blog-brief">
                   <div className="ltn__blog-meta">
                     <ul>
                       <li className="ltn__blog-author">
                         <a href="#">
                           <i className="far fa-user" />
                           by: Admin
                         </a>
                       </li>
                       <li className="ltn__blog-tags">
                         <a href="#">
                           <i className="fas fa-tags" />
                           Services
                         </a>
                       </li>
                     </ul>
                   </div>
                   <h3 className="ltn__blog-title">
                     <a href="blog-details.html">
                       Elenance, Servicing &amp; Repairs
                     </a>
                   </h3>
                   <div className="ltn__blog-meta-btn">
                     <div className="ltn__blog-meta">
                       <ul>
                         <li className="ltn__blog-date">
                           <i className="far fa-calendar-alt" />
                           August 22, 2020
                         </li>
                       </ul>
                     </div>
                     <div className="ltn__blog-btn">
                       <a href="blog-details.html">Read more</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             {/* Blog Item */}
             <div className="col-lg-12">
               <div className="ltn__blog-item ltn__blog-item-3">
                 <div className="ltn__blog-img">
                   <a href="blog-details.html">
                     <img src="img/blog/4.jpg" alt="#" />
                   </a>
                 </div>
                 <div className="ltn__blog-brief">
                   <div className="ltn__blog-meta">
                     <ul>
                       <li className="ltn__blog-author">
                         <a href="#">
                           <i className="far fa-user" />
                           by: Admin
                         </a>
                       </li>
                       <li className="ltn__blog-tags">
                         <a href="#">
                           <i className="fas fa-tags" />
                           Services
                         </a>
                       </li>
                     </ul>
                   </div>
                   <h3 className="ltn__blog-title">
                     <a href="blog-details.html">He for your First Track Day!</a>
                   </h3>
                   <div className="ltn__blog-meta-btn">
                     <div className="ltn__blog-meta">
                       <ul>
                         <li className="ltn__blog-date">
                           <i className="far fa-calendar-alt" />
                           June 24, 2020
                         </li>
                       </ul>
                     </div>
                     <div className="ltn__blog-btn">
                       <a href="blog-details.html">Read more</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             {/* Blog Item */}
             <div className="col-lg-12">
               <div className="ltn__blog-item ltn__blog-item-3">
                 <div className="ltn__blog-img">
                   <a href="blog-details.html">
                     <img src="img/blog/5.jpg" alt="#" />
                   </a>
                 </div>
                 <div className="ltn__blog-brief">
                   <div className="ltn__blog-meta">
                     <ul>
                       <li className="ltn__blog-author">
                         <a href="#">
                           <i className="far fa-user" />
                           by: Admin
                         </a>
                       </li>
                       <li className="ltn__blog-tags">
                         <a href="#">
                           <i className="fas fa-tags" />
                           Services
                         </a>
                       </li>
                     </ul>
                   </div>
                   <h3 className="ltn__blog-title">
                     <a href="blog-details.html">How te Your Tires Last Longer</a>
                   </h3>
                   <div className="ltn__blog-meta-btn">
                     <div className="ltn__blog-meta">
                       <ul>
                         <li className="ltn__blog-date">
                           <i className="far fa-calendar-alt" />
                           June 24, 2022
                         </li>
                       </ul>
                     </div>
                     <div className="ltn__blog-btn">
                       <a href="blog-details.html">Read more</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             {/*  */}
           </div>
         </div>
       </div>
       {/* BLOG AREA END */}
       {/* FEATURE AREA START ( Feature - 3) */}
       <div className="ltn__feature-area before-bg-bottom-2 mb--30--- plr--5">
         <div className="container-fluid">
           <div className="row">
             <div className="col-lg-12">
               <div className="ltn__feature-item-box-wrap ltn__border-between-column white-bg">
                 <div className="row">
                   <div className="col-xl-3 col-md-6 col-12">
                     <div className="ltn__feature-item ltn__feature-item-8">
                       <div className="ltn__feature-icon">
                         <img src="img/icons/icon-img/11.png" alt="#" />
                       </div>
                       <div className="ltn__feature-info">
                         <h4>Curated Products</h4>
                         <p>
                           Provide Curated Products for all product over 1000.00
                         </p>
                       </div>
                     </div>
                   </div>
                   <div className="col-xl-3 col-md-6 col-12">
                     <div className="ltn__feature-item ltn__feature-item-8">
                       <div className="ltn__feature-icon">
                         <img src="img/icons/icon-img/12.png" alt="#" />
                       </div>
                       <div className="ltn__feature-info">
                         <h4>Handmade</h4>
                         <p>We ensure the product quality that is our main goal</p>
                       </div>
                     </div>
                   </div>
                   <div className="col-xl-3 col-md-6 col-12">
                     <div className="ltn__feature-item ltn__feature-item-8">
                       <div className="ltn__feature-icon">
                         <img src="img/icons/icon-img/13.png" alt="#" />
                       </div>
                       <div className="ltn__feature-info">
                         <h4>Natural Food</h4>
                         <p>
                           Return product within 3 days for any product you buy
                         </p>
                       </div>
                     </div>
                   </div>
                   <div className="col-xl-3 col-md-6 col-12">
                     <div className="ltn__feature-item ltn__feature-item-8">
                       <div className="ltn__feature-icon">
                         <img src="img/icons/icon-img/14.png" alt="#" />
                       </div>
                       <div className="ltn__feature-info">
                         <h4>Free home delivery</h4>
                         <p>
                           We ensure the product quality that you can trust easily
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* FEATURE AREA END */}
       {/* FOOTER AREA START */}
       <footer className="ltn__footer-area  ">
         <div className="footer-top-area  section-bg-1 plr--5">
           <div className="container-fluid">
             <div className="row">
               <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                 <div className="footer-widget footer-about-widget">
                   <div className="footer-logo">
                     <div className="site-logo">
                       <img src="img/logo.png" alt="Logo" />
                     </div>
                   </div>
                   <p>
                     Lorem Ipsum is simply dummy text of the and typesetting
                     industry. Lorem Ipsum is dummy text of the printing.
                   </p>
                   <div className="footer-address">
                     <ul>
                       <li>
                         <div className="footer-address-icon">
                           <i className="icon-placeholder" />
                         </div>
                         <div className="footer-address-info">
                           <p>Mumbai , Gujarat , India</p>
                         </div>
                       </li>
                       <li>
                         <div className="footer-address-icon">
                           <i className="icon-call" />
                         </div>
                         <div className="footer-address-info">
                           <p>
                             <a href="tel:+0123-456789">+0123-456789</a>
                           </p>
                         </div>
                       </li>
                       <li>
                         <div className="footer-address-icon">
                           <i className="icon-mail" />
                         </div>
                         <div className="footer-address-info">
                           <p>
                             <a href="mailto:example@example.com">
                               example@example.com
                             </a>
                           </p>
                         </div>
                       </li>
                     </ul>
                   </div>
                   <div className="ltn__social-media mt-20">
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
                         <a href="#" title="Linkedin">
                           <i className="fab fa-linkedin" />
                         </a>
                       </li>
                       <li>
                         <a href="#" title="Youtube">
                           <i className="fab fa-youtube" />
                         </a>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                 <div className="footer-widget footer-menu-widget clearfix">
                   <h4 className="footer-title">Company</h4>
                   <div className="footer-menu">
                     <ul>
                       <li>
                         <a href="about.html">About</a>
                       </li>
                       <li>
                         <a href="blog.html">Blog</a>
                       </li>
                       <li>
                         <a href="shop.html">All Products</a>
                       </li>
                       <li>
                         <a href="locations.html">Locations Map</a>
                       </li>
                       <li>
                         <a href="faq.html">FAQ</a>
                       </li>
                       <li>
                         <a href="contact.html">Contact us</a>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                 <div className="footer-widget footer-menu-widget clearfix">
                   <h4 className="footer-title">Services.</h4>
                   <div className="footer-menu">
                     <ul>
                       <li>
                         <a href="order-tracking.html">Order tracking</a>
                       </li>
                       <li>
                         <a href="wishlist.html">Wish List</a>
                       </li>
                       <li>
                         <a href="login.html">Login</a>
                       </li>
                       <li>
                         <a href="account.html">My account</a>
                       </li>
                       <li>
                         <a href="about.html">Terms &amp; Conditions</a>
                       </li>
                       <li>
                         <a href="about.html">Promotional Offers</a>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                 <div className="footer-widget footer-menu-widget clearfix">
                   <h4 className="footer-title">Customer Care</h4>
                   <div className="footer-menu">
                     <ul>
                       <li>
                         <a href="login.html">Login</a>
                       </li>
                       <li>
                         <a href="account.html">My account</a>
                       </li>
                       <li>
                         <a href="wishlist.html">Wish List</a>
                       </li>
                       <li>
                         <a href="order-tracking.html">Order tracking</a>
                       </li>
                       <li>
                         <a href="faq.html">FAQ</a>
                       </li>
                       <li>
                         <a href="contact.html">Contact us</a>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                 <div className="footer-widget footer-newsletter-widget">
                   <h4 className="footer-title">Newsletter</h4>
                   <p>
                     Subscribe to our weekly Newsletter and receive updates via
                     email.
                   </p>
                   <div className="footer-newsletter">
                     <form action="#">
                       <input type="email" name="email" placeholder="Email*" />
                       <div className="btn-wrapper">
                         <button className="theme-btn-1 btn" type="submit">
                           <i className="fas fa-location-arrow" />
                         </button>
                       </div>
                     </form>
                   </div>
                   <h5 className="mt-30">We Accept</h5>
                   <img src="img/icons/payment-4.png" alt="Payment Image" />
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
                   <p>
                     All Rights Reserved @ Company{" "}
                     <span className="current-year" />
                   </p>
                 </div>
               </div>
               <div className="col-md-6 col-12 align-self-center">
                 <div className="ltn__copyright-menu text-right text-end">
                   <ul>
                     <li>
                       <a href="#">Terms &amp; Conditions</a>
                     </li>
                     <li>
                       <a href="#">Claim</a>
                     </li>
                     <li>
                       <a href="#">Privacy &amp; Policy</a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </footer>
       {/* FOOTER AREA END */}
     </div>
     {/* Body main wrapper end */}
     {/* preloader area start */}
   
     {/* preloader area end */}
     {/* All JS Plugins */}
     {/* Main JS */}
   </>
   </>      )
      }
