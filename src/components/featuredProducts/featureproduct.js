import React, { Component } from "react";
import "./featureHelper";
import data from "../../data.json";
import TrendProduct from "../new trending products/newTreding";
import BestProduct from "../bestseller/bestseller";
import SalesComponents from "../saleProduct/saleproduct";
class FeaturedProduct extends Component {
  state = {
    featuredInfo: [
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/icon1.png",
        name: "FREE DELIVERY",
        paragraph: "For all oders over $120",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/icon2.png",
        name: "SAFE PAYMENT",
        paragraph: "100% secure payment",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/icon3.png",
        name: "SHOP WITH CONFIDENCE",
        paragraph: "If goods have problems",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/icon4.png",
        name: "24/7 HELP CENTER",
        paragraph: "Dedicated 24/7 support",
      },
    ],
    idx: 0,
    itemToBeViewd: {
      id: "",
      listid: "",
      saleRate: "",
      img: "",
      name: "",
      price: "",
    },
    cart: [],
    favorits: [],
  };
  componentDidMount() {}
  changeToidx0 = () => {
    this.setState({
      idx: 0,
    });
  };
  changeToidx1 = () => {
    this.setState({
      idx: 1,
    });
  };
  changeToidx2 = () => {
    this.setState({
      idx: 2,
    });
  };
  getId = (idx, list) => {
    const item =
      this.state.idx == 0
        ? data[0][list][idx]
        : this.state.idx == 1
        ? data[1][list][idx]
        : data[2][list][idx];
    this.setState({
      itemToBeViewd: item,
    });
  };
  render() {
    const list =
      this.state.idx == 0
        ? data[0]["freshApples"]
        : this.state.idx == 1
        ? data[1]["brassicas"]
        : data[2]["peppers"];
    const ListMapping = list.map((el, idx) => {
      let rate = el.price * -el.saleRate;
      rate = rate / 100;
      let oldPrice = el.price - rate;
      return (
        <div
          className="card"
          onClick={() => {
            this.getId(idx, el.listid);
          }}
          id="cardTrend"
          key={Math.random()}
        >
          {el.saleRate == 0 ? (
            <p></p>
          ) : (
            <p className="sale">{el.saleRate + "%"}</p>
          )}
          <ion-icon id="favor" className="fav" name="heart-outline"></ion-icon>
          <p hidden id="CardId" data-img={el.img}>
            {el.id}
          </p>
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
    const featureInfoList = this.state.featuredInfo;
    const showList = featureInfoList.map((el) => {
      return (
        <span className="item" key={Math.random()}>
          <img src={el.img} />
          <span className="text">
            <h5>{el.name}</h5>
            <p>{el.paragraph}</p>
          </span>
        </span>
      );
    });
    return (
      <div className="container ">
        <div className="feature-product">
          <div className="productDetails" id="productDetails">
            <div className="holder">
              <span id="productDetailsClose">x</span>
              {this.state.itemToBeViewd.saleRate == 0 ? null : (
                <span className="sale">
                  {this.state.itemToBeViewd.saleRate + "%"}
                </span>
              )}
              <img src={this.state.itemToBeViewd.img} id="cardImg" />
              <div className="text">
                <h2>{this.state.itemToBeViewd.name}</h2>

                <div className="priceSec">
                  {this.state.itemToBeViewd.saleRate != 0 ? (
                    <del className="oldprice">
                      {this.state.itemToBeViewd.price}$
                    </del>
                  ) : null}
                  <p className="price">
                    {this.state.itemToBeViewd.price +
                      this.state.itemToBeViewd.saleRate}
                    $
                  </p>
                </div>
                <p>
                  this is fresh and green product that had been choosen
                  carefully for you,
                </p>
                <div className="icons">
                  <ion-icon
                    onClick={() => {
                      let list = this.state.favorits;
                      list.push(this.state.itemToBeViewd);
                      this.setState({
                        favorits: list,
                      });
                      if (window.localStorage.getItem("favList") == null) {
                        window.localStorage.setItem(
                          "favList",
                          JSON.stringify({
                            name: this.state.itemToBeViewd.listid,
                            id: this.state.itemToBeViewd.id,
                          })
                        );
                      } else {
                        let getList = JSON.parse(
                          window.localStorage.getItem("favList")
                        );
                        getList = Array.from(getList);
                        getList.push({
                          name: this.state.itemToBeViewd.listid,
                          id: this.state.itemToBeViewd.id,
                        });
                        window.localStorage.setItem(
                          "favList",
                          JSON.stringify(getList)
                        );
                      }
                      window.location.reload();
                    }}
                    id="favor"
                    className="fav"
                    name="heart-outline"
                  ></ion-icon>
                  <ion-icon
                    name="cart-outline"
                    id="addToCart"
                    onClick={() => {
                      if (window.localStorage.getItem("cartList") == null) {
                        window.localStorage.setItem(
                          "cartList",
                          JSON.stringify({
                            name: this.state.itemToBeViewd.listid,
                            id: this.state.itemToBeViewd.id,
                          })
                        );
                      } else {
                        let getList = JSON.parse(
                          window.localStorage.getItem("cartList")
                        );
                        getList = Array.from(getList);
                        getList.push({
                          name: this.state.itemToBeViewd.listid,
                          id: this.state.itemToBeViewd.id,
                        });
                        window.localStorage.setItem(
                          "cartList",
                          JSON.stringify(getList)
                        );
                      }
                      window.location.reload();
                    }}
                  ></ion-icon>
                </div>
              </div>
            </div>
          </div>
          <div className="changeLayout">
            <ion-icon name="grid-outline" id="grid-multi"></ion-icon>
            <ion-icon name="square-outline" id="grid-single"></ion-icon>{" "}
          </div>
          <h2>Featured products</h2>
          <ul>
            <li onClick={this.changeToidx0}>Fresh Apples</li>
            <li onClick={this.changeToidx1}>Brassicas</li>
            <li onClick={this.changeToidx2}>Peppers</li>
          </ul>
          <span className="ruler"></span>
          <div className="Cardcontainer" id="Cardcontainer">
            {ListMapping}
          </div>
          <div className="feature-info">{showList}</div>
        </div>

        <TrendProduct />
        <BestProduct />
      </div>
    );
  }
}
export default FeaturedProduct;
