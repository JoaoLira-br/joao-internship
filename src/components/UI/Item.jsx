import React from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import Skeleton from "./Skeleton";
import { type } from "@testing-library/user-event/dist/type";

const Item = ({ item = [], skeleton = false, authorImage}) => {

  // console.log(...author);

  return (
    <div className="nft__item" data-aos="fade" data-aos-duration="800"   data-aos-easing="ease-in">
      <div className="author_list_pp">
        {skeleton ? (
          <Link
            to={``}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Creator:  ""}`}
          >
            <Skeleton
              width={`49px`}
              height={`49px`}
              borderRadius={`100%`}
            ></Skeleton>
            <i className="fa fa-check"></i>
          </Link>
        ) : (
          <Link
            to={`/author/${item.authorId}`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Creator: ${item.authorName || ""}`}
          >
            <img
              className="lazy"
              src={item.authorImage || authorImage}
              alt={`${item.authorName || "Author"}'s profile`}
            />
          </Link>
        )}
      </div>

      {!skeleton && (
        <>
          {item.expiryDate && <CountdownTimer expiryDate={item.expiryDate} />}
        </>
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
        {skeleton ? (
          <>
            <Link to={``}>
              <Skeleton
                width={`100%`}
                height={`350px`}
                borderRadius={`10px`}
              ></Skeleton>
            </Link>
          </>
        ) : (
          <>
            <Link to={`/item-details/nftId=${item.nftId}`}>
              <img
                src={item.nftImage}
                className="lazy nft__item_preview"
                alt={item.title}
              />
            </Link>
          </>
        )}
      </div>

      <div className="nft__item_info">
        {skeleton ? (
          <>
            <Link to={``}>
              <Skeleton
                width={`100px`}
                height={`20px`}
                borderRadius={`4px`}
              ></Skeleton>
            </Link>
            <Skeleton
              width={`50px`}
              height={`20px`}
              borderRadius={`4px`}
              display={`block`}
            ></Skeleton>
          </>
        ) : (
          <>
            <Link to={`/item-details/nftId=${item.nftId}`}>
              <h4>{item.title}</h4>
            </Link>
            <div className="nft__item_price">{item.price} ETH</div>
          </>
        )}

        <div className="nft__item_like">
          <i className="fa fa-heart"></i>
          {skeleton ? (
            <>
              <Skeleton
                width={`20px`}
                height={`20px`}
                borderRadius={`100%`}
              ></Skeleton>
            </>
          ) : (
            <>
              <span>{item.likes}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
