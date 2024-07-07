import React, { Component } from "react";
class LandingCard extends Component {
  state = {
    Landingcards: [
      "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/banner-01.jpg",
      "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/banner-02.jpg",
      "https://demo-38.woovinapro.com/wp-content/uploads/2020/06/banner-03.jpg",
    ],
  };
  render() {
    const list = this.state.Landingcards.map((el) => {
      return <img key={Math.random()} src={el} />;
    });
    return <div className="landingCard">{list}</div>;
  }
}
export default LandingCard;
