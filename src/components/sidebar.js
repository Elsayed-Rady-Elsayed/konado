import React, { Component } from "react";
import data from "../data.json";
import "../components/headerHelper";
class SideBar extends Component {
  render() {
    let fav = this.props.fav;
    let favCount = fav.length;
    let cart = this.props.cart;
    let cartCount = cart.length;
    let favList = fav.map((el) => {
      let JsonIdname =
        el["name"] == "freshApples" ? 0 : el["name"] == "brassicas" ? 1 : 2;
      let item = data[JsonIdname][el["name"]][el["id"]];
      return (
        <div className="fav card" key={Math.random()}>
          {item.saleRate == 0 ? (
            <p></p>
          ) : (
            <p className="sale">{item.saleRate + "%"}</p>
          )}
          <img src={item.img} />
          <div className="text">
            <span>{item.name}</span>
            <div className="price">
              {item.saleRate != 0 ? (
                <del className="oldprice">{item.price.toFixed(2)}$</del>
              ) : null}
              <p className="price">{item.price.toFixed(2) + item.saleRate}$</p>
            </div>
            <button>delete</button>
          </div>
        </div>
      );
    });
    let cartList = cart.map((el) => {
      let JsonIdname =
        el["name"] == "freshApples" ? 0 : el["name"] == "brassicas" ? 1 : 2;
      let item = data[JsonIdname][el["name"]][el["id"]];
      return (
        <div className="cart card" key={Math.random()}>
          {item.saleRate == 0 ? (
            <p></p>
          ) : (
            <p className="sale">{item.saleRate + "%"}</p>
          )}
          <img src={item.img} />
          <div className="text">
            <span>{item.name}</span>
            <div className="price">
              {item.saleRate != 0 ? (
                <del className="oldprice">{item.price.toFixed(2)}$</del>
              ) : null}
              <p className="price">
                {(item.price + item.saleRate).toFixed(2)}$
              </p>
            </div>{" "}
            <button>delete</button>
          </div>
        </div>
      );
    });
    return (
      <div className="side-bar">
        <div className="favSidebar" id="favSidebarsmall">
          {favCount == 0 ? (
            <h2>emptylist</h2>
          ) : (
            <React.Fragment>{favList}</React.Fragment>
          )}
        </div>
        <div className="cartSidebar" id="cartSidebarsmall">
          {favCount == 0 ? (
            <h2>emptylist</h2>
          ) : (
            <React.Fragment>{cartList}</React.Fragment>
          )}
        </div>
        <form>
          <input type="search" placeholder="search Product" />
          <ion-icon name="search-outline"></ion-icon>
        </form>
        <ul className="navLinks">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">shop</a>
          </li>
          <li>
            <a href="/products">products</a>
          </li>
          <li>
            <a href="/blog">Blogs</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
        <div className="sidecontrol">
          <ion-icon
            name="heart-outline"
            className="fav"
            id="favSideShowsmall"
            onClick={() => {
              let cartList = JSON.parse(window.localStorage.getItem("favList"));
              cartList.forEach((el) => {
                let listname = el["name"];
                let itemId = el["id"];
                let JsonIdname =
                  listname == "freshApples"
                    ? 0
                    : listname == "brassicas"
                    ? 1
                    : 2;
                let item = data[JsonIdname][listname][itemId];
              });
            }}
          ></ion-icon>
          <ion-icon
            onClick={() => {
              let cartList = JSON.parse(
                window.localStorage.getItem("cartList")
              );
              cartList.forEach((el) => {
                let listname = el["name"];
                let itemId = el["id"];
                let JsonIdname =
                  listname == "freshApples"
                    ? 0
                    : listname == "brassicas"
                    ? 1
                    : 2;
                let item = data[JsonIdname][listname][itemId];
              });
            }}
            name="cart-outline"
            className="cart"
            id="cartSideShowsmall"
          ></ion-icon>
          <ion-icon name="settings-outline"></ion-icon>
        </div>
      </div>
    );
  }
}
export default SideBar;
