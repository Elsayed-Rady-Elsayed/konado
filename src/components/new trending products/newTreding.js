import React, { Component } from "react";
import "./helper";
class TrendProduct extends Component {
  state = {
    items: [
      {
        saleRate: -18,
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/product-01-300x300.jpg",
        name: "eodem modo vel matties anta facilitsrs",
        price: 40.0,
      },
      {
        saleRate: -7,
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/product-09-300x300.jpg",
        name: "grape tomatoes",
        price: 70.0,
      },
      {
        saleRate: -10,
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/product-06-300x300.jpg",
        name: "green cumber",
        price: 55.0,
      },
      {
        saleRate: -33,
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/product-02-300x300.jpg",
        name: "natus erro at congoe massa",
        price: 50.0,
      },
      {
        saleRate: -8,
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/product-01-300x300.jpg",
        name: "Orange juice bottle",
        price: 69.0,
      },
    ],
  };
  render() {
    const list = this.state.items;
    const ListMapping = list.map((el) => {
      let rate = el.price * -el.saleRate;
      rate = rate / 100;
      let oldPrice = el.price - rate;
      return (
        <div id="shop" className="card" key={Math.random()}>
          {el.saleRate == 0 ? null : (
            <p className="sale">{el.saleRate + "%"}</p>
          )}
          <ion-icon id="favor" className="fav" name="heart-outline"></ion-icon>
          <img className="img" src={el.img} />
          <div className="name">{el.name}</div>
          <div className="priceSec">
            {el.saleRate != 0 ? (
              <del className="oldprice">{oldPrice.toFixed(2)}$</del>
            ) : null}
            <p className="price">{el.price.toFixed(2)}$</p>
          </div>
          <div className="stars">
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>
        </div>
      );
    });
    return (
      <div className="trendProduct">
        <div className="header">
          <h2>New Trending Products</h2>
          <span>
            <ion-icon name="grid-outline" id="grid-multi-ic"></ion-icon>
            <ion-icon name="square-outline" id="grid-single-ic"></ion-icon>{" "}
          </span>
        </div>
        <span className="ruleLine"></span>
        <div className="cardContainer" id="cardContainer">
          {ListMapping}
        </div>
        <div className="two-images">
          <span>
            {" "}
            <img src="https://demo-38.woovinapro.com/wp-content/uploads/2020/06/banner-05.jpg" />
          </span>
          <span>
            {" "}
            <img src="https://demo-38.woovinapro.com/wp-content/uploads/2020/06/banner-04.jpg" />
          </span>
        </div>
      </div>
    );
  }
}
export default TrendProduct;
