import React, { Component } from "react";
import $ from "jquery";
class ProductDetailsPage extends Component {
  state = {
    count: 0,
    favorits: [],
    cart: [],
  };
  render() {
    let item = JSON.parse(window.localStorage.getItem("productViewd"));
    let img = item.img;
    const style = {
      backgroundImage: "url(" + img + ")",
    };
    return (
      <div className="Productdetailspage">
        <div style={style} className="productHeader">
          <div className="headerText">
            <p className="title">{item.name}</p>
            <p>home &lt; products &lt; product page</p>
          </div>
        </div>
        <div className="productBodyDetails container">
          <div className="imgContainer" id="imgContainerForZOOM">
            {item.saleRate == 0 ? (
              <p></p>
            ) : (
              <p className="sale">{item.saleRate + "%"}</p>
            )}
            <img
              id="zoomImgOfproduct"
              onMouseEnter={() => {
                console.log("scale");
                $("#zoomImgOfproduct").css({
                  transform: "scale(2)",
                });
              }}
              onMouseLeave={() => {
                console.log("scale");
                $("#zoomImgOfproduct").css({
                  transform: "scale(1)",
                });
              }}
              src={item.img}
            />
          </div>
          <div className="Text">
            <p className="pHead">{item.name}</p>
            <div className="priceSec">
              {item.saleRate != 0 ? (
                <del className="oldprice">{item.price.toFixed(2)}$</del>
              ) : null}
              <p className="price">
                {(item.price + item.saleRate).toFixed(2)}$
              </p>
            </div>
            <p className="pargrap">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              Consetetur sadipscing elitr, sed diam nonumy eirmod. Suspendisse
              ultrices mauris diam Donec nunc nunc, gravida vitae diam vel,
              varius interdum erat. Quisque a nunc vel diam auctor commodo
            </p>
            <div className="count">
              <span
                onClick={() => {
                  let c = this.state.count;
                  if (this.state.count > 0) {
                    this.setState({
                      count: c - 1,
                    });
                  }
                }}
              >
                -
              </span>
              <span>{this.state.count}</span>
              <span
                onClick={() => {
                  let c = this.state.count;

                  this.setState({
                    count: c + 1,
                  });
                }}
              >
                +
              </span>
            </div>
            <div className="buttons">
              <button
                className="addtoCart"
                onClick={() => {
                  if (window.localStorage.getItem("cartList") == null) {
                    window.localStorage.setItem(
                      "cartList",
                      JSON.stringify({
                        name: item.listid,
                        id: item.id,
                      })
                    );
                  } else {
                    let getList = JSON.parse(
                      window.localStorage.getItem("cartList")
                    );
                    getList = Array.from(getList);
                    getList.push({
                      name: item.listid,
                      id: item.id,
                    });
                    window.localStorage.setItem(
                      "cartList",
                      JSON.stringify(getList)
                    );
                  }
                  window.location.reload();
                }}
              >
                add to cart
              </button>
              <button
                className="addtoCart"
                onClick={() => {
                  let list = this.state.favorits;
                  list.push(item);
                  this.setState({
                    favorits: list,
                  });
                  if (window.localStorage.getItem("favList") == null) {
                    window.localStorage.setItem(
                      "favList",
                      JSON.stringify({
                        name: item.listid,
                        id: item.id,
                      })
                    );
                  } else {
                    let getList = JSON.parse(
                      window.localStorage.getItem("favList")
                    );
                    getList = Array.from(getList);
                    getList.push({
                      name: item.listid,
                      id: item.id,
                    });
                    window.localStorage.setItem(
                      "favList",
                      JSON.stringify(getList)
                    );
                  }
                  window.location.reload();
                }}
              >
                add to favourit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetailsPage;
