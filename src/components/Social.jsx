import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/profile.php?id=100011155869257",
  },
  { iconName: "fa fa-github", link: "https://github.com/Abdo2711-coder" },
  { iconName: "fa fa-linkedin", link: "https://www.linkedin.com/in/abdelrahman-elmorsy-163263205/" }
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
