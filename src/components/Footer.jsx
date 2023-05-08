import React from "react";

import "../styles/components/footer.scss";

const Item = ({ link, icon }) => {
  return (
    <li>
      <a href={link} target="_black">
        <ion-icon name={icon}></ion-icon>
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer>
      <ul>
        <Item link="https://linkedin.com/in/jeisson-alexander" icon="logo-linkedin" />

        <Item link="https://instagram.com/amarokdev/" icon="logo-instagram" />

        <Item link="https://alexander206.github.io/" icon="globe-outline" />
      </ul>
    </footer>
  );
};

export default Footer;
