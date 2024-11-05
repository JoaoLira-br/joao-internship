import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Skeleton from './Skeleton'
import nftImage from '../../images/nftImage.jpg'
import AuthorImage from "../../images/author_thumbnail.jpg";

const CarouselNewItems = ({items, loading}) => {
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
    {/* json example: {
"id": 1,
"authorId": 83937449,
"authorImage": "https://nft-place.web.app/static/media/author-1.04ee784f53cbe427d362.jpg",
"nftImage": "https://nft-place.web.app/static/media/static-1.0299eed903ee71c8c953.jpg",
"nftId": 10147817,
"title": "Pinky Ocean",
"price": 5.07,
"likes": 69,
"expiryDate": 1730820656603
}, */}
    <Slider {...settings}>
      {items.length > 0 ? (<>
        {items.map((item, index) => {
            return (


          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
          <div className="nft__item">
            <div className="author_list_pp">
              <Link
                to={`/author/${item.authorId}`}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                // todo: add author name to the title
                title="Creator: "
              >
                <img className="lazy" src={item.authorImage} alt="" />
                <i className="fa fa-check"></i>
              </Link>
            </div>
            {/* <div className="de_countdown">5h 30m 32s </div>

            <div className="nft__item_wrap">
              <div className="nft__item_extra">
                <div className="nft__item_buttons">
                  <button>Buy Now</button>
                  <div className="nft__item_share">
                    <h4>Share</h4>
                    <a href="" target="_blank" rel="noreferrer">
                      <i className="fa fa-facebook fa-lg"></i>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-envelope fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <Link to="/item-details">
                <img
                  src={nftImage}
                  className="lazy nft__item_preview"
                  alt=""
                />
              </Link>
            </div>
            <div className="nft__item_info">
              <Link to="/item-details">
                <h4>Pinky Ocean</h4>
              </Link>
              <div className="nft__item_price">3.08 ETH</div>
              <div className="nft__item_like">
                <i className="fa fa-heart"></i>
                <span>69</span>
              </div>
            </div> */}
          </div>
        </div>
        )})}
      </>) : (<>  
  {new Array(4).fill(0).map((_, index) => (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
      <div className="nft__item">
        <div className="author_list_pp">
          <Link
            to="/author"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Creator: Monica Lucas"
          >
            <img className="lazy" src={AuthorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        </div>
        <div className="de_countdown">5h 30m 32s</div>

        <div className="nft__item_wrap">
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              <button>Buy Now</button>
              <div className="nft__item_share">
                <h4>Share</h4>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
                <a href="">
                  <i className="fa fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <Link to="/item-details">
            <img
              src={nftImage}
              className="lazy nft__item_preview"
              alt=""
            />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to="/item-details">
            <h4>Pinky Ocean</h4>
          </Link>
          <div className="nft__item_price">3.08 ETH</div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>69</span>
          </div>
        </div>
      </div>
    </div>
  ))}
      </>)}
    </Slider>
  </div>
  )
}

export default CarouselNewItems