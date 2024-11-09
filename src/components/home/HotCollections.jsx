import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import { getNFTS } from "../../services/cloud-api";
import Slider from "react-slick";
import Skeleton from './../UI/Skeleton';
import CarouselHotCollections from "../UI/CarouselHotCollections";
const HotCollections = () => {
  const [nfts, setNFTs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

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

  useEffect(() => {
    const fetchNFTs = async () => {
      setLoading(true);
      const res = await getNFTS();

      res?.status === 200 && setNFTs(res.data);
      setLoading(false);
    };

    fetchNFTs(); // Call the async function


  }, []);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2 data-aos="fade" data-aos-duration="800"   data-aos-easing="ease-in">Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <CarouselHotCollections nfts={nfts} loading={loading}></CarouselHotCollections>
          
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
