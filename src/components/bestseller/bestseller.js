import React, { Component } from "react";
import "./helper";
class BestProduct extends Component {
  state = {
    items: [
      {
        saleRate: 0,
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/product-05-300x300.jpg",
        name: "Ataulfo",
        price: 23,
      },
      {
        saleRate: -18,
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/product-01-300x300.jpg",
        name: "Eodem modo vel matties ante facilitisi",
        price: 40.0,
      },
      {
        saleRate: -8,
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/product-01-300x300.jpg",
        name: "purple onion",
        price: 69.0,
      },
      {
        saleRate: -15,
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/product-02-300x300.jpg",
        name: "strawbarry juice",
        price: 70.0,
      },
      {
        saleRate: "sale",
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/product-05-300x300.jpg",
        name: "Organic Pineapple",
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
        <div className="card" key={Math.random()}>
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
      <div className=" best trendProduct">
        <div className="header">
          <h2>best seller Products</h2>
          <span>
            <ion-icon name="grid-outline" id="grid-multi-best"></ion-icon>
            <ion-icon
              name="square-outline"
              id="grid-single-best"
            ></ion-icon>{" "}
          </span>
        </div>
        <span className="ruleLine"></span>
        <div className="cardContainer" id="cardContainer">
          {ListMapping}
        </div>
        <div className="three-images">
          <span>
            <img src="https://demo-38.woovinapro.com/wp-content/uploads/2020/06/banner-08.jpg" />
          </span>
          <span>
            <img src="https://demo-38.woovinapro.com/wp-content/uploads/2020/06/banner-07.jpg" />
          </span>
          <span>
            <img src="https://demo-38.woovinapro.com/wp-content/uploads/2020/06/banner-06.jpg" />
          </span>
        </div>
      </div>
    );
  }
}
export default BestProduct;
