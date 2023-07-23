import React, { Component } from "react";
class AnimatedHeader extends Component {
  render() {
    return (
      <div className="animateNae">
        <svg viewBox="0 0 960 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="80%">
              {this.props.name}
            </text>
          </symbol>

          <g className="g-ants">
            <use href="#s-text" className="text-copy"></use>
            <use href="#s-text" className="text-copy"></use>
            <use href="#s-text" className="text-copy"></use>
            <use href="#s-text" className="text-copy"></use>
            <use href="#s-text" className="text-copy"></use>
          </g>
        </svg>
      </div>
    );
  }
}
export default AnimatedHeader;
