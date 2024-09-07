import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';

import Navbar from "./landing_page/Navbar.js";
import Footer from "./landing_page/Footer.js";

import HomePage from "./landing_page/home/HomePage.js";
import Signup from "./landing_page/signup/Signup.js";
import Login from "./landing_page/signup/Login.js";
import AboutPage from "./landing_page/about/AboutPage.js"
import ProductsPage from "./landing_page/products/ProductsPage.js"
import PricingPage from "./landing_page/pricing/PricingPage.js"
import SupportPage from "./landing_page/support/SupportPage.js"
import NotFound from './landing_page/NotFound.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/about" element={<AboutPage/>}/>
     <Route path="/product" element={<ProductsPage/>}/>
     <Route path="/pricing" element={<PricingPage/>}/>
     <Route path="/support" element={<SupportPage/>}/>
     <Route path="*" element={<NotFound/>}/>  
     // * means if the path does not match any of the above paths.
    </Routes>
  <Footer/>
  </BrowserRouter>
);

