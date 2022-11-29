import React from "react";

const experienceContent = [
  {
    year: "2022 - Present",
    position: "Front End Developer",
    compnayName: "Infinity",
    details: `Infinity is an ERP system that supports the Arabic language for managing gold and jewelry stores. It supports the application of the first phase of issuing the electronic invoice...`,
  },
  {
    year: "2021 - 2022",
    position: "Front End Developer",
    compnayName: "StartUp Defenders",
    details: `startups solve some of the problems commonly associated with running a startup by providing...`,
  },
  {
    year: "2021 - 2021",
    position: "Front End Developer",
    compnayName: "Pepo Thech",
    details: ``,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
