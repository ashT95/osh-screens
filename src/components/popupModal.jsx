import React, { Component, useState } from "react";
import Modal from "react-bootstrap/Modal";
import sessionCheck from "./assets/bg-session-check.png";
import sessionCheckButton from "./assets/button-session-check.svg";

export default function PopupModal(props) {
  const { id, handleYesClick, setShowModal } = props;

  return (
    <div>
      <Modal
        {...props}
        dialogClassName="popup-dialog"
        contentClassName="popup-content"
        aria-labelledby="contained-modal-title-vcenter"
        autoFocus="true"
      >
        <Modal.Body>
          <button className="popupYes" onClick={() => handleYesClick()}>
            <img
              src={sessionCheckButton}
              id="sessioncheck-btn"
              alt="sessionCheckButton"
            />
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
