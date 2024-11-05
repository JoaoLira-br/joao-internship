import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Skeleton from './Skeleton'
import nftImage from '../../images/nftImage.jpg'
import AuthorImage from "../../images/author_thumbnail.jpg";



const CarouselHotCollections = ({nfts, loading}) => {
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
    <Slider {...settings}>
      {nfts.length > 0
        ? nfts.map((nft, index) => (
            <div style={{ padding: "0 10px" }} key={index}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    {loading ? (
                      <Skeleton width={"100%"} height={"80%"} borderRadius={"10px"} />
                      // <div className="hot-collection__img--skeleton skeleton"></div>
                    ) : (
                      <img
                        src={nft.nftImage}
                        className="lazy img-fluid"
                        alt={nft.title}
                      />
                    )}
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    {loading ? (
                      <Skeleton width={"60px"} height={"60px"} borderRadius={"100%"} ></Skeleton>
                      // <div className="hot-collection__author-img--skeleton skeleton"></div>
                    ) : (
                      <>
                        <img
                          className="lazy pp-coll"
                          src={nft.authorImage}
                          alt={nft.authorName}
                        />
                        <i className="fa fa-check"></i>
                      </>
                    )}
                  </Link>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                  {loading ? (
                  
                    <Skeleton width={"100px"} height={"24px"} borderRadius={"4%"} margin={"0 auto"} display={"block"}></Skeleton>
                    // <div className="hot-collection__nft-title--skeleton skeleton"></div>
                  ) : (
                    
                    <h4>{nft.title}</h4>
                  )}
                  </Link>
                  {loading ? (
                    
                    <Skeleton width={"60px"} height={"12px"} borderRadius={"4%"} ></Skeleton>
                    // <div className="hot-collection__nft-code--skeleton skeleton"></div>
                  ) : (
                    
                    <span>{nft.code}</span>
                  )}
                </div>
              </div>
            </div>
          ))
        : new Array(4).fill(0).map((_, index) => (
            <div key={index}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img
                      src={nftImage}
                      className="lazy img-fluid"
                      alt="Default NFT"
                    />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img
                      className="lazy pp-coll"
                      src={AuthorImage}
                      alt="Default Author"
                    />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>Pinky Ocean</h4>
                  </Link>
                  <span>ERC-192</span>
                </div>
              </div>
            </div>
          ))}
    </Slider>
  </div>
  )
}

export default CarouselHotCollections