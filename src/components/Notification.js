import React from "react";

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      You have already entered this letter!
    </div>
  );
};

export default Notification;
