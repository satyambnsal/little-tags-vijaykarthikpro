import React from "react";
import AppLogo from "../../assets/icons/logo-symbol.png";
import CrossIcon from "../../assets/icons/clear.svg";

export default function Dialog() {
  //   const handleModalClose = () => {
  //     handleModalOpen();
  //     setErrorMessage("");
  //   };

  return (
    <div className="outer">
      <div className="top-section">
        <div className="logo-item">
          <img src={AppLogo} alt="logo-img" />
          <span className="title">Style Beast</span>
        </div>
        <img
          src={CrossIcon}
          alt="cancel-icon"
          //   onClick={handleModalClose}
          className="close-modal"
        />
      </div>
    </div>
  );
}
