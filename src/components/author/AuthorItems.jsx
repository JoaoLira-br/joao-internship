import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import Item from "../UI/Item";

const AuthorItems = ({ items = [], loading = false, authorImage }) => {

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {loading ? (
            <>
              {new Array(8).fill(0).map((_, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <Item key={index} skeleton={true}></Item>
                </div>
              ))}
            </>
          ) : (
            <>
              {items.map((item, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <Item key={index} item={item} skeleton={false} authorImage={authorImage}></Item>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
