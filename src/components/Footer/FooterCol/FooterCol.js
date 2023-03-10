import React from "react";
import { Link } from "react-router-dom";

const FooterCol = (props) => {
  return (
    <div className="col-md-3 ">
      <h6
        style={{
          color: "#e8b2a3",
          fontFamily: `"Hind Siliguri", sans-serif`,
          fontWeight: "800",
          fontSize: "22px",
        }}
      >
        {props.title ? props.title : " "}
      </h6>
      <ul className="list-unstyled">
        {props.items.map((item) => (
          <li>
            <Link
              to={item.link}
              style={{
                textDecoration: "none",
                color: "#26235d",
                fontWeight: "600",
                fontFamily: `"Hind Siliguri", sans-serif`,
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {props.children}
    </div>
  );
};

export default FooterCol;
