import React from "react";
import products from "../../data/products";
import "./ProductListPage.scss";

const MainContent = () => {
  const listItems = products.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.image} alt="" />
      </div>
      <div className="card_header">
        <h2>{item.title}</h2>
        <p className="price">
          <span>&#8377;</span>
          {item.price}
        </p>
        <div className="btn">Add to wishlist</div>
      </div>
    </div>
  ));
  return <div className="main_content">{listItems}</div>;
};
export default MainContent;
