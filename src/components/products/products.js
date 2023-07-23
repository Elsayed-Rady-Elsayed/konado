import { extend } from "jquery";
import React, { Component } from "react";
import "./productHelper";
import data from "../../data.json";
import ProductDetailsPage from "../productDetailsPage/productDetails";
import { Routes } from "react-router-dom";
import "../header";
class ProductsPage extends Component {
  state = {
    listname: "allCategory",
    topRated: [{}],
    priceRate: 0,
  };
  render() {
    let dataJson = data;
    let freshApples = data[0]["freshApples"];
    let brassicas = data[1]["brassicas"];
    let peppers = data[2]["peppers"];
    let allCategory = [freshApples, brassicas, peppers];
    let viewdList =
      this.state.listname == "allCategory"
        ? allCategory
        : this.state.listname == "freshApples"
        ? freshApples
        : this.state.listname == "brassicas"
        ? brassicas
        : peppers;
    let CardList = viewdList.map((l) => {
      if (this.state.listname == "allCategory") {
        return l.map((el) => {
          return (
            <div
              onClick={() => {
                console.log(el);
                document.getElementById("selectedProduct").click();
                window.localStorage.setItem("productViewd", JSON.stringify(el));
              }}
              className="card product"
              id="cardProduct"
              key={Math.random()}
            >
              {el.saleRate == 0 ? (
                <p></p>
              ) : (
                <p className="sale">{el.saleRate + "%"}</p>
              )}
              <ion-icon
                id="favor"
                className="fav"
                name="heart-outline"
              ></ion-icon>
              <img className="img" src={el.img} />
              <div className="text">
                <div className="name">{el.name}</div>
                <p className="itemDetails">
                  Fruit is the sweet, fleshy, edible part of a plant. It
                  generally contains seeds. Fruits are usually eaten raw,
                  although some varieties can be cooked. They come in a wide
                  variety of colours, shapes and flavours.
                </p>
                <div className="priceSec">
                  {el.saleRate != 0 ? (
                    <del className="oldprice">{el.price}$</del>
                  ) : null}
                  <p className="price">{el.price}$</p>
                </div>
                <div className="stars">
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </div>
              </div>
            </div>
          );
        });
      } else {
        return (
          <div
            onClick={() => {
              console.log(l);
              document.getElementById("selectedProduct").click();
              window.localStorage.setItem("productViewd", JSON.stringify(l));
            }}
            className="card product"
            id="cardProduct"
            key={Math.random()}
          >
            {l.saleRate == 0 ? (
              <p></p>
            ) : (
              <p className="sale">{l.saleRate + "%"}</p>
            )}
            <ion-icon
              id="favor"
              className="fav"
              name="heart-outline"
            ></ion-icon>
            <img className="img" src={l.img} />
            <div className="text">
              <div className="name">{l.name}</div>
              <p className="itemDetails">
                Fruit is the sweet, fleshy, edible part of a plant. It generally
                contains seeds. Fruits are usually eaten raw, although some
                varieties can be cooked. They come in a wide variety of colours,
                shapes and flavours.
              </p>
              <div className="priceSec">
                {l.saleRate != 0 ? (
                  <del className="oldprice">{l.price}$</del>
                ) : null}
                <p className="price">{l.price}$</p>
              </div>
              <div className="stars">
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>
            </div>
          </div>
        );
      }
    });
    return (
      <div className="container productPage">
        <h3>Products</h3>
        <div className="GridLayout">
          <ion-icon name="grid-outline" id="grid-multi-product"></ion-icon>
          <ion-icon name="square-outline" id="grid-single-product"></ion-icon>
        </div>
        <div id="Filter">filter</div>
        <span className="line"></span>
        <div className="productBody">
          <div className="sideBar" id="sidebar">
            <div className="categorySideBar">
              <p>Categories</p>
              <ul>
                <li
                  onClick={() => {
                    this.setState({
                      listname: "freshApples",
                    });
                  }}
                >
                  fruits
                </li>
                <li
                  onClick={() => {
                    this.setState({
                      listname: "brassicas",
                    });
                  }}
                >
                  brassicas
                </li>
                <li
                  onClick={() => {
                    this.setState({
                      listname: "peppers",
                    });
                  }}
                >
                  peppers
                </li>
                <li>Dried Fruit & Nuts</li>
                <li>Local Farm Share</li>
                <li>Melons</li>
                <li>Pears</li>
                <li
                  onClick={() => {
                    this.setState({
                      listname: "allCategory",
                    });
                  }}
                >
                  Uncategorized
                </li>
              </ul>
            </div>
            <div className="priceFilter">
              <p className="priceFHead">Filter By Price</p>
              <input
                type="range"
                onChange={(e) => {
                  this.setState({
                    priceRate: e.target.value,
                  });
                }}
              />
              <p>
                price <span>{this.state.priceRate}$</span>
              </p>
              <button>Filter</button>
            </div>
            <div className="ColorFilet">
              <p>Filter By Color</p>
              <div>
                <input type="checkbox" />
                <label>Black</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>red</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>green</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>white</label>
              </div>
            </div>
            <div className="TopRated">
              <p className="cardHead">Top Rated</p>
              <div>
                <img src="https://demo-38.woovinapro.com/wp-content/uploads/2020/06/product-07-300x300.jpg" />
                <div className="text">
                  <p>strawbary juice</p>
                  <div className="price">
                    <del>92.00$</del>
                    <p>70.00$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content" id="content">
            {CardList}
          </div>
        </div>
      </div>
    );
  }
}
export default ProductsPage;
