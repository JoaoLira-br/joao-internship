import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import { getTopSellers } from './../../services/cloud-api';
import Skeleton from "../UI/Skeleton";

const TopSellers = () => {
  const [topSellers, setTopSellers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await getTopSellers();

      res?.status === 200 && setTopSellers(res.data);
      setLoading(false);
    };
    fetchItems(); // Call the async function


  },[]);
  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2 data-aos="fade" data-aos-duration="800"   data-aos-easing="ease-in">Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12" data-aos="fade" data-aos-duration="900"   data-aos-easing="ease-in">
            <ol className="author_list" >
              {loading ? new Array(12).fill(0).map((_, index) => (
                  <li key={index}>
                    <div className="author_list_pp" >
                      <Link to="">
                      <Skeleton width={`49px`} height={`49px`} borderRadius={`100%`}></Skeleton>
                        {/* <img
                          className="lazy pp-author"
                          src={AuthorImage}
                          alt=""
                        /> */}
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
                    <div className="author_list_info">
                      <Link to=""><Skeleton width={`64px`} height={`16px`} borderRadius={`4%`}></Skeleton></Link>
                      <span><Skeleton width={`32px`} height={`12px`} borderRadius={`4%`}></Skeleton></span>
                    </div>
                  </li>
                ))

               : (
                topSellers.map((seller, index) => (
                  <li key={index}>
                  <div className="author_list_pp">
                    <Link to={`/author/${seller.authorId}`}>
                      <img
                        className="lazy pp-author"
                        src={seller.authorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to={`/author/${seller.authorId}`}>{seller.authorName}</Link>
                    <span>{seller.price} ETH</span>
                  </div>
                </li>
                )
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
