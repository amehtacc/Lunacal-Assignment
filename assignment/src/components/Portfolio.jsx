import { useState } from "react";
import questionMark from "/public/images/question.png";
import rectangle from "/public/images/rectangle.png";

function Portfolio() {
  const [activeButton, setActiveButton] = useState(1);

  const buttonClicked = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div class="top-right">
      <div className="ques-rect">
        <img src={questionMark} alt="questionmark image" />
        <img src={rectangle} alt="group of square" />
      </div>
      <div className="tab-text">
        <div class="tab-container">
          <button
            className={`tab-button ${activeButton === 1 ? "active" : ""}`}
            onClick={() => buttonClicked(1)}
            style={{
              backgroundColor: activeButton === 1 ? "#28292F" : "transparent",
              color: activeButton === 1 ? "#ffffff" : "#A3ADB2",
            }}
          >
            About Me
          </button>
          <button
            className={`tab-button ${activeButton === 2 ? "active" : ""}`}
            onClick={() => buttonClicked(2)}
            style={{
              backgroundColor: activeButton === 2 ? "#28292F" : "transparent",
              color: activeButton === 2 ? "#ffffff" : "#A3ADB2",
            }}
          >
            Experiences
          </button>
          <button
            className={`tab-button ${activeButton === 3 ? "active" : ""}`}
            onClick={() => buttonClicked(3)}
            style={{
              backgroundColor: activeButton === 3 ? "#28292F" : "transparent",
              color: activeButton === 3 ? "#ffffff" : "#A3ADB2",
            }}
          >
            Recommended
          </button>
        </div>
        <div className="text-container">
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
            <br /> <br />I was born and raised in Albany, NY& have been living
            in Santa Carla for the past 10 years my wife Tiffany and my 4 year
            old twin daughters- Emma and Ella. Both of them are just starting
            school, so my calender is usually blocked between 9-10 AM. This is
            a...
          </p>
        </div>
      </div>
      <div className="vertical-rect"></div>
    </div>
  );
}

export default Portfolio;
