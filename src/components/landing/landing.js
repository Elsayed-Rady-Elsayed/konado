import React, { Component, useEffect } from "react";
import "./landingHelper";
import LandingCard from "./landingCards";
import "../background/heler";
import AnimatedHeader from "../background/animateHead";
class Landing extends Component {
  state = {
    items: [
      {
        head2: "____Exclusive offer 20% off this weak",
        head1: "Nature Organic",
        parg: "korado always bring fresh food for you with good quality,all we seck is to be the top",
        img: "https://plus.unsplash.com/premium_photo-1676642615413-e18b508a0ff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      },
      {
        head2: "____Cold Process Organic",
        head1: "Savon Stories",
        parg: "korado always bring fresh food for you with good quality,all we seck is to be the top",
        img: "https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    category: [
      {
        name: "offers",
        img: "https://plus.unsplash.com/premium_photo-1672759267853-533e2d24813c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "vegetables",
        img: "https://images.unsplash.com/photo-1583507171283-0d663f8416c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "fruits",
        img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "exotic",
        img: "https://images.unsplash.com/photo-1624821588855-a3ffb0b050ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "fresh cuts",
        img: "https://plus.unsplash.com/premium_photo-1674486230302-5eb7699856f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Nutrition",
        img: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "packed flavors",
        img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        name: "gourmet salads",
        img: "https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
    ],
    idx: 0,
  };
  changeIdx = () => {
    let i = this.state.idx;
    if (i >= this.state.items.length - 1) {
      this.setState({
        idx: 0,
      });
    } else {
      this.setState({
        idx: 1,
      });
    }
  };
  componentDidMount() {
    setInterval(() => {
      this.changeIdx();
    }, 5000);
  }
  handleClick = () => {
    if (this.state.idx == 0) {
      this.setState({
        idx: 1,
      });
    } else {
      this.setState({
        idx: 0,
      });
    }
  };
  render() {
    const catList = this.state.category.map((el) => {
      return (
        <div className="cardCateg" key={Math.random()}>
          <div className="imgholde">
            {" "}
            <img src={el.img} />
          </div>
          <p>{el.name}</p>
        </div>
      );
    });
    return (
      <div className="wholeLand container">
        {/* <div className="greeting" id="greeting">
          <main className="text-container">
            <svg
              className="text-stroke"
              viewBox="0 0 500 100"
              width="80%"
              height="100%"
            >
              <text className="text" x="20" y="75">
                welcome back,
              </text>
            </svg>
          </main>
        </div> */}
        <section id="landing" className="Landing">
          <ion-icon
            onClick={this.handleClick}
            id="forward"
            name="chevron-forward-outline"
          ></ion-icon>
          <ion-icon
            onClick={this.handleClick}
            id="back"
            name="chevron-back-outline"
          ></ion-icon>
          <img className="landimg" src={this.state.items[this.state.idx].img} />
          <div className="text">
            <h3>{this.state.items[this.state.idx].head2}</h3>
            <h1>{this.state.items[this.state.idx].head1}</h1>
            <p>{this.state.items[this.state.idx].parg}</p>
            <button
              onClick={() => {
                document.getElementById("goToProducts").click();
              }}
            >
              Shop Now
            </button>
          </div>
        </section>
        <LandingCard />
        <div className="category">
          <div className="header">
            <AnimatedHeader name={"category"} />
            <span className="ruleLine"></span>
          </div>
          <div className="catHolder">{catList}</div>
        </div>
      </div>
    );
  }
}
export default Landing;
