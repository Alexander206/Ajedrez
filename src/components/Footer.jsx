import React from "react";

import "../styles/components/footer.scss";

const Item = ({ link, icon }) => {
  return (
    <li>
      <a href={link}>
        <ion-icon name={icon}></ion-icon>
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer>
      <ul>
        <Item link="" icon="logo-linkedin" />

        <Item link="" icon="logo-instagram" />

        <Item link="" icon="globe-outline" />
      </ul>
    </footer>
  );
};

export default Footer;
