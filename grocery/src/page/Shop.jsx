import React, { useState, useEffect } from 'react';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { backend_url } from '../config'
import axios from 'axios'

export default function Shop() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [categorie, setCategories] = useState('')
    const [products, setProducts] = useState([]);
    const [item, setItem] = useState('');

    const openEditModal = (product) => {
        if (product) {
            setItem(product._id);
            // editProduct(product);
            setName(product.name);
            setCategories(product.categorie);
            setPrice(product.price);
            setImage(product.image);
        } else {
            setItem('');
            setName("");
            setCategories("");
            setPrice("");
            setImage(null);
        }
    };
    const fetchData = async () => {
        try {
            const response = await axios.get(backend_url + "/product/getdata");
            if (response.status === 200) {
                setProducts(response.data.data);
            } else {
                console.log("Something went wrong");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])
    const createProduct = () => {
        const formData = new FormData();
        formData.append("name", name);
        // formData.append("categorie", categorie);
        formData.append("price", price);
        formData.append("image", image);
        formData.append("categorie", categorie);
        axios
            .post(backend_url + "/product/createdata", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data.message);
                    fetchData();
                    setName("");
                    setCategories("");
                    setPrice("");
                    setImage(null);
                } else {
                    console.log("Something went wrong");
                }
            })
            .catch(function (error) {
                console.log("Error:", error);
            });
    };
    const editProduct = (product) => {
        // console.log(product);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("categorie", categorie);
        formData.append("price", price);
        formData.append("image", image);

        axios
            .put(`${backend_url}/product/updatedata/${product}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data.message);
                    fetchData();
                } else {
                    console.log("Something went wrong");
                }
            })
            .catch(function (error) {
                console.log("Error:", error);
            });
    };

    const deleteProduct = (productId) => {
        axios
            .delete(backend_url + `/product/deletedata/${productId}`)
            .then(function (respose) {
                if (respose.status === 200) {
                    console.log(respose.data.message);
                    fetchData();
                } else {
                    console.log("something went wrong");
                }
            })
            .catch(function (error) {
                console.log("Error", error);
            });
    };
    useEffect(() => {
        fetchData();
    }, []); // The empty array [] means this effect runs only once when the component mounts
    const addToCart = (product) => {
        // console.log(product)
        const newProduct ={
            ...product,
            quantity:1
        }
        const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        existingCartItems.push(newProduct);
        localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
        console.log("cart-item===>", newProduct)
    }


    return (<>




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
                        <li><a href="/cart">Cart</a>

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
                                <h1 class="section-title white-color">Shop</h1>
                            </div>
                            <div class="ltn__breadcrumb-list">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li>Shop</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div>
            <div style={{ display: "flex", justifyContent: 'end', margin: 50 }}>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Product
                </button>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel"> Fresh Grocery</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="mb-3">
                                    <div style={{ textAlign: 'left' }}>
                                        <label htmlFor="exampleInputName" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name='name'
                                            className="form-control"
                                            id="exampleInputName"
                                            aria-describedby="emailHelp"

                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <label htmlFor="exampleInputName" className="form-label">
                                            Categotirs
                                        </label>
                                        <input
                                            type="text"
                                            name='categorie'
                                            className="form-control"
                                            id="exampleInputName"
                                            aria-describedby="emailHelp"

                                            onChange={(e) => setCategories(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div style={{ textAlign: 'left' }}>
                                        <label htmlFor="exampleInputPrice" className="form-label">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="exampleInputPrice"

                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div style={{ textAlign: 'left' }}>
                                        <label htmlFor="exampleInputImage" className="form-label">
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            name="image"
                                            className="form-control"
                                            id="exampleInputImage"
                                            onChange={(e) => setImage(e.target.files[0])}
                                        />
                                    </div>
                                </div>



                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" onClick={createProduct}>Add</button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="editProduct"
                tabindex="-1"
                aria-labelledby="editProductLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editProductLabel">
                                Edit / Delete Product
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div style={{ textAlign: 'left' }}>
                                <label htmlFor="name02" className="label">
                                    Product Name
                                </label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name02"
                                    required
                                    value={name}
                                />
                            </div >
                            <div style={{ textAlign: 'left' }}>
                                <label htmlFor="Pcatagorie02" className="label">
                                    categorie
                                </label>
                                <input
                                    onChange={(e) => setCategories(e.target.value)}
                                    type="text"
                                    name="cat"
                                    className="form-control"
                                    id="Pcatagorie02"
                                    value={categorie}
                                    required
                                />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <label htmlFor="price02" className="label">
                                    Price
                                </label>
                                <input
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="number"
                                    name="price"
                                    className="form-control"
                                    id="price02"
                                    required
                                    value={price}
                                />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <label htmlFor="image02" className="label">
                                    Image
                                </label>
                                <input
                                    onChange={(e) => setImage(e.target.files[0])}
                                    type="file"
                                    name="image"
                                    className="form-control"
                                    id="image02"
                                    required
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-success"
                                data-bs-dismiss="modal"
                                // onClick={editProduct}
                                onClick={() => editProduct(item)}
                            >
                                Edit
                            </button>
                            <button
                                // onClick={deleteProduct}
                                onClick={() => deleteProduct(item)}
                                type="submit"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ))} */}
            <section className="product-info">
                <div className="product-ratting" style={{ margin: 100 }}>
                    <div className="row">
                        {products.map((product, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 g-4" key={index}>
                                <div className="product__item">
                                    <div
                                        className="product_item_pic"
                                        data-setbg="img/shop/product-1.jpg"
                                    >

                                        <img
                                            src={`http://localhost:3001/images/${product.image}`}
                                            alt={product.name}
                                        />
                                    </div>
                                    <div className="product_item_text" style={{ display: 'flex', justifyContent: 'space-between', margin: 45, paddingRight: 20, paddingLeft: 20 }}>
                                        <h6>
                                            <span> {product.name}</span>
                                        </h6>
                                        
                                 
                                    <div

                                        className="product__label "
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProduct"
                                        onClick={() => openEditModal(product)}
                                    >

                                        <span className=" btn ">{product.categorie}</span>
                                        
                                    </div>
                                    <span>RS. {product.price}</span>
                                    </div>
                                    <div>
                                        <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </div>


        <section>
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
        </section>
        <script src="js/plugins.js"></script>

        <script src="js/main.js"></script>
    </>
    )
}