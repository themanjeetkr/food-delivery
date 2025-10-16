import React, { useContext } from "react";
import "./FoodItem.css";
import { useState } from "react";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/Context";

const FoodItem = ({ id, name, price, description, image }) => {
  // const [Itemcount, setItemcount] = useState(0);
  // const [first, setfirst] = useState(second)
  const {
    cartItems,

    addTocart,
    removefromcart,
  } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addTocart(id)}
            src={assets.add_icon_white}
            alt="No items"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removefromcart(id)}
              src={assets.remove_icon_red}
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addTocart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>

        {/* <div className="food-item-description">{description}</div> */}
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
