import React, { Component } from "react";
import Header from "./components/header";
import ScrollTopbtn from "./components/buttons/ScrollTopbtn";
import Landing from "./components/landing/landing";
import LandingCard from "./components/landing/landingCards";
import FeaturedProduct from "./components/featuredProducts/featureproduct";
import TrendProduct from "./components/new trending products/newTreding";
import BestProduct from "./components/bestseller/bestseller";
import SalesComponents from "./components/saleProduct/saleproduct";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import data from "./data.json";
import Login from "./components/authentication/login";
import Register from "./components/authentication/register";
import ContactPage from "./components/contact/navContact";
import ProductsPage from "./components/products/products";
import BlogPage from "./components/blogs/blog";
import ProductDetailsPage from "./components/productDetailsPage/productDetails";
import {
  BrowserRouter as Router,
  Switch,
  createBrowserRouter,
  Route,
  Redirect,
  BrowserRouter,
  Routes,
  RouterProvider,
} from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    window.localStorage.setItem("searchArray", JSON.stringify([]));

    window.localStorage.getItem("favList") == null
      ? window.localStorage.setItem("favList", [
          JSON.stringify([{ name: "freshApples", id: "2" }]),
        ])
      : window.localStorage.getItem("favList");
    window.localStorage.getItem("cartList") == null
      ? window.localStorage.setItem("cartList", [
          JSON.stringify([{ name: "freshApples", id: "2" }]),
        ])
      : window.localStorage.getItem("cartList");
  }
  state = {
    fav: JSON.parse(window.localStorage.getItem("favList")),
    cart: JSON.parse(window.localStorage.getItem("cartList")),
  };
  render() {
    return (
      <div className="App">
        <ScrollTopbtn />
        <Header fav={this.state.fav} cart={this.state.cart} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<FeaturedProduct />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/selectedProduct" element={<ProductDetailsPage />} />
        </Routes>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
