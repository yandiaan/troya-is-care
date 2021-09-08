import React from "react";
import { menuItem } from "./menuItem";
import { NavLink } from "react-router-dom";

export default function MenuButton() {
  return (
    <div className="tabs">
      {menuItem.map((item) => {
        return (
          <p>
            <NavLink
              className="tab px-1 mr-8 text-black hover:text-primary"
              activeClassName=" tab-active font-bold text-primary"
              exact
              to={item.url}
            >
              {item.name}
            </NavLink>
          </p>
        );
      })}
    </div>
  );
}
