/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Menu = ({
  logo = "https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/logo-2@2x.png",
  frame = "https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/frame-5-1.svg",
}) => {
  return (
    <div className="menu">
      <div className="frame">
        <img className="logo" alt="Logo" src={logo} />
        <img className="img" alt="Frame" src={frame} />
      </div>
      <div className="div">
        <div className="frame-2">
          <div className="group">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
          </div>
          <div className="SHOP">SHOP</div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper">SHIPPING &amp; RETURNS</div>
          <div className="text-wrapper">CONTACT US</div>
          <div className="text-wrapper">BLOG</div>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  logo: PropTypes.string,
  frame: PropTypes.string,
};
