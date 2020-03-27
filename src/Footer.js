import React from "react";
import "./styles.css";

const l = React.createElement("footer", null, [
  React.createElement("ul", { className: "menu-footer" }, [
    React.createElement(
      "li",
      null,
      React.createElement("a", { className: "menu-link", href: "/" }, "Home")
    ),
    React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { className: "menu-link", href: "https:elpuas.com" },
        "Blog"
      )
    )
  ]),
  React.createElement("h2", { className: "logo" }, "Follow Me")
]);

const Footer = () => <div>{l}</div>;

export default Footer;
