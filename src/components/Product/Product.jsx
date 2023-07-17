/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Button } from "../Button";
import "./style.css";

export const Product = ({
  pointer,
  element = "https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/37597-18@2x.png",
  line = "https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-4-2.svg",
  img = "https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/line-5-2.svg",
  iconChevronRight = "https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/icon---chevron-right-2.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    pointer: pointer || "none",
  });

  return (
    <div
      className="product"
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <img className="element" alt="Element" src={element} />
      <div className="frame-6">
        <div className="eclips-wrapper">
          <div className="eclips">Eclips</div>
        </div>
        <div className={`frame-7 ${state.pointer}`}>
          <p className="crayola-chalk-white">Crayola Chalk | White | 12 Count</p>
          {state.pointer === "none" && (
            <Button
              blue
              buttonClassName="instance-node"
              className="button-instance"
              iconPosition="no-icon"
              small={false}
              style="primary"
              text="4.99$"
            />
          )}

          {state.pointer === "hover" && (
            <div className="frame-8">
              <div className="frame-9">
                <div className="text-input">
                  <div className="element-2">44</div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                      <div className="frame-10">
                        <div className="element-3">−</div>
                        <div className="element-4">+</div>
                      </div>
                      <img className="line" alt="Line" src={line} />
                      <img className="line-2" alt="Line" src={img} />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-5">MCQ: 44</div>
              </div>
              <div className="frame-9">
                <div className="button-2">
                  <div className="button-3">4.99$</div>
                  <img className="icon-chevron-right-2" alt="Icon chevron right" src={iconChevronRight} />
                </div>
                <div className="text-wrapper-5">Case Price: 0.56$</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        pointer: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        pointer: "none",
      };
  }

  return state;
}

Product.propTypes = {
  pointer: PropTypes.oneOf(["none", "hover"]),
  element: PropTypes.string,
  line: PropTypes.string,
  img: PropTypes.string,
  iconChevronRight: PropTypes.string,
};
