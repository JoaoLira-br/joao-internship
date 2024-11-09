import React, { useEffect } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import { getAuthor } from "./../services/cloud-api";
import Skeleton from "../components/UI/Skeleton";

const Author = () => {
  const id = useParams().id;
  const [loading, setLoading] = React.useState(false);
  const [authorData, setAuthorData] = React.useState({});
  const [follow, setFollow] = React.useState(false);

  const handleFollow = () => {
    if (!follow) {
      setFollow(true);

      authorData.followers += 1;
    } else {
      setFollow(false);
      authorData.followers -= 1;
    }
  };
  const clipboardCopy = () => {
    navigator.clipboard.writeText(authorData.address);
  };
    
  useEffect(() => {
    const fetchAuthor = async () => {
      setLoading(true);
      const res = await getAuthor(id);
      res.status === 200 && setAuthorData(res.data);

      setLoading(false);
    };
    fetchAuthor(); // Call the async function
    window.scroll(0, 0);
  },[]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      {loading ? (<> 
                        <Skeleton width={`120px`} height={`120px`} borderRadius={`100%`}></Skeleton>
                      </>) :
                      (<>
                      
                      <img src={authorData.authorImage} alt="" />
                      </>)}
                      
                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        {loading ? (<>
                          <h4>
                            <Skeleton width={`64px`} height={`16px`} borderRadius={`4%`}></Skeleton>

                          <span className="profile_username">
                            <Skeleton width={`32px`} height={`12px`} borderRadius={`4%`}></Skeleton>
                          </span>
                          <span id="wallet" className="profile_wallet">
                            <Skeleton width={`100px`} height={`12px`} borderRadius={`4%`}></Skeleton>

                            <Skeleton width={`64px`} height={`18px`} borderRadius={`4%`} margin={`0 8px`}></Skeleton>

                          </span>

                        </h4>
                        </>) : (<>
                        <h4>
                          {authorData.authorName}
                          <span className="profile_username">
                            @{authorData.tag}
                          </span>
                          <span id="wallet" className="profile_wallet">
                            {authorData.address}
                          </span>
                          <button id="btn_copy" title="Copy Text" onClick={clipboardCopy}>
                            Copy
                          </button>
                        </h4>
                        
                        </>)}
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">
                        {loading ? (<>
                          <Skeleton width={`64px`} height={`12px`} borderRadius={`4%`}></Skeleton>

                         </>) : (<>

                        {authorData.followers} followers
                        
                        </>)}
                      </div>
                      {loading ? (<> 
                      
                      <Link to="" className="" >
                          
                      <Skeleton width={`128px`} height={`32px`} borderRadius={`4%`} margin={`0 8px`}></Skeleton>

                      </Link>
                      </>) : (<> 
                      
                      <Link to="#" className="btn-main" onClick={handleFollow}>
                          
                        {follow ? "Unfollow" : "Follow"}
                      </Link>
                      </>)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">

                  <AuthorItems items={authorData.nftCollection} loading={loading} authorImage={authorData.authorImage}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
