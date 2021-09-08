import React, { Component } from "react";
import logo from "../../assets/logo.png";
import MenuButton from "./MenuButton";
import Modal from "../Modal/Modal";

export default class index extends Component {
  render() {
    return (
      <div>
        <nav className="navbar mb-2 text-dark mx-auto w-5/6 py-8">
          <div className="flex-none px-2 mr-8">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="items-stretch hidden lg:flex">
              <MenuButton />
            </div>
          </div>
          <div className="flex-none">
            <Modal for="Login" />
          </div>
          <div className="flex-none">
            <Modal for="Register" />
          </div>
        </nav>
      </div>
    );
  }
}
