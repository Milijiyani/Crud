import axios from 'axios'
import React, { useState } from 'react'
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { backend_url } from '../config'
export default function Home() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phoneno, setPhoneno] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [cityError, setCityError] = useState("");
    const [stateError, setStateError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    let deviceRegisted = localStorage.getItem("token");

    const phoneRegex = /^\d{10}$/; // Regex for a 10-digit phone number
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Basic email validation regex
    const nameRegex = /^[A-Za-z]+$/; // Regex for alphabetic names
    const addressRegex = /^[a-zA-Z0-9\s,.'-]{3,}$/; // Regex for addresses (alphanumeric with common punctuation)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/;

    const createReg = (e) => {
        e.preventDefault();
        // Validate phone number
        if (!phoneRegex.test(phoneno)) {
            setPhoneError("Please enter a valid 10-digit phone number.");
            return;
        }
        // Validate email
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }
        // Validate firstname
        if (!nameRegex.test(firstname)) {
            setFirstnameError("Please enter a valid first name.");
            return;
        }
        // Validate lastname
        if (!nameRegex.test(lastname)) {
            setLastnameError("Please enter a valid last name.");
            return;
        }
        // Validate address
        if (!addressRegex.test(address)) {
            setAddressError("Please enter a valid address.");
            return;
        }
        // Validate city
        if (!nameRegex.test(city)) {
            setCityError("Please enter a valid city.");
            return;
        }
        // Validate state
        if (!nameRegex.test(state)) {
            setStateError("Please enter a valid state.");
            return;
        }
        // Validate password
        if (!passwordRegex.test(password)) {
            setPasswordError(
                "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
            );
            return;
        }
        // If all validations pass, make the Axios POST request and reset the form
        axios
            .post(backend_url + "/users/register", {
                firstname,
                lastname,
                phoneno,
                address,
                city,
                state,
                email,
                password,
            })
            .then(function (response) {
                if (response.status === 200) {
                    const token = response.data.data;
                    localStorage.setItem("token", token);
                    console.log(response.data.message);
                    // Reset the form fields
                    setFirstname("");
                    setLastname("");
                    setPhoneno("");
                    setAddress("");
                    setCity("");
                    setState("");
                    setEmail("");
                    setPassword("");
                    //refresh the page on submit form
                    window.location.reload();
                } else {
                    console.log("Something went wrong");
                }
            })
            .catch(function (error) {
                console.log("Error:", error);
            });
    };

    const createLogin = () => {
        // console.log(email)
        // console.log(password)
        axios.post(backend_url + '/users/login', {

            email,
            password
        })
            .then(response => {

                if (response.status === 200) {
                    const token = response.data.data;
                    localStorage.setItem("token", token);
                    console.log(response.data.message);
                    window.location.reload();
                } else {
                    console.log("Somthing went wrong");
                }
                
            })
            .catch(function (error) {
                console.log("Error", error);
            });
    }
    const handleLogoutClick = () => {
        logOut();
        // Optionally, you can perform additional actions upon logout
    };
    
   
    
    const logOut = () => {

        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <>      <header className="ltn__header-area ltn__header-5 ltn__header-transparent gradient-color-4---">

            <div className="ltn__header-top-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="ltn__top-bar-menu">
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="top-bar-right  text-end">
                                <div className="ltn__top-bar-menu">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white ltn__logo-right-menu-option sticky-active-into-mobile--- plr--9---">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="site-logo-wrap">
                                <div className="site-logo">
                                    <a href="index-2.html"><img src="img/logo.png" alt="Logo" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col header-menu-column menu-color-white---">
                            <div className="header-menu d-none d-xl-block">
                                <nav>
                                    <div className="ltn__main-menu">
                                        <ul>
                                            <li className="menu-icon"><a href="/">Home</a>
                                            </li>
                                            <li className="menu-icon"><a href="/about">About</a>

                                            </li>
                                            <li className="menu-icon"><a href="/shop">Shop</a>

                                            </li>
                                            <li className="menu-icon"><a href="/cart">Cart</a>

                                            </li>
                                            <li className="menu-icon"><a href="/contactus">Contact us</a>

                                            </li>

                                        </ul>
                                    </div>

                                </nav>

                            </div>
                        </div>


                        <div >
                            <div style={{ display: 'flex', justifyContent: "end" }}>

                                {!deviceRegisted &&
                                    <>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            Sign up
                                        </button>
                                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Sign up</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form>
                                                            <form >
                                                                <div style={{ textAlign: 'left' }}>
                                                                    <label htmlFor="validationDefault01" className="form-label">
                                                                        First name
                                                                    </label>
                                                                    <input
                                                                        name="firstname"
                                                                        className="form-control"
                                                                        id="validationDefault01"
                                                                        required
                                                                        onChange={(e) => setFirstname(e.target.value)}
                                                                    />
                                                                    <span className="error">
                                                                        {firstnameError}
                                                                    </span>

                                                                </div>
                                                                <div style={{ textAlign: 'left' }}>
                                                                    <label htmlFor="validationDefault02" className="form-label">
                                                                        Last name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="lastname"
                                                                        className="form-control"
                                                                        id="validationDefault02"
                                                                        required
                                                                        onChange={(e) => setLastname(e.target.value)}
                                                                    />
                                                                </div>
                                                                <div style={{ textAlign: 'left' }}>
                                                                    <label htmlFor="validationDefaultUsername" className="form-label">
                                                                        Phone no.
                                                                    </label>
                                                                    <div className="input-group">

                                                                        <input
                                                                            type="number"
                                                                            name="phoneno"
                                                                            className="form-control"
                                                                            id="validationDefaultUsername"
                                                                            aria-describedby="inputGroupPrepend2"
                                                                            required
                                                                            onChange={(e) => setPhoneno(e.target.value)}
                                                                        />

                                                                        <span className="error">
                                                                            {lastnameError}
                                                                        </span>
                                                                    </div>
                                                                    <span className="error">{phoneError}</span>
                                                                </div>
                                                                <div style={{ textAlign: 'left' }}>
                                                                    <label htmlFor="validationDefault05" className="form-label">
                                                                        Address
                                                                    </label>
                                                                    <input
                                                                        type="Textarea"
                                                                        name="address"
                                                                        className="form-control"
                                                                        id="validationDefault05"
                                                                        required
                                                                        onChange={(e) => setAddress(e.target.value)}
                                                                    />
                                                                    <span className="error">
                                                                        {addressError}
                                                                    </span>
                                                                </div>
                                                                <div style={{ textAlign: 'left' }}>
                                                                    <label htmlFor="validationDefault03" className="form-label">
                                                                        City
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="city"
                                                                        className="form-control"
                                                                        id="validationDefault03"
                                                                        required
                                                                        onChange={(e) => setCity(e.target.value)}
                                                                    />

                                                                    <span className="error">
                                                                        {cityError}
                                                                    </span>
                                                                </div>
                                                                <div style={{ textAlign: 'left' }}>
                                                                    <label htmlFor="validationDefault04" className="form-label">
                                                                        State
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name="state"
                                                                        className="form-control"
                                                                        id="validationDefault03"
                                                                        required
                                                                        onChange={(e) => setState(e.target.value)}
                                                                    />

                                                                    <span className="error">
                                                                        {stateError}
                                                                    </span>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <div style={{ textAlign: 'left' }}>
                                                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                                                            Email
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            name="email"
                                                                            className="form-control"
                                                                            id="exampleInputEmail1"
                                                                            aria-describedby="emailHelp"
                                                                            required
                                                                            onChange={(e) => setEmail(e.target.value)}
                                                                        />
                                                                        <span className="error">{emailError}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <div style={{ textAlign: 'left' }}>
                                                                        <label htmlFor="exampleInputPassword1" className="form-label">
                                                                            Password
                                                                        </label>
                                                                        <input
                                                                            type="password"
                                                                            name="password"
                                                                            required
                                                                            className="form-control"
                                                                            id="exampleInputPassword1"
                                                                            onChange={(e) => setPassword(e.target.value)}
                                                                        />
                                                                        <span className="error">
                                                                            {passwordError}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <button onClick={createReg}>Submit</button>

                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </>

                                }



                                {!deviceRegisted &&
                                    <>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Sign in
                                        </button>
                                        <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="staticBackdropLabel"> Login </h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form>
                                                            <div className="mb-3">
                                                                <div style={{ textAlign: 'left' }}>
                                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                                        Email
                                                                    </label>
                                                                    <input
                                                                        type="email"
                                                                        name="email"
                                                                        className="form-control"
                                                                        id="exampleInputEmail1"
                                                                        aria-describedby="emailHelp"
                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <div style={{ textAlign: 'left' }}>
                                                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                                                        Password
                                                                    </label>
                                                                    <input
                                                                        type="password"
                                                                        name="password"
                                                                        className="form-control"
                                                                        id="exampleInputPassword1"
                                                                        onChange={(e) => setPassword(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <button type='button' onClick={createLogin}>Submit</button>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </>
                                }
                                {deviceRegisted && (
        <button type="button" onClick={handleLogoutClick} className="btn btn-primary">
            Log out
        </button>
    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            <title>Broccoli - Organic Food HTML Template</title>

            <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
                <div className="ltn__utilize-menu-inner ltn__scrollbar">
                    <div className="ltn__utilize-menu-head">
                        <div className="site-logo">
                            <a href="index-2.html"><img src="img/logo.png" alt="Logo" /></a>
                        </div>
                        <button className="ltn__utilize-close">×</button>
                    </div>
                    <div className="ltn__utilize-menu-search-form">
                        <form action="#">
                            <input type="text" placeholder="Search..." />
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
                            <li><a href="/cart">Cart</a>

                            </li>
                            <li><a href="/contact">Contact</a></li>
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
                            {/* <li>
                                <a href="wishlist.html" title="Wishlist">
                                    <span className="utilize-btn-icon">
                                        <i className="far fa-heart"></i>
                                        <sup>3</sup>
                                    </span>
                                    Wishlist
                                </a>
                            </li> */}

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

            <div className="ltn__slider-area ltn__slider-3  section-bg-1">
                <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
                    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
                        <div className="ltn__slide-item-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 align-self-center">
                                        <div className="slide-item-info">
                                            <div className="slide-item-info-inner ltn__slide-animation">
                                                <div className="slide-video mb-50 d-none">
                                                    <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/ATI7vfCgwXE?autoplay=1&amp;showinfo=0" data-rel="lightcase:myCollection">
                                                        <i className="fa fa-play"></i>
                                                    </a>
                                                </div>
                                                <h6 className="slide-sub-title animated"><img src="img/icons/icon-img/1.png" alt="#" /> 100% genuine Products</h6>
                                                <h1 className="slide-title animated ">Tasty & Healthy <br />  Organic Food</h1>
                                                <div className="slide-brief animated d-none">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                </div>
                                                <div className="btn-wrapper animated">
                                                    <a href="shop.html" className="theme-btn-1 btn btn-effect-1 text-uppercase">Explore Products</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide-item-img">
                                            <img src="img/slider/23.png" alt="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
                        <div className="ltn__slide-item-inner  text-right text-end">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 align-self-center">
                                        <div className="slide-item-info">
                                            <div className="slide-item-info-inner ltn__slide-animation">
                                                <h6 className="slide-sub-title animated"><img src="img/icons/icon-img/1.png" alt="#" /> 100% genuine Products</h6>
                                                <h1 className="slide-title animated ">Our Garden's  Most <br />   Favorite Food</h1>
                                                <div className="slide-brief animated">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                </div>
                                                <div className="btn-wrapper animated">
                                                    <a href="shop.html" className="theme-btn-1 btn btn-effect-1 text-uppercase">Explore Products</a>
                                                    <a href="about.html" className="btn btn-transparent btn-effect-3 text-uppercase">LEARN MORE</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide-item-img slide-img-left">
                                            <img src="img/slider/21.png" alt="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ltn__banner-area mt-120 mt--90 d-none">
                <div className="container">
                    <div className="row ltn__custom-gutter--- justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__banner-item">
                                <div className="ltn__banner-img">
                                    <a href="shop.html"><img src="img/banner/1.jpg" alt="Banner Image" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__banner-item">
                                <div className="ltn__banner-img">
                                    <a href="shop.html"><img src="img/banner/2.jpg" alt="Banner Image" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__banner-item">
                                <div className="ltn__banner-img">
                                    <a href="shop.html"><img src="img/banner/1.jpg" alt="Banner Image" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ltn__banner-area mt-120">
                <div className="container">
                    <div className="row ltn__custom-gutter--- justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="ltn__banner-item">
                                <div className="ltn__banner-img">
                                    <a href="shop.html"><img src="img/banner/13.png" alt="Banner Image" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ltn__banner-item">
                                        <div className="ltn__banner-img">
                                            <a href="shop.html"><img src="img/banner/14.png" alt="Banner Image" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="ltn__banner-item">
                                        <div className="ltn__banner-img">
                                            <a href="shop.html"><img src="img/banner/15.png" alt="Banner Image" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ltn__product-tab-area ltn__product-gutter pt-85 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2 text-center">
                                <h1 className="section-title">Our Products</h1>
                            </div>
                            <div className="ltn__tab-menu ltn__tab-menu-2 ltn__tab-menu-top-right-- text-uppercase text-center">
                                <div className="nav">
                                    <a className="active show" data-bs-toggle="tab" href="#liton_tab_3_1">Fruits & Vegetables</a>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="liton_tab_3_1">
                                    <div className="ltn__product-tab-content-inner">
                                        <div className="row ltn__tab-product-slider-one-active slick-arrow-1">

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/11.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/7.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Poltry Farm Meat</h2>
                                                        <div className="product-price">
                                                            <span>780.00</span>
                                                            <del>850.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/12.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/8.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Orange Sliced Mix</h2>
                                                        <div className="product-price">
                                                            <span>1500.00</span>
                                                            <del>1800.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/13.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Orange Fresh Juice</h2>
                                                        <div className="product-price">
                                                            <span>750.00</span>
                                                            <del>920.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/9.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/14.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">
                                                            <ul>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Poltry Farm Meat</h2>
                                                        <div className="product-price">
                                                            <span>780.00</span>
                                                            <del>850.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/10.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Orange Fresh Juice</h2>
                                                        <div className="product-price">
                                                            <span>750.00</span>
                                                            <del>920.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/15.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Fresh Butter Cake</h2>
                                                        <div className="product-price">
                                                            <span>1500.00</span>
                                                            <del>1800.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/6.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/7.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>/
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Orange Sliced Mix</h2>
                                                        <div className="product-price">
                                                            <span>1500.00</span>
                                                            <del>1800.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/11.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="liton_tab_3_2">
                                    <div className="ltn__product-tab-content-inner">
                                        <div className="row ltn__tab-product-slider-one-active slick-arrow-1">

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/16.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Orange</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            {/* <del>460.00</del> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/10.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Broccoli</h2>
                                                        <div className="product-price">
                                                            <span>780.00</span>
                                                            {/* <del>850.00</del> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/15.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/9.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Orange Sliced Mix</h2>
                                                        <div className="product-price">
                                                            <span>1500.00</span>
                                                            <del>1800.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/14.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Orange Fresh Juice</h2>
                                                        <div className="product-price">
                                                            <span>750.00</span>
                                                            <del>920.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/8.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/13.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Poltry Farm Meat</h2>
                                                        <div className="product-price">
                                                            <span>780.00</span>
                                                            <del>850.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/10.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Orange Fresh Juice</h2>
                                                        <div className="product-price">
                                                            <span>750.00</span>
                                                            <del>920.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/15.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Fresh Butter Cake</h2>
                                                        <div className="product-price">
                                                            <span>1500.00</span>
                                                            <del>1800.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/6.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/7.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Orange Sliced Mix</h2>
                                                        <div className="product-price">
                                                            <span>1500.00</span>
                                                            <del>1800.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/11.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="liton_tab_3_3">
                                    <div className="ltn__product-tab-content-inner">
                                        <div className="row ltn__tab-product-slider-one-active slick-arrow-1">

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/6.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/12.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Poltry Farm Meat</h2>
                                                        <div className="product-price">
                                                            <span>780.00</span>
                                                            <del>850.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/8.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/15.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Orange Sliced Mix</h2>
                                                        <div className="product-price">
                                                            <span>1500.00</span>
                                                            <del>1800.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/9.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Orange Fresh Juice</h2>
                                                        <div className="product-price">
                                                            <span>750.00</span>
                                                            <del>920.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/11.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/14.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Poltry Farm Meat</h2>
                                                        <div className="product-price">
                                                            <span>780.00</span>
                                                            <del>850.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/10.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Orange Fresh Juice</h2>
                                                        <div className="product-price">
                                                            <span>750.00</span>
                                                            <del>920.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/15.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Fresh Butter Cake</h2>
                                                        <div className="product-price">
                                                            <span>1500.00</span>
                                                            <del>1800.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/6.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/7.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Orange Sliced Mix</h2>
                                                        <div className="product-price">
                                                            <span>1500.00</span>
                                                            <del>1800.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/11.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="liton_tab_3_4">
                                    <div className="ltn__product-tab-content-inner">
                                        <div className="row ltn__tab-product-slider-one-active slick-arrow-1">

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/3.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title">Carrots Group Scal</h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/5.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                                        <div className="product-price">
                                                            <span>780.00</span>
                                                            <del>850.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="liton_tab_3_5">
                                    <div className="ltn__product-tab-content-inner">
                                        <div className="row ltn__tab-product-slider-one-active slick-arrow-1">

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/7.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/13.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                                        <div className="product-price">
                                                            <span>780.00</span>
                                                            <del>850.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/5.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/15.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                                                        <div className="product-price">
                                                            <span>1500.00</span>
                                                            <del>1800.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/9.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                                        <div className="product-price">
                                                            <span>750.00</span>
                                                            <del>920.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/14.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/12.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                                        <div className="product-price">
                                                            <span>780.00</span>
                                                            <del>850.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/10.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                                        <div className="product-price">
                                                            <span>750.00</span>
                                                            <del>920.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/15.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title"><a href="product-details.html">Fresh Butter Cake</a></h2>
                                                        <div className="product-price">
                                                            <span>1500.00</span>
                                                            <del>1800.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/6.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/7.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                                                        <div className="product-price">
                                                            <span>1500.00</span>
                                                            <del>1800.00</del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ltn__product-item ltn__product-item-3 text-center">
                                                    <div className="product-img">
                                                        <a href="product-details.html"><img src="img/product/11.png" alt="#" /></a>
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">-19%</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-hover-action">

                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> (24)</a></li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                        <div className="product-price">
                                                            <span>320.00</span>
                                                            <del>460.00</del>
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
            </div>

            <div className="ltn__call-to-action-area ltn__call-to-action-4 section-bg-1 pt-110 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <img src="img/banner/11.png" alt="#" />
                        </div>
                        <div className="col-lg-7">
                            <div className="call-to-action-inner call-to-action-inner-4 text-color-white--- text-center---">
                                <div className="section-title-area ltn__section-title-2 text-center---">
                                    <h6 className="ltn__secondary-color">Todays Hot Deals</h6>
                                    <h1 className="section-title">Original Stock Honey <br />  Combo Package</h1>
                                </div>
                                <div className="ltn__countdown ltn__countdown-3 bg-white--" data-countdown="2024/12/28"></div>
                                <div className="btn-wrapper animated">
                                    <a href="shop.html" className="theme-btn-1 btn btn-effect-1 text-uppercase">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ltn__product-area ltn__product-gutter pt-115 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2 text-center">
                                <h1 className="section-title">Featured Products</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">

                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="ltn__product-item ltn__product-item-3 text-left">
                                <div className="product-img">
                                    <a href="product-details.html"><img src="img/product/1.png" alt="#" /></a>
                                    <div className="product-badge">
                                        <ul>
                                            <li className="sale-badge">New</li>
                                        </ul>
                                    </div>
                                    <div className="product-hover-action">

                                    </div>
                                </div>
                                <div className="product-info">
                                    <div className="product-ratting">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                    <div className="product-price">
                                        <span>320.00</span>
                                        <del>460.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="ltn__product-item ltn__product-item-3 text-left">
                                <div className="product-img">
                                    <a href="product-details.html"><img src="img/product/2.png" alt="#" /></a>
                                    <div className="product-hover-action">

                                    </div>
                                </div>
                                <div className="product-info">
                                    <div className="product-ratting">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <h2 className="product-title"><a href="product-details.html">Red Hot Tomato</a></h2>
                                    <div className="product-price">
                                        <span>250.00</span>
                                        <del>350.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                                <div className="product-img">
                                    <a href="product-details.html"><img src="img/product/3.png" alt="#" /></a>
                                    <div className="product-badge">
                                        <ul>
                                            <li className="sale-badge">New</li>
                                        </ul>
                                    </div>
                                    <div className="product-hover-action">

                                    </div>
                                </div>
                                <div className="product-info">
                                    <div className="product-ratting">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                    <div className="product-price">
                                        <span>750.00</span>
                                        <del>920.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                                <div className="product-img">
                                    <a href="product-details.html"><img src="img/product/4.png" alt="#" /></a>
                                    <div className="product-badge">
                                        <ul>
                                            <li className="sale-badge">New</li>
                                        </ul>
                                    </div>
                                    <div className="product-hover-action">

                                    </div>
                                </div>
                                <div className="product-info">
                                    <div className="product-ratting">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                    <div className="product-price">
                                        <span>780.00</span>
                                        <del>850.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                                <div className="product-img">
                                    <a href="product-details.html"><img src="img/product/5.png" alt="#" /></a>
                                    <div className="product-badge">
                                        <ul>
                                            <li className="sale-badge">New</li>
                                        </ul>
                                    </div>
                                    <div className="product-hover-action">

                                    </div>
                                </div>
                                <div className="product-info">
                                    <div className="product-ratting">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <h2 className="product-title"><a href="product-details.html">Fresh Butter Cake</a></h2>
                                    <div className="product-price">
                                        <span>1500.00</span>
                                        <del>1800.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                                <div className="product-img">
                                    <a href="product-details.html"><img src="img/product/6.png" alt="#" /></a>
                                    <div className="product-badge">
                                        <ul>
                                            <li className="sale-badge">New</li>
                                        </ul>
                                    </div>
                                    <div className="product-hover-action">

                                    </div>
                                </div>
                                <div className="product-info">
                                    <div className="product-ratting">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                                    <div className="product-price">
                                        <span>1500.00</span>
                                        <del>1800.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                                <div className="product-img">
                                    <a href="product-details.html"><img src="img/product/7.png" alt="#" /></a>
                                    <div className="product-badge">
                                        <ul>
                                            <li className="sale-badge">New</li>
                                        </ul>
                                    </div>
                                    <div className="product-hover-action">

                                    </div>
                                </div>
                                <div className="product-info">
                                    <div className="product-ratting">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                    <div className="product-price">
                                        <span>750.00</span>
                                        <del>920.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                                <div className="product-img">
                                    <a href="product-details.html"><img src="img/product/8.png" alt="#" /></a>
                                    <div className="product-badge">
                                        <ul>
                                            <li className="sale-badge">New</li>
                                        </ul>
                                    </div>
                                    <div className="product-hover-action">

                                    </div>
                                </div>
                                <div className="product-info">
                                    <div className="product-ratting">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                    <div className="product-price">
                                        <span>780.00</span>
                                        <del>850.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="ltn__video-popup-area ltn__video-popup-margin">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__video-bg-img ltn__video-popup-height-600 bg-overlay-black-10-- bg-image" data-bg="img/bg/15.jpg">
                                <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/ATI7vfCgwXE?autoplay=1&amp;showinfo=0" data-rel="lightcase:myCollection">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ltn__testimonial-area section-bg-1 pt-290 pb-70">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2 text-center">
                                <h6 className="section-subtitle ltn__secondary-color">//  Testimonials</h6>
                                <h1 className="section-title">Clients Feedbacks<span>.</span></h1>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <h4>Rosalina D. William</h4>
                                    <h6>Founder</h6>
                                </div>
                                <div className="ltn__testimoni-bg-icon">
                                    <i className="far fa-comments"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__testimonial-item ltn__testimonial-item-4">
                                <div className="ltn__testimoni-img">
                                    <img src="img/testimonial/7.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <h4>Rosalina D. William</h4>
                                    <h6>Founder</h6>
                                </div>
                                <div className="ltn__testimoni-bg-icon">
                                    <i className="far fa-comments"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__testimonial-item ltn__testimonial-item-4">
                                <div className="ltn__testimoni-img">
                                    <img src="img/testimonial/1.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <h4>Rosalina D. William</h4>
                                    <h6>Founder</h6>
                                </div>
                                <div className="ltn__testimoni-bg-icon">
                                    <i className="far fa-comments"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__testimonial-item ltn__testimonial-item-4">
                                <div className="ltn__testimoni-img">
                                    <img src="img/testimonial/2.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <h4>Rosalina D. William</h4>
                                    <h6>Founder</h6>
                                </div>
                                <div className="ltn__testimoni-bg-icon">
                                    <i className="far fa-comments"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__testimonial-item ltn__testimonial-item-4">
                                <div className="ltn__testimoni-img">
                                    <img src="img/testimonial/5.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <h4>Rosalina D. William</h4>
                                    <h6>Founder</h6>
                                </div>
                                <div className="ltn__testimoni-bg-icon">
                                    <i className="far fa-comments"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                        <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                                <div className="ltn__blog-img">
                                    <a href="blog-details.html"><img src="img/blog/1.jpg" alt="#" /></a>
                                </div>
                                <div className="ltn__blog-brief">
                                    <div className="ltn__blog-meta">
                                        <ul>
                                            <li className="ltn__blog-author">
                                                <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                            </li>
                                            <li className="ltn__blog-tags">
                                                <a href="#"><i className="fas fa-tags"></i>Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="ltn__blog-title"><a href="blog-details.html">Common Engine Oil Problems and Solutions</a></h3>
                                    <div className="ltn__blog-meta-btn">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>June 24, 2022</li>
                                            </ul>
                                        </div>
                                        <div className="ltn__blog-btn">
                                            <a href="blog-details.html">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                                <div className="ltn__blog-img">
                                    <a href="blog-details.html"><img src="img/blog/2.jpg" alt="#" /></a>
                                </div>
                                <div className="ltn__blog-brief">
                                    <div className="ltn__blog-meta">
                                        <ul>
                                            <li className="ltn__blog-author">
                                                <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                            </li>
                                            <li className="ltn__blog-tags">
                                                <a href="#"><i className="fas fa-tags"></i>Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="ltn__blog-title"><a href="blog-details.html">How and when to replace brake rotors</a></h3>
                                    <div className="ltn__blog-meta-btn">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>July 23, 2022</li>
                                            </ul>
                                        </div>
                                        <div className="ltn__blog-btn">
                                            <a href="blog-details.html">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                                <div className="ltn__blog-img">
                                    <a href="blog-details.html"><img src="img/blog/3.jpg" alt="#" /></a>
                                </div>
                                <div className="ltn__blog-brief">
                                    <div className="ltn__blog-meta">
                                        <ul>
                                            <li className="ltn__blog-author">
                                                <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                            </li>
                                            <li className="ltn__blog-tags">
                                                <a href="#"><i className="fas fa-tags"></i>Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="ltn__blog-title"><a href="blog-details.html">Elenance, Servicing & Repairs</a></h3>
                                    <div className="ltn__blog-meta-btn">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>August 22, 2022</li>
                                            </ul>
                                        </div>
                                        <div className="ltn__blog-btn">
                                            <a href="blog-details.html">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                                <div className="ltn__blog-img">
                                    <a href="blog-details.html"><img src="img/blog/4.jpg" alt="#" /></a>
                                </div>
                                <div className="ltn__blog-brief">
                                    <div className="ltn__blog-meta">
                                        <ul>
                                            <li className="ltn__blog-author">
                                                <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                            </li>
                                            <li className="ltn__blog-tags">
                                                <a href="#"><i className="fas fa-tags"></i>Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="ltn__blog-title"><a href="blog-details.html">Healthiest Vegetables on Earth</a></h3>
                                    <div className="ltn__blog-meta-btn">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>June 24, 2022</li>
                                            </ul>
                                        </div>
                                        <div className="ltn__blog-btn">
                                            <a href="blog-details.html">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                                <div className="ltn__blog-img">
                                    <a href="blog-details.html"><img src="img/blog/5.jpg" alt="#" /></a>
                                </div>
                                <div className="ltn__blog-brief">
                                    <div className="ltn__blog-meta">
                                        <ul>
                                            <li className="ltn__blog-author">
                                                <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                            </li>
                                            <li className="ltn__blog-tags">
                                                <a href="#"><i className="fas fa-tags"></i>Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="ltn__blog-title"><a href="blog-details.html">How te Your Tires Last Longer</a></h3>
                                    <div className="ltn__blog-meta-btn">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>June 24, 2022</li>
                                            </ul>
                                        </div>
                                        <div className="ltn__blog-btn">
                                            <a href="blog-details.html">Read more</a>
                                        </div>
                                    </div>
                                </div>
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
                                                <img src="img/icons/icon-img/11.png" alt="#" />
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
                                                <img src="img/icons/icon-img/12.png" alt="#" />
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
                                                <img src="img/icons/icon-img/13.png" alt="#" />
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
                                                <img src="img/icons/icon-img/14.png" alt="#" />
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
                                            <img src="img/logo.png" alt="Logo" />
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
                                                    <p><a href="tel:+0123-456789">+0123-456789</a></p>
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
                                        <div id="mc_embed_signup">
                                            <form action="https://gmail.us5.list-manage.com/subscribe/post?u=dde0a42ff09e8d43cad40dc82&amp;id=72d274d15d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                                                <div id="mc_embed_signup_scroll">
                                                    <div className="mc-field-group">
                                                        <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Email*" />
                                                    </div>
                                                    <div id="mce-responses" className="clear">
                                                        <div lassName="response" id="mce-error-response" style={{ display: "none" }}></div>
                                                        <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                                                    </div>
                                                    <div style={{ position: "absolute" }}>
                                                        <input type="text" name="b_dde0a42ff09e8d43cad40dc82_72d274d15d" tabindex="-1" value="" /></div>
                                                    <div className="clear">
                                                        <div className="btn-wrapper">
                                                            <button className="theme-btn-1 btn" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"><i className="fas fa-location-arrow"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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
                                    <p>All Rights Reserved @ Company <span className="current-year"></span></p>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 align-self-center">
                                <div className="ltn__copyright-menu text-end">
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

            <div className="ltn__modal-area ltn__quick-view-modal-area">
                <div className="modal fade" id="quick_view_modal" tabindex="-1">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="ltn__quick-view-modal-inner">
                                    <div className="modal-product-item">
                                        <div className="row">
                                            <div className="col-lg-6 col-12">
                                                <div className="modal-product-img">
                                                    <img src="img/product/4.png" alt="#" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="modal-product-info">
                                                    <div className="product-ratting">
                                                        <ul>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            <li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
                                                        </ul>
                                                    </div>
                                                    <h3>Vegetables Juices</h3>
                                                    <div className="product-price">
                                                        <span>1490.00</span>
                                                        <del>1650.00</del>
                                                    </div>
                                                    <div className="modal-product-meta ltn__product-details-menu-1">
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
                                                    <div className="ltn__product-details-menu-2">

                                                    </div>
                                                    <div className="ltn__product-details-menu-3">
                                                        <ul>
                                                            <li>
                                                                <a href="#" className="" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                                                    <i className="far fa-heart"></i>
                                                                    <span>Add to Wishlist</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="" title="Compare" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                                                    <i className="fas fa-exchange-alt"></i>
                                                                    <span>Compare</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <hr />
                                                    <div className="ltn__social-media">
                                                        <ul>
                                                            <li>Share:</li>
                                                            <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                            <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                                            <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                                                            <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>

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



            <div className="ltn__modal-area ltn__add-to-cart-modal-area">
                <div className="modal fade" id="liton_wishlist_modal" tabindex="-1">
                    <div className="modal-dialog modal-md" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="ltn__quick-view-modal-inner">
                                    <div className="modal-product-item">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="modal-product-img">
                                                    <img src="img/product/7.png" alt="#" />
                                                </div>
                                                <div className="modal-product-info">
                                                    <h5><a href="product-details.html">Vegetables Juices</a></h5>
                                                    <p className="added-cart"><i className="fa fa-check-circle"></i>  Successfully added to your Wishlist</p>
                                                    <div className="btn-wrapper">
                                                        <a href="wishlist.html" className="theme-btn-1 btn btn-effect-1">View Wishlist</a>
                                                    </div>
                                                </div>

                                                <div className="additional-info d-none">
                                                    <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                                                    <div className="payment-method">
                                                        <img src="img/icons/payment.png" alt="#" />
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

            <div className="preloader d-none" id="preloader">
                <div className="preloader-inner">
                    <div className="spinner">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                    </div>
                </div>
            </div>

            <script src="js/plugins.js"></script>

            <script src="js/main.js"></script>

        </>
    )
}

