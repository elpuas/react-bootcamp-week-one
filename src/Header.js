import React from "react";
import "./styles.css";

const e = React.createElement("header", null, [
  React.createElement("h2", { className: "logo" }, "El Puas"),
  React.createElement("ul", { className: "menu" }, [
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
  ])
]);

const Header = () => <div>{e}</div>;

export default Header;
