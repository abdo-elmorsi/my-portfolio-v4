import React from "react";
import Slider from "../Slider";

const EnglishStu = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>ENGLISH-STU</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">Website</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">Self Study</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Software </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, Javascript, ReactJs, NextJs</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://englishstu.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ENGLISH-STU
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <Slider
          src={[
            "project-2-1.jpg",
            "project-2-2.jpg",
            "project-2-3.jpg",
            "project-2-4.jpg",
            "project-2-5.jpg",
            "project-2-6.jpg",
            "project-2-7.jpg"
          ]}
        />

        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default EnglishStu;
