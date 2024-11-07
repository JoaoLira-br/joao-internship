import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Skeleton from "./Skeleton";
import CountdownTimer from "./CountdownTimer";
import Items from "../explore/Items";
import Item from "../explore/Item";

const SliderNewItems = ({ items = [], settings, skeleton = false }) => {
  return (
    <>
      {skeleton ? (
        <>
          <Slider {...settings}>
            {new Array(12).fill(0).map((_, index) => (
              <div className="item-wrapper" key={index}>
                <Item key={index} item={null} skeleton={true}></Item>
              </div>
            ))}
          </Slider>
        </>
      ) : (
        <>
          <Slider {...settings}>
            {items.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <Item key={index} item={item} skeleton={false}></Item>
              </div>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default SliderNewItems;
