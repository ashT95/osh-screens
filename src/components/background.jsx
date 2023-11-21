import React, { useState, useEffect } from "react";
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
import startButton from "./assets/button-start.svg";
import startHere from "./assets/start-here.png";
import CustomModal from "./customModal";
import UseTimer from "./useTimer";
import Fade from "react-reveal/Fade";
import creditImg from "./assets/credit-IMLS.svg";
import glow from "./assets/icon-bg-start-here.webm";
import PopupModal from "./popupModal";

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
	const [showModal, setShowModal] = useState(true);

	let content = require("./data.json");

	const timer = UseTimer(content.resetTimer);
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
			setStartPage(false);
		}
	}, [timer]);

	function start() {
		setActive(null);
		setStartPage(true);
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

	function handleYes() {
		setShowModal(false);
	}

	return (
		<div className="HomePage">
			<div className="Background" onClick={!startpage ? start : null}>
				<img
					src={backgroundText}
					alt="backgroundText"
					style={{ display: active !== null ? "none" : "block" }}
					id={timer !== 0 && startpage ? "homeBackText" : "startBackText"}
				/>

				<button
					className="start-btn"
					onClick={start}
					style={{ display: timer !== 0 && startpage ? "none" : "block" }}
				>
					<img src={startButton} alt="startButton" />
				</button>

				{timer !== 0 && startpage && (
					<div>
						<img src={IconDotLine} id="IconSetup" alt="IconBackgroundDotLine" />
						<img src={startHere} id="startHereImage" alt="startHereImage" />
						<img src={active !== null ? null : creditImg} id="creditImg" />

						<div className="button-div">
							<div
								className="iconGlow"
								style={{
									display: !(
										alreadyClicked.includes("num1") ||
										alreadyClicked.includes("num2") ||
										alreadyClicked.includes("num3") ||
										alreadyClicked.includes("num4") ||
										alreadyClicked.includes("num5") ||
										alreadyClicked.includes("num6") ||
										alreadyClicked.includes("num7") ||
										alreadyClicked.includes("num8") ||
										alreadyClicked.includes("num9")
									)
										? "block"
										: "none",
								}}
							>
								<Fade duration={1000} delay={2700}>
									<video autoPlay="true" loop="true">
										<source src={glow} type="video/webm" />
									</video>
								</Fade>
							</div>

							{buttons.map((button) => (
								<CustomButton
									id={button.id}
									img={button.img}
									mod={button.mod}
									active={active === button.id ? true : false}
									setActive={(id) => setActive(id)}
									seen={alreadyClicked}
									isModalOpen={active !== null ? true : false}
								/>
							))}
						</div>
					</div>
				)}
			</div>
			<div className="popup-div">
				<PopupModal
					id={active}
					show={
						startpage &&
						active !== null &&
						timer <= content.popupTimer &&
						setShowModal
							? true
							: false
					}
					setShowModal={setShowModal}
					handleYesClick={handleYes}
				/>
			</div>

			<div className="modal-div">
				<CustomModal
					id={active}
					show={active !== 0 ? true : false}
					handlePrevClick={handlePrev}
					handleNextClick={handleNext}
					handleBack={handleBack}
					style={{ zIndex: timer <= content.popupTimer ? "1" : null }}
				/>
			</div>
		</div>
	);
}
