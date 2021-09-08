import React from "react";
import logo from "../../assets/logo.png";

export default function Modal(props) {
  const contentComponent = () => {
    if (props.for === "Login") {
      return (
        <div>
          <div className="text-center text-xs">
            <span className="mr-2">Don't Have an Account?</span>
            <a href="" className="text-primary">
              Register Now
            </a>
          </div>
          <div class="modal-action">
            <label for={props.for} class="btn btn-primary">
              Accept
            </label>
            <label for={props.for} class="btn">
              Close
            </label>
          </div>
          <form action="">
            <input type="email" />
            <input type="password" />
          </form>
        </div>
      );
    }
  };
  function handleClassButton() {
    if (props.for === "Register") {
      return "btn-secondary";
    } else if (props.for === "Login") {
      return "btn-ghost mr-6";
    }
  }

  return (
    <div>
      <label
        for={props.for}
        className={`btn ${handleClassButton()} py-2 px-4 text-xs border-full modal-button`}
      >
        {props.for}
      </label>
      <input type="checkbox" id={props.for} className="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <div className="flex self-center justify-center items-center mb-4">
            <h1 className="font-black text-xl mr-2">Hi Guys, Welcome to</h1>
            <img src={logo} alt="" />
          </div>
          {contentComponent()}
        </div>
      </div>
    </div>
  );
}
