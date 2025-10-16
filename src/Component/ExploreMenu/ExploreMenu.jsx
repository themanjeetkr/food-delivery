import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import Home from "../../Pages/Home/Home";

const ExploreMenu = ({ category, setcategory }) => {
  return (
    <div className="explore-menu">
      <h1>Explore Our menu</h1>
      <p className="explor-menu-text">
        Choose from a diverse menu featuring delectable array of dishes . our
        mission is to{" "}
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setcategory((prev) =>
                  prev === item.menu_name ? "ALL" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
