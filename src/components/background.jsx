import React, { useState } from "react";
import reactDom from "react-dom";
import BGimg from "./assets/bg.jpg";
import IconDotLine from "./assets/icon-dot-line.png";
import "./background.css";
import backgroundText from "./assets/text-intro.svg";
import CustomButton from "./customButton";
import IconOne from "./assets/icon-01.svg";
import IconTwo from "./assets/icon-02.svg";
import IconThree from "./assets/icon-03.svg";
import IconFour from "./assets/icon-04.svg";
import IconFive from "./assets/icon-05.svg";
import IconSix from "./assets/icon-06.svg";
import IconSeven from "./assets/icon-07.svg";
import IconEight from "./assets/icon-08.svg";
import IconNine from "./assets/icon-09.svg";
import Button from "react-bootstrap/Button";
import startButton from "./assets/button-start.svg";
import startHere from "./assets/start-here.png";
import CustomModal from "./customModal";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import UseTimer from "./useTimer";

const buttons = [
  { id: "num1", img: IconOne, mod: 1 },
  { id: "num2", img: IconTwo, mod: 2 },
  { id: "num3", img: IconThree, mod: 3 },
  { id: "num4", img: IconFour, mod: 4 },
  { id: "num5", img: IconFive, mod: 5 },
  { id: "num6", img: IconSix, mod: 6 },
  { id: "num7", img: IconSeven, mod: 7 },
  { id: "num8", img: IconEight, mod: 8 },
  { id: "num9", img: IconNine, mod: 9 },
];

export default function Background() {
  const [active, setActive] = useState(null);
  const [startpage, setStartPage] = useState(false);
  const [alreadyClicked, setAlreadyClicked] = useState([]);

  const timer = UseTimer(30);
  var temp = alreadyClicked;
  temp.push(active);

  //console.log(active);
  useEffect(() => {
    if (timer > 0) {
      setAlreadyClicked(temp);
    }
    if (timer === 0) {
      setAlreadyClicked([]);
      setActive(null);
    }
  }, [timer]);

  function start() {
    timer !== 0 && setActive(null);
  }

  function handlePrev() {
    {
      active !== null && setActive("num" + (active.replace("num", "") - 1));
    }
  }

  function handleNext() {
    {
      active !== null &&
        timer !== 0 &&
        setActive("num" + (active.replace("num", "") - 1 + 2));
    }
  }

  function handleBack() {
    setActive(null);
  }

  return (
    <div className="HomePage">
      <div className="Background">
        <img src={backgroundText} id="backText" />

        <Button
          className="start-btn"
          onClick={start}
          style={{ display: timer !== 0 ? "none" : "block" }}
        >
          <img src={startButton} />
        </Button>

        {timer !== 0 && (
          <div>
            <img src={IconDotLine} id="IconSetup" />
            <img src={startHere} id="startHereImage" />

            {active !== null && <h1> {console.log()} </h1>}

            <div className="button-div">
              {buttons.map((button) => (
                <CustomButton
                  id={button.id}
                  img={button.img}
                  active={active === button.id ? true : false}
                  setActive={(id) => setActive(id)}
                  seen={alreadyClicked}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="modal-div">
        <CustomModal
          id={active}
          show={active !== 0 ? true : false}
          handlePrevClick={handlePrev}
          handleNextClick={handleNext}
          handleBack={handleBack}
        />
      </div>
    </div>
  );
}