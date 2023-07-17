/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CategoryButton = ({
  categoryName = "School Supplies",
  binder = "https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/binder-2-6@2x.png",
  group = "https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/group-10-6@2x.png",
  frame = "https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/frame-54-6.svg",
}) => {
  return (
    <div className="category-button">
      <div className="binder-wrapper">
        <img className="binder" alt="Binder" src={binder} />
      </div>
      <img className="group-2" alt="Group" src={group} />
      <div className="frame-wrapper">
        <div className="frame-4">
          <div className="school-supplies">{categoryName}</div>
          <img className="frame-5" alt="Frame" src={frame} />
        </div>
      </div>
    </div>
  );
};

CategoryButton.propTypes = {
  categoryName: PropTypes.string,
  binder: PropTypes.string,
  group: PropTypes.string,
  frame: PropTypes.string,
};
