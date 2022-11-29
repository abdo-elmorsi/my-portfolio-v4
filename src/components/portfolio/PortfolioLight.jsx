import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import DirectionReveal from "direction-reveal";
import SafeRoad from "./modal/SafeRoad";
import EnglishStu from "./modal/EnglishStu";

const PortfolioLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleModalOne = () => setIsOpen(!isOpen);
  const toggleModalTwo = () => setIsOpen2(!isOpen2);



  useEffect(() => {
    // Init with default setup
    DirectionReveal();

    // Init with all options at default setting
    DirectionReveal({
      selector: ".direction-reveal",
      itemSelector: ".direction-reveal__card",
      animationName: "slide",
      animationPostfixEnter: "enter",
      animationPostfixLeave: "leave",
      touchThreshold: 500,
    });
  }, []);

  return (
    <ul className="row grid">
      {/* Start SafeRoad */}

      <li className="direction-reveal">
        <figure className="direction-reveal__card" onClick={toggleModalOne}>
          <img src="img/projects/project-1-1.jpg" alt="SafeRoad" />
          <div className=" direction-reveal__overlay direction-reveal__anim--enter">
            <span className="direction-reveal__title">SAFE-ROAD</span>
          </div>
        </figure>

        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark green"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            <div className="box_inner portfolio">
              <SafeRoad />
            </div>
          </div>
        </Modal>
      </li>
      {/* End  SafeRoad */}

      {/* Start EnglishStu */}
      <li className="direction-reveal">
        <figure className="direction-reveal__card" onClick={toggleModalTwo}>
          <img src="img/projects/project-2-1.jpg" alt="ENGLISH-STU" />
          <div className=" direction-reveal__overlay direction-reveal__anim--enter">
            <span className="direction-reveal__title">ENGLISH-STU</span>
          </div>
        </figure>

        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModalTwo}
          contentLabel="My dialog"
          className="custom-modal dark green"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalTwo}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            <div className="box_inner portfolio">
              <EnglishStu />
            </div>
          </div>
        </Modal>
        {/* End  EnglishStu */}
      </li>

    </ul>
  );
};

export default PortfolioLight;
