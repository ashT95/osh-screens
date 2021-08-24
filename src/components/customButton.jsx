import React, { useState } from "react";
import reactDom from "react-dom";
import "./background.css";
import Checkmark from "./assets/icon-check-mark.svg";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";


export default function CustomButton(props) {
  const { id, img, active, setActive, seen, mod, isModalOpen} = props;
  const [alreadyClicked, setAlreadyClicked] = useState(false);


  

  function handleClick() {
    setActive(id);
    setAlreadyClicked(true);
  }

  function cancelClick() {
    //setAlreadyClicked(true);
    setActive(id);
  }


  return (
    

    <div class="customButton">



      <div>
        <Fade duration={1000} delay={mod * 300}>
          <button
            onClick={handleClick}
            onMouseLeave={cancelClick}
            id={id}
            img={img}
            className={
              active && id !== null
                ? "active"
                : alreadyClicked
                ? "alreadyClicked"
                : seen.includes(id)
                ? "seen"
                : !active && id !== null
                ? "notClicked"
                : "glow"
            }
          >
            
            <img src={img} alt="iconImage" />

    

            <div
              className="checkButton"
              style={{
                display:
                  seen.includes(id) && !active && !isModalOpen
                    ? "block"
                    : "none",
              }}
            >
              <Bounce duration={1000}>
                <img src={Checkmark} alt="iconChecked" />
              </Bounce>
            </div>
          </button>
        </Fade>
      </div>
    </div>
  );
}
