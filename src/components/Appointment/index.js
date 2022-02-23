import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header.js";
import Empty from "components/Appointment/Empty.js";
import Show from "components/Appointment/Show.js";
import Confirm from "components/Appointment/Confirm.js"
import Status from "components/Appointment/Status.js"
import Error from "components/Appointment/Error.js"



export default function Appointment(props) {
  return (
    <article className="appointment"></article>
  );
};