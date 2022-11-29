import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import SafeRoad from "./modal/SafeRoad";
import EnglishStu from "./modal/EnglishStu";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }



  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>ALL</Tab>
        <Tab>REACT JS</Tab>
        <Tab>Next JS</Tab>
      </TabList>

      <div className="portfolio-tab-content">
        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* start safe-road */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalOne}>
                <img src="img/projects/project-1-1.jpg" alt="SafeRoad" />
                <div className="hover-content-wrapper">
                  <span className="content-title">safe-road</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
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
            {/* end safe-road */}
            {/* start ENGLISH-STU */}

            <li
              data-aos="fade-right"
              data-aos-duration="1400"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwo}>
                <img src="img/projects/project-2-1.jpg" alt="ENGLISH-STU" />
                <div className="hover-content-wrapper">
                  <span className="content-title">ENGLISH-STU</span>
                </div>
              </figure>
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
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
            </li>
            {/* end ENGLISH-STU */}

          </ul>
        </TabPanel>
        {/* End All Project */}

        <TabPanel>
          <ul className="row grid justify-content-center">

          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">

          </ul>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Portfolio;
