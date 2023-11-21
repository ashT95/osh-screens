import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import prevButton from "./assets/button-prev.svg";
import nextButton from "./assets/button-next.svg";
import backButton from "./assets/button-back.svg";
import content01 from "./assets/image-content-01.jpg";
import content02 from "./assets/image-content-02.jpg";
import content03 from "./assets/image-content-03.jpg";
import content04 from "./assets/image-content-04.jpg";
import content05 from "./assets/image-content-05.jpg";
import content06 from "./assets/image-content-06.jpg";
import content07 from "./assets/image-content-07.jpg";
import content08 from "./assets/image-content-08.jpg";
import content09 from "./assets/image-content-09.jpg";
import IconOne from "./assets/icon-01.svg";
import IconTwo from "./assets/icon-02.svg";
import IconThree from "./assets/icon-03.svg";
import IconFour from "./assets/icon-04.svg";
import IconFive from "./assets/icon-05.svg";
import IconSix from "./assets/icon-06.svg";
import IconSeven from "./assets/icon-07.svg";
import IconEight from "./assets/icon-08.svg";
import IconNine from "./assets/icon-09.svg";
import contentLine from "./assets/line-contents.svg";
import lineTitle from "./assets/line-title.png";

const modals = [
	{ id: "001", img: content01, iconImg: IconOne },
	{ id: "002", img: content02, iconImg: IconTwo },
	{ id: "003", img: content03, iconImg: IconThree },
	{ id: "004", img: content04, iconImg: IconFour },
	{ id: "005", img: content05, iconImg: IconFive },
	{ id: "006", img: content06, iconImg: IconSix },
	{ id: "007", img: content07, iconImg: IconSeven },
	{ id: "008", img: content08, iconImg: IconEight },
	{ id: "009", img: content09, iconImg: IconNine },
];

export default function CustomModal(props) {
	const { id, handleNextClick, handlePrevClick, handleBack } = props;

	let content = require("./data.json");
	// let modalContent= Object.keys(content).filter(tempData => tempData === id)[0];

	//console.log(content[id].photoComment)

	return (
		<div>
			{id !== null && (
				<Modal
					{...props}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header>
						<h1> </h1>
						<Modal.Title id="contained-modal-title-vcenter">
							{" "}
							{content[id].title}{" "}
						</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<div className="modalID">
							<img
								src={modals[parseInt(id.replace("num", "")) - 1].img}
								id="custom-body"
								alt="contentImage"
							/>
						</div>

						<div className="modalIcon">
							<img
								src={modals[parseInt(id.replace("num", "")) - 1].iconImg}
								alt="iconImage"
							/>
						</div>

						<div className="photoCaption">
							{content[id].photoName}{" "}
							<span style={{ fontFamily: "CrimsonText-Italic" }}>
								{" "}
								{content[id].photoComment}{" "}
							</span>{" "}
							{content[id].photoYear}
						</div>

						<div className="content">
							<p> {content[id].content} </p>
						</div>

						<div className="contentLine">
							{content[id].quoteDutch !== "" && <img src={contentLine} />}
						</div>

						<div className="quoteDutch">
							<p> {content[id].quoteDutch} </p>
						</div>

						<div className="quoteEng">
							<p> {content[id].quoteEng} </p>
						</div>

						<div className="citation">
							<p>
								{" "}
								{content[id].citationName}{" "}
								<span style={{ fontFamily: "CrimsonText-Italic" }}>
									{" "}
									{content[id].citationBook}{" "}
								</span>{" "}
								{content[id].citationYear}{" "}
							</p>
						</div>

						<div className="lineTitle">
							<img src={lineTitle} />
						</div>
					</Modal.Body>

					<Modal.Footer>
					
						{parseInt(id.replace("num", "")) !== 1 && (
							<div>
								<div className="goPrev" onClick={() => handlePrevClick()}></div>
								<button className="prev" onClick={() => handlePrevClick()}>
									<img src={prevButton} alt="previousButton" />
								</button>
							</div>
						)}

						{parseInt(id.replace("num", "")) !== 9 && (
							<div>
								<div className="goNext" onClick={() => handleNextClick()}></div>
								<button className="next" onClick={() => handleNextClick()}>
									<img src={nextButton} alt="nextButton" />
								</button>
							</div>
						)}

						<button className="back" onClick={() => handleBack()}>
							<img src={backButton} alt="backButton" />
						</button>
					</Modal.Footer>
				</Modal>
			)}
		</div>
	);
}
