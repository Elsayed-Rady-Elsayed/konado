import React, { Component } from "react";
class SalesComponents extends Component {
  state = {
    brassicas: [
      {
        saleRate: -18,
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/product-01-300x300.jpg",
        name: "eodem modo vel matties ",
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
      {
        saleRate: -20,
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
    const list = this.state.brassicas;
    const ListMapping = list.map((el) => {
      let rate = el.price * -el.saleRate;
      rate = rate / 100;
      let oldPrice = el.price - rate;
      return (
        <div className="card" key={Math.random()}>
          {el.saleRate == 0 ? null : (
            <p className="sale">{el.saleRate + "%"}</p>
          )}
          <img className="img" src={el.img} />
          <div className="text">
            <div className="name">{el.name}</div>
            <div className="priceSec">
              {el.saleRate != 0 ? (
                <del className="oldprice">{oldPrice.toFixed(2)}$</del>
              ) : null}
              <p className="price">{el.price.toFixed(2)}$</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="sales products">
        <div className="header">
          <h2>Sale Prodcuts</h2>
        </div>
        <span className="ruleLine"></span>
        <div className="cardContainer">{ListMapping}</div>
      </div>
    );
  }
}
export default SalesComponents;
