import React from "react";
import iconCS from "../../assets/icon_navigasi/call_center.svg";
import iconAppointment from "../../assets/icon_navigasi/appointment.svg";
import iconOP from "../../assets/icon_navigasi/icon_op.svg";
import iconSales from "../../assets/icon_navigasi/sales.svg";

import "./style.css";

const ButtonChat = () => {
  return (
    <>
      <section>
        <div className="fab-wrapper">
          <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
          <label className="fabButton" htmlFor="fabCheckbox">
            <span className="fab-dots fab-dots-1" />
            <span className="fab-dots fab-dots-2" />
            <span className="fab-dots fab-dots-3" />
          </label>
          <div className="fab-wheel">
            <a className="fab-action fab-action-1" data-tooltip="Email">
              <img src={iconCS} />
            </a>
            <a
              href="https://bintangsempurna.co.id/appointment/"
              className="fab-action fab-action-2"
              data-tooltip="appointment"
            >
              <img src={iconAppointment} />
            </a>
            <a
              href="https://onlineprint.co.id/"
              className="fab-action fab-action-3"
              data-tooltip="onlineprint.co.id"
            >
              <img src={iconOP} />
            </a>
            <a className="fab-action fab-action-4" data-tooltip="Sales">
              <img src={iconSales} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ButtonChat;
