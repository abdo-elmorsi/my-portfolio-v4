import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Abdelrahman" },
  { meta: "last name", metaInfo: "Elmorsy" },
  { meta: "Age", metaInfo: "22 Years" },
  { meta: "Nationality", metaInfo: "Egyptian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Egypt" },
  { meta: "phone", metaInfo: "201019084872" },
  { meta: "Email", metaInfo: "abdelrahmandiv@gmail.com" },
  { meta: "languages", metaInfo: "Arabic, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.meta !== "Email" ? val.metaInfo : <a className="text-white text-decoration-none" href="mailto:abdelrahmandiv@gmail.com?subject=Hey">{val.metaInfo}</a>}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
