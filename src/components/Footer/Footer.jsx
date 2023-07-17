/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconFacebook1 } from "../../icons/IconFacebook1";
import { IconInstagram1 } from "../../icons/IconInstagram1";
import { IconLinkedin1 } from "../../icons/IconLinkedin1";
import { IconTwitter } from "../../icons/IconTwitter";
import { Button } from "../Button";
import "./style.css";

export const Footer = ({
  property1,
  className,
  cardClassName,
  columnClassName,
  column = "https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/column.svg",
  linksGroupClassName,
  linkSixClassName,
  linkSevenClassName,
  linkEightClassName,
  linkNineClassName,
  linksGroupClassNameOverride,
  footerLinksClassName,
  linkOneClassName,
  linkTwoClassName,
  linkThreeClassName,
  creditsClassName,
  icon = <IconLinkedin1 className="instance-node-2" />,
}) => {
  return (
    <div className={`footer ${className}`}>
      <div className={`card ${cardClassName}`}>
        <div className="links">
          <img
            className={`column ${columnClassName}`}
            alt="Column"
            src={
              property1 === "variant-2"
                ? "https://generation-sessions.s3.amazonaws.com/76dbea50bd3623b5bb67cfc4f7f6ce06/img/column-2.svg"
                : column
            }
          />
          <div className="frame-11">
            <div className="column-2">
              <div className={`links-group ${linksGroupClassName}`}>Links Group 2</div>
              <div className="footer-links">
                <div className="div-wrapper">
                  <div className={`text-wrapper-6 ${linkSixClassName}`}>Link Six</div>
                </div>
                <div className="div-wrapper">
                  <div className={`text-wrapper-6 ${linkSevenClassName}`}>Link Seven</div>
                </div>
                <div className="div-wrapper">
                  <div className={`text-wrapper-6 ${linkEightClassName}`}>Link Eight</div>
                </div>
                <div className="div-wrapper">
                  <div className={`text-wrapper-6 ${linkNineClassName}`}>Link Nine</div>
                </div>
              </div>
            </div>
            <div className="column-3">
              <div className={`links-group ${linksGroupClassNameOverride}`}>Links Group 1</div>
              <div className={`footer-links-2 ${footerLinksClassName}`}>
                <div className="div-wrapper">
                  <div className={`text-wrapper-6 ${linkOneClassName}`}>Link One</div>
                </div>
                <div className="div-wrapper">
                  <div className={`text-wrapper-6 ${linkTwoClassName}`}>Link Two</div>
                </div>
                <div className="div-wrapper">
                  <div className={`text-wrapper-6 ${linkThreeClassName}`}>Link Three</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newslatter">
          <div className="div-2">
            <div className="subscribe">Subscribe</div>
            <p className="join-our-newsletter">Join our newsletter to stay up to date on features and releases.</p>
          </div>
          <div className="div-2">
            <div className="form">
              <div className="enter-your-email-wrapper">
                <div className="enter-your-email">Enter your email</div>
              </div>
              <Button
                blue={false}
                className="button-4"
                iconPosition="no-icon"
                small={false}
                style="primary"
                text="Subscribe!"
              />
            </div>
            <p className="by-subscribing-you">
              <span className="span">By subscribing you agree to with our </span>
              <span className="text-wrapper-7">Privacy Policy</span>
              <span className="span"> and provide consent to receive updates from our company.</span>
            </p>
          </div>
        </div>
      </div>
      <div className={`credits ${creditsClassName}`}>
        <div className="row">
          <div className="credits-2">
            <p className="element-eclips-USA-all">2023 Eclips USA. All right reserved.</p>
            <div className="footer-links-3">
              <div className="text-wrapper-8">Privacy Policy</div>
              <div className="text-wrapper-8">Terms of Service</div>
              <div className="text-wrapper-8">Cookies Settings</div>
            </div>
          </div>
          <div className="social-links">
            <IconFacebook1 className="instance-node-2" />
            <IconInstagram1 className="instance-node-2" />
            <IconTwitter className="instance-node-2" />
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  column: PropTypes.string,
};
