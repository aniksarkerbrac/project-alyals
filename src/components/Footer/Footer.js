import React from "react";
import FooterCol from "./FooterCol/FooterCol";
import img1 from "./Fb Icon.svg";
import img2 from "./Twitter Icon.svg";
import img3 from "./YT Icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(fab);

const Footer = () => {
  const details = [];
  const address = [];
  const company = [
    { name: "About Us", link: "/aboutUs" },
    { name: "Our Team", link: "/team" },
    { name: "Blog", link: "/blog" },
    { name: "Service", link: "/service" },
    { name: "Legal Notice", link: "/legalNotice" },
  ];
  const support = [
    { name: "Help Center", link: "/help" },
    { name: "FAQ", link: "/faq" },
    { name: "Ticket Support", link: "/ticket" },
    { name: "My Account", link: "/myAccount" },
    { name: "Contact Us", link: "/contactUs" },
  ];

  const icon = {
    color: "pink",
  };
  return (
    <footer className="mb-0">
      <div className="container pt-5">
        <hr className="mt-4" style={{ color: "#e8b2a3" }} />
        <div className="row pt-5">
          <FooterCol title="" items={details}>
            <div>
              <h4 className="footer-name">Alyals</h4>
              <p className="footer-name-desc">
                Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum
                dolor ipsum dolor
              </p>
            </div>
          </FooterCol>
          <FooterCol
            className="footer-subname"
            title="Company"
            items={company}
          ></FooterCol>
          <FooterCol
            className="footer-subname"
            title="Support"
            items={support}
          ></FooterCol>
          <FooterCol
            className="footer-subname"
            title="Our office"
            items={address}
          >
            <p className="footer-para">
              <FontAwesomeIcon style={icon} icon={faMapMarkerAlt} /> House-27,
              Road-3/B, Sector-08, Uttara, Dhaka-1230
            </p>
            <p className="footer-para">
              <FontAwesomeIcon style={icon} icon={faEnvelope} />{" "}
              hello@alyals.com
            </p>
            <p className="footer-para">
              <FontAwesomeIcon style={icon} icon={faPhoneSquareAlt} />{" "}
              +8801779966880
            </p>
          </FooterCol>
          <hr className="mt-4" style={{ color: "#e8b2a3" }} />
          <div className="d-flex justify-content-between ">
            <div>
              <img src={img1} alt="" height="25" width="25" className="icons" />
              <img src={img2} alt="" height="25" width="25" className="icons" />
              <img src={img3} alt="" height="25" width="25" className="icons"/>
            </div>
            <p className="copyright">
              Copyright {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
