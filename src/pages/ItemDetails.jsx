import React, { useEffect } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import { getItemDetails } from "./../services/cloud-api";
import Skeleton from "../components/UI/Skeleton";

const ItemDetails = () => {
  const id = useParams().id;
  const [nft, setNft] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const fetchItemDetails = async () => {
      setLoading(true);
      const res = await getItemDetails(id);
      res.status === 200 && setNft(res.data);
      setLoading(false);
    };
    fetchItemDetails(); // Call the async function
    window.scroll(0, 0);


  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                {loading ? (
                  <>
                    <Skeleton width={`100%`} height={`560px`}></Skeleton>
                  </>
                ) : (
                  <>
                    <img
                      src={nft.nftImage || nftImage}
                      className="img-fluid img-rounded mb-sm-30 nft-image"
                      alt=""
                    />
                  </>
                )}
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  {loading ? (
                    <>
                      <Skeleton width={`100%`} height={`40px`}></Skeleton>
                    </>
                  ) : (
                    <>
                      <h2>{nft.title} #{nft.tag}</h2>
                    </>
                  )}

                  <div className="item_info_counts">
                    {loading ? (
                      <>
                        <div className="item_info_views skeleton-box"></div>
                        <div className="item_info_like skeleton-box"></div>
                      </>
                    ) : (
                      <>
                        <div className="item_info_views">
                          <i className="fa fa-eye"></i>
                          {nft.views}
                        </div>
                        <div className="item_info_like">
                          <i className="fa fa-heart"></i>
                          {nft.likes}
                        </div>
                      </>
                    )}
                  </div>
                  {loading ? (
                    <>
                      <Skeleton width={`100%`} height={`128px`}></Skeleton>
                    </>
                  ) : (
                    <>
                      <p>
                       {nft.description}
                      </p>
                    </>
                  )}
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          {loading ? (
                            <>
                              <Link to="">
                                <Skeleton
                                  width={`50px`}
                                  height={`50px`}
                                  borderRadius={`100%`}
                                ></Skeleton>
                              </Link>
                            </>
                          ) : (
                            <>
                              <Link to={`/author/${nft.ownerId}`}>
                                <img
                                  className="lazy"
                                  src={nft.ownerImage}
                                  alt=""
                                />
                                <i className="fa fa-check"></i>
                              </Link>
                            </>
                          )}
                        </div>
                        {loading ? (
                          <>
                            <div className="author_list_info">
                              <Link to="">
                                <Skeleton
                                  width={`100px`}
                                  height={`20px`}
                                  borderRadius={`4%`}
                                ></Skeleton>
                              </Link>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="author_list_info">
                              <Link to={`/author/${nft.ownerId}`}>{nft.ownerName}</Link>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          {loading ? (
                            <>
                              <Link to="">
                                <Skeleton
                                  width={`50px`}
                                  height={`50px`}
                                  borderRadius={`100%`}
                                ></Skeleton>
                              </Link>
                            </>
                          ) : (
                            <>
                              <Link to={`/author/${nft.creatorId}`}>
                                <img
                                  className="lazy"
                                  src={nft.creatorImage}
                                  alt=""
                                />
                                <i className="fa fa-check"></i>
                              </Link>
                            </>
                          )}
                        </div>
                        {loading ? (
                          <>
                            <div className="author_list_info">
                              <Link to="">
                                <Skeleton
                                  width={`100px`}
                                  height={`20px`}
                                  borderRadius={`4%`}
                                ></Skeleton>
                              </Link>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="author_list_info">
                              <Link to={`/author/${nft.creatorId}`}>{nft.creatorName}</Link>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    {loading ? (
                      <>
                        <div className="nft-item-price">
                          <Skeleton width={`100px`} height={`24px`} borderRadius={`4%`}></Skeleton>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="nft-item-price">
                          <img src={EthImage} alt="" />
                          <span>{nft.price}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
