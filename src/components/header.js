import React, { Component } from "react";
import "../style.css";
import logo from "../media/images/logo.png";
import "../components/products/productHelper";
import "./headerHelper";
import SideBar from "./sidebar";
import data from "../data.json";
import AnimatedHeader from "./background/animateHead";
import "./background/heler";
class Header extends Component {
  state = {
    search: [],
  };
  render() {
    let checkLogin =
      window.localStorage.getItem("logined") == null
        ? false
        : window.localStorage.getItem("logined");
    let fav = this.props.fav;
    let favCount = fav.length == null ? 0 : fav.length;
    let favItems = JSON.parse(window.localStorage.getItem("favList"));
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
              <p className="price">
                {(item.price + item.saleRate).toFixed(2)}$
              </p>
            </div>
            <button
              onClick={() => {
                favItems = Array.from(favItems);
                for (let i = 0; i < favItems.length; i++) {
                  if (
                    favItems[i]["name"] == el["name"] &&
                    favItems[i]["id"] == el["id"]
                  ) {
                    favItems.splice(i, 1);
                  }
                }
                window.localStorage.setItem(
                  "favList",
                  JSON.stringify(favItems)
                );
                window.location.reload();
              }}
            >
              delete
            </button>
          </div>
        </div>
      );
    });
    let cart = this.props.cart;
    let cartItems = JSON.parse(window.localStorage.getItem("cartList"));
    let cartCount = cart.length == null ? 0 : cart.length;
    let cartList =
      cartCount == 0
        ? null
        : cart.map((el) => {
            let JsonIdname =
              el["name"] == "freshApples"
                ? 0
                : el["name"] == "brassicas"
                ? 1
                : 2;
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
                  </div>
                  <button
                    onClick={() => {
                      cartItems = Array.from(cartItems);
                      for (let i = 0; i < cartItems.length; i++) {
                        if (
                          cartItems[i]["name"] == el["name"] &&
                          cartItems[i]["id"] == el["id"]
                        ) {
                          cartItems.splice(i, 1);
                        }
                      }
                      window.localStorage.setItem(
                        "cartList",
                        JSON.stringify(cartItems)
                      );
                      window.location.reload();
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          });
    window.addEventListener("load", () => {
      document.getElementById("search").addEventListener("keyup", (ev) => {
        let val = document.getElementById("search").value;
        let f = data[0]["freshApples"];
        let b = data[1]["brassicas"];
        let p = data[2]["peppers"];
        val = val.toLowerCase();
        const filterf = f.filter((el) => {
          return el.name.toLocaleLowerCase().includes(val);
        });
        const filterb = b.filter((el) => {
          return el.name.toLocaleLowerCase().includes(val);
        });
        const filterp = p.filter((el) => {
          return el.name.toLocaleLowerCase().includes(val);
        });
        let allValues = [filterf, filterb, filterp];
        window.localStorage.setItem("searchArray", JSON.stringify(allValues));
      });
      document.getElementById("searchPhone").addEventListener("keyup", (ev) => {
        let val = document.getElementById("searchPhone").value;
        let f = data[0]["freshApples"];
        let b = data[1]["brassicas"];
        let p = data[2]["peppers"];
        val = val.toLowerCase();
        const filterf = f.filter((el) => {
          return el.name.toLocaleLowerCase().includes(val);
        });
        const filterb = b.filter((el) => {
          return el.name.toLocaleLowerCase().includes(val);
        });
        const filterp = p.filter((el) => {
          return el.name.toLocaleLowerCase().includes(val);
        });
        let allValues = [filterf, filterb, filterp];
        window.localStorage.setItem("searchArray", JSON.stringify(allValues));
      });
    });
    let searchListView = this.state.search.map((el) => {
      console.log(el);
      return el.map((item) => {
        return (
          <div className="searchCard" key={Math.random()}>
            <img src={item.img} />
            {item.saleRate == 0 ? (
              <p></p>
            ) : (
              <p className="sale">{item.saleRate + "%"}</p>
            )}
            <div className="text">
              <span>{item.name}</span>
              <p className="pragSearch">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate quos molestias quod numquam quam, natus sapiente
                dolore obcaecati ipsa pariatur maxime consectetur reiciendis
                delectus repudiandae beatae quas accusamus voluptatem
                repellendus?
              </p>
              <div className="priceSec">
                {item.saleRate != 0 ? (
                  <del className="oldprice">{item.price.toFixed(2)}$</del>
                ) : null}
                <p className="price">{item.price + item.saleRate}$</p>
              </div>
            </div>
          </div>
        );
      });
    });
    return (
      <div className="outerHeader">
        <header className="container">
          <SideBar fav={fav} cart={cart} />
          <div className="searchPhoneIcons" id="searchPhoneIcons">
            <div
              className="close"
              onClick={() => {
                document.getElementById("searchPhoneIcons").style.display =
                  "none";
              }}
            >
              X
            </div>
            <input
              type="search"
              id="searchPhone"
              placeholder="search Product"
              onChange={() => {
                console.log("cc");
                let filterd = JSON.parse(
                  window.localStorage.getItem("searchArray")
                );
                this.setState({
                  search: filterd,
                });
                document.getElementById("saearchItemsPart").style.cssText =
                  "display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-start;";
                if (document.getElementById("searchPhone").value == "") {
                  document.getElementById("saearchItemsPart").style.cssText =
                    "display: none;";
                } else {
                }
              }}
            />
          </div>
          <div className="logo ">
            <span className="menu" id="menu">
              <ion-icon name="menu-outline"></ion-icon>
            </span>
            <AnimatedHeader name={"Konado"} />
          </div>
          <ul className="navLinks">
            <li>
              <a id="selectedProduct" href="/selectedProduct"></a>
            </li>
            <li>
              <a id="homeLink" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/products" id="goToProducts">
                Products
              </a>
            </li>
            <li>
              <a href="/blog">Blogs</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className="saearchItemsPart" id="saearchItemsPart">
            <div
              className="close"
              onClick={() => {
                document.getElementById("saearchItemsPart").style.display =
                  "none";
              }}
            >
              X
            </div>
            <div>{searchListView}</div>
          </div>
          <ion-icon
            name="search-outline"
            id="PhonesearchFocus"
            onClick={() => {
              document.getElementById("searchPhoneIcons").style.display =
                "block";
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          ></ion-icon>
          <div className="control">
            <form>
              <input
                type="search"
                id="search"
                placeholder="search Product"
                onChange={() => {
                  let filterd = JSON.parse(
                    window.localStorage.getItem("searchArray")
                  );
                  this.setState({
                    search: filterd,
                  });
                  document.getElementById("saearchItemsPart").style.cssText =
                    "display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-start;";
                  if (document.getElementById("search").value == "") {
                    document.getElementById("saearchItemsPart").style.cssText =
                      "display: none;";
                  }
                }}
              />
              <ion-icon name="search-outline" id="searchFocus"></ion-icon>

              <div className="iconhead">
                {" "}
                <span className="favCount"> {favCount}</span>{" "}
                <ion-icon
                  name="heart-outline"
                  className="fav"
                  id="favSideShow"
                  onClick={() => {
                    let cartList = JSON.parse(
                      window.localStorage.getItem("favList")
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
                ></ion-icon>
              </div>
              <div className="iconhead">
                <span className="favCount"> {cartCount}</span>{" "}
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
                  id="cartSideShow"
                ></ion-icon>
              </div>
              <ion-icon name="settings-outline" id="settingShow"></ion-icon>
              {checkLogin ? (
                <ion-icon id="profile" name="person-circle-outline"></ion-icon>
              ) : null}
            </form>
          </div>
          <div className="favSidebar" id="favSidebar">
            <h2 className="header">favourits</h2>
            <React.Fragment>{favList}</React.Fragment>
          </div>
          <div className="cartSidebar" id="cartSidebar">
            <h2 className="header">cart</h2>
            <React.Fragment>{cartList}</React.Fragment>
          </div>
          <div className="settings" id="settingSideBar">
            <ul>
              <ul>
                <p>My account</p>
                <li>
                  <a id="loginClick" href="/login">
                    Login
                  </a>
                </li>
                <li
                  onClick={() => {
                    window.localStorage.removeItem("logined");
                    window.localStorage.removeItem("account");
                    window.location.reload();
                  }}
                >
                  logout
                </li>
                <li>
                  <a href="/register">register</a>
                </li>
              </ul>
              <ul>
                <p>language</p>
                <li>english</li>
                <li>frensh</li>
              </ul>
              <ul>
                <p>currency</p>
                <li>EGP</li>
                <li>DOLLAR</li>
              </ul>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
