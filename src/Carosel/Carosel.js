import React, { Component } from "react";
import { CarouselData } from "./data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

class Carosel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  render() {
    return (
      <div className="mt-8">
        <div className="max-w-lg h-72 flex overflow-hidden relative">
          {CarouselData.map((slide, index) => {
            return (
              <img
                src={slide.image}
                alt="This is a carousel slide"
                key={index}
                className={
                  index === this.state.currentSlide
                    ? "block w-full h-auto object-cover"
                    : "hidden"
                }
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carosel;