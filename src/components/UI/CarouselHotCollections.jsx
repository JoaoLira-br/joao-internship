import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Skeleton from "./Skeleton";
import nftImage from "../../images/nftImage.jpg";
import AuthorImage from "../../images/author_thumbnail.jpg";
import SliderHotCollections from './SliderHotCollections';

const CarouselHotCollections = ({ nfts, loading }) => {
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
    <div className="slider-container">
      {
        !loading ? (<>{nfts.length > 0 ? (<> 
        <SliderHotCollections nfts={nfts} settings={settings}></SliderHotCollections>
        </>) : (<> 
           <p>No items Available</p>;
        </>)} </>) : (<>
        <SliderHotCollections nfts={nfts} settings={settings} skeleton={true}></SliderHotCollections>
        </>)
      }
    </div>
  );
};

export default CarouselHotCollections;
