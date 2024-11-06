import React, { useEffect } from "react";
import { getNewItems } from './../../services/cloud-api';
import CarouselNewItems from "../UI/CarouselNewItems";


const NewItems = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await getNewItems();

      res?.status === 200 && setItems(res.data);
      setLoading(false);
    };
    fetchItems(); // Call the async function

    console.log(`items`, items);
  },[]);
  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
           
           <CarouselNewItems items={items} loading={loading}></CarouselNewItems>
            
        </div>
      </div>
    </section>
  );
};

export default NewItems;
