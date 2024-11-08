import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import { getExplore, getExploreFilter} from "./../../services/cloud-api";
import Items from "../UI/Items";
import Item from "../UI/Item";

const ExploreItems = () => {
  const [itemsExplore, setItemsExplore] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [nftCount, setNftCount] = React.useState(8);
  function handleLoadMore() {
    if(nftCount >= itemsExplore.length) return;
    setNftCount((prev) => prev + 4);
  }
  
  function filterExplore(filter) {
    getExploreFilter(filter).then((res) => {
      res?.status === 200 && setItemsExplore(res.data);
    })

  }
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await getExplore();

      res?.status === 200 && setItemsExplore(res.data);
        setLoading(false); 
    };
    fetchItems(); // Call the async function
  }, []);

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="" onChange={(e) => filterExplore(e.target.value)} >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {loading ? (
        <>
            {new Array(12).fill(0).map((item, index) => (
            <div
              key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <Item key={index} item={null} skeleton={true}></Item>
            </div>
          ))}
        </>
      ) : itemsExplore.length > 0 ? (
        <>

          {itemsExplore.slice(0, nftCount).map((item, index) => (
            <div
              key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <Item key={index} item={item} skeleton={false}></Item>
            </div>
          ))}
        </>
      ) : (
        <>
          <p>No items Available</p>;
        </>
      )}

      <div className="col-md-12 text-center">
        <Link to="" id="loadmore" className="btn-main lead" onClick={handleLoadMore}>
          Load more
        </Link>
      </div>
    </>
  );
};

export default ExploreItems;
