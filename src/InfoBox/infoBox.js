import React from "react";
import { alertVariants } from "./common";
import "./style.scss";

const InfoBox = ({ message = "", variant, title, renderMessage = null }) => {
  let alert = alertVariants;

  return (
    <div
      className="alert-status-info"
      style={{ backgroundColor: alert[variant].bgColor }}
    >
      <img
        src={require(`../assets/${alert[variant].icon}`)}
        alt={variant}
      />
      <div className="text" data-aid="kyc-alertbox-title">
        <div className="title">{title} - React</div>
        <div>{renderMessage ? renderMessage() : message}</div>
      </div>
    </div>
  );
};

export default InfoBox;
