import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Skeleton from "./Skeleton";
import nftImage from "../../images/nftImage.jpg";
import AuthorImage from "../../images/author_thumbnail.jpg";
import CountdownTimer from "./CountdownTimer";
import SliderNewItems from "./SliderNewItems";

const CarouselNewItems = ({ items, loading }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 }, // For tablet view
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 }, // For mobile view
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }, // For small mobile screens
      },
    ],
  };
 
  return (
    // todo: skeleton loading states
    <div className="slider-container">
        {
        !loading ? (<>{items.length > 0 ? (<> 
        <SliderNewItems items={items} settings={settings}></SliderNewItems>
        </>) : (<> 

        </>)} </>) : (<>
        <SliderNewItems items={items} settings={settings} skeleton={true}></SliderNewItems>
        </>)
      }
    </div>
  );
};

export default CarouselNewItems;
