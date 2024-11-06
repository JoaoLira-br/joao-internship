import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Skeleton from "./Skeleton";
import CountdownTimer from "./CountdownTimer";

const SliderNewItems = ({ items = [], settings, skeleton = false }) => {
  return (
    <>
      {skeleton ? (
        <>
         <Slider {...settings}>
            {new Array(10).fill(0).map((_, index)  => (
              <div className="item-wrapper" key={index}>
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link
                      to={``}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={`Creator: `}
                    >
                        <Skeleton width={`49px`} height={`49px`} borderRadius={`100%`}></Skeleton>
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>

                

                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button className="btn-buy">Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
                          <div className="social-icons">
                            <a href="#" target="_blank" rel="noreferrer">
                              <i className="fa fa-facebook fa-lg"></i>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                              <i className="fa fa-twitter fa-lg"></i>
                            </a>
                            <a href="#" rel="noreferrer">
                              <i className="fa fa-envelope fa-lg"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item__img--wrapper">

                    </div>
                    <Link to={``}>
                     <Skeleton width={`250px`} height={`250px`} borderRadius={`10px`}></Skeleton>
                      {/* <img
                        src={item.nftImage}
                        className="lazy nft__item_preview"
                        alt={item.title}
                      /> */}
                    </Link>
                  </div>

                  <div className="nft__item_info">
                    <Link to={``}>
                        <Skeleton width={`100px`} height={`20px`} borderRadius={`4px`}></Skeleton>
                      {/* <h4>{item.title}</h4> */}
                    </Link>
                    <Skeleton width={`50px`} height={`20px`} borderRadius={`4px`} display={`block`}></Skeleton>
                    {/* <div className="nft__item_price">{item.price} ETH</div> */}
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                        <Skeleton width={`20px`} height={`20px`} borderRadius={`100%`}></Skeleton>
                      {/* <span>{item.likes}</span> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </>
      ) : (
        <>
          <Slider {...settings}>
            {items.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link
                      to={`/author/${item.authorId}`}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={`Creator: ${item.authorName || ""}`}
                    >
                      <img
                        className="lazy"
                        src={item.authorImage}
                        alt={`${item.authorName || "Author"}'s profile`}
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>

                  {item.expiryDate && (
                    <CountdownTimer expiryDate={item.expiryDate} />
                  )}

                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button className="btn-buy">Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
                          <div className="social-icons">
                            <a href="#" target="_blank" rel="noreferrer">
                              <i className="fa fa-facebook fa-lg"></i>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                              <i className="fa fa-twitter fa-lg"></i>
                            </a>
                            <a href="#" rel="noreferrer">
                              <i className="fa fa-envelope fa-lg"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link to={`/item-details/${item.nftId}`}>
                      <img
                        src={item.nftImage}
                        className="lazy nft__item_preview"
                        alt={item.title}
                      />
                    </Link>
                  </div>

                  <div className="nft__item_info">
                    <Link to={`/item-details/${item.nftId}`}>
                      <h4>{item.title}</h4>
                    </Link>
                    <div className="nft__item_price">{item.price} ETH</div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>{item.likes}</span>
                    </div>
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

export default SliderNewItems;