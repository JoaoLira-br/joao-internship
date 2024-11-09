import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Skeleton from "./Skeleton";

const SliderHotCollections = ({ nfts = [], settings, skeleton = false }) => {
  return (
    <>
      {skeleton ? (
        <>
          <Slider {...settings}>
            {new Array(10).fill(0).map((_, index) => (
              <div style={{ padding: "0 10px" }} key={index}>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <Link to="/item-details">
                      <Skeleton
                        width={"100%"}
                        height={"80%"}
                        borderRadius={"10px"}
                      />
                    </Link>
                  </div>
                  <div className="nft_coll_pp">
                    <Link to="/author">
                      <Skeleton
                        width={"60px"}
                        height={"60px"}
                        borderRadius={"100%"}
                      />
                    </Link>
                  </div>
                  <div className="nft_coll_info">
                    <Link to="/explore">
                      <Skeleton
                        width={"100px"}
                        height={"24px"}
                        borderRadius={"4%"}
                        margin={"0 auto"}
                        display={"block"}
                      />
                    </Link>

                    <Skeleton
                      width={"60px"}
                      height={"12px"}
                      borderRadius={"4%"}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </>
      ) : (
        <>
          <Slider {...settings}>
            {nfts.map((nft, index) => (
              <div style={{ padding: "0 10px" }} key={index} data-aos="fade" data-aos-duration="800"   data-aos-easing="ease-in">
                <div className="nft_coll">
                  <div className="nft_wrap">

                    <Link to={`/item-details/nftId=${nft.nftId}`}>
                      <img
                        src={nft.nftImage}
                        className="lazy img-fluid"
                        alt={nft.title}
                      />
                    </Link>
                  </div>
                  <div className="nft_coll_pp">
                    <Link to={`/author/${nft.authorId}`}>
                      <>
                        <img
                          className="lazy pp-coll"
                          src={nft.authorImage}
                          alt={nft.authorName}
                        />
                        <i className="fa fa-check"></i>
                      </>
                    </Link>
                  </div>
                  <div className="nft_coll_info">
                    <Link to="/explore">
                      <h4>{nft.title}</h4>
                    </Link>

                    <span>{nft.code}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default SliderHotCollections;
