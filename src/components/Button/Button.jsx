/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconChevronRight15 } from "../../icons/IconChevronRight15";
import "./style.css";

export const Button = ({ style, small, blue, iconPosition, className, text = "Button", buttonClassName }) => {
  return (
    <div className={`button ${style} blue-${blue} ${iconPosition} small-${small} ${className}`}>
      {iconPosition === "no-icon" && <div className={`text-wrapper-2 ${buttonClassName}`}>{text}</div>}

      {iconPosition === "trailing" && <div className="text-wrapper-3">{text}</div>}

      {["leading", "trailing"].includes(iconPosition) && (
        <IconChevronRight15
          className="icon-chevron-right"
          color={
            style === "primary" ? "#100C08" : blue && ["link", "secondary"].includes(style) ? "#FFD800" : "#69ABFD"
          }
        />
      )}

      {iconPosition === "leading" && <div className="text-wrapper-4">{text}</div>}
    </div>
  );
};

Button.propTypes = {
  style: PropTypes.oneOf(["primary", "link", "secondary"]),
  small: PropTypes.bool,
  blue: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["no-icon", "trailing", "leading"]),
  text: PropTypes.string,
};
