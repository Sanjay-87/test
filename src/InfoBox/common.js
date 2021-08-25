import React from "react";
import SuccessIcon from "../assets/success_icon.svg";
import ErrorIcon from "../assets/error_icon.svg";
import PendingIcon from "../assets/pending_icon.svg";
import InfoIcon from "../assets/info_icon.svg";

export const alertVariants = {
  danger: {
    bgColor: "#fff5f6",
    color: "#8C0E1E",
    icon: "error_icon.svg",
    icon_native: <ErrorIcon />,
  },
  success: {
    bgColor: "#f9fff1",
    color: "#4D890D",
    icon: "success_icon.svg",
    icon_native: <SuccessIcon />,
  },
  attention: {
    bgColor: "#fff5f6",
    color: "#B39712",
    icon: "attention_icon.svg",
    icon_native: <PendingIcon />,
  },
  info: {
    bgColor: "#E8E0FF",
    color: "#6650AB",
    icon: `info_icon.svg`,
    icon_native: <InfoIcon />,
  },
};
