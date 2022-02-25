import React from 'react';
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header.js";
import Empty from "components/Appointment/Empty.js";
import Show from "components/Appointment/Show.js";
import Confirm from "components/Appointment/Confirm.js";
import Status from "components/Appointment/Status.js";
import Error from "components/Appointment/Error.js";
import Form from "components/Appointment/Form";
import useVisualMode from 'hooks/useVisualMode';
import { eqProps } from 'ramda';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE"



export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
  props.interview ? SHOW : EMPTY
);

  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && (
        <Empty 
          onAdd={() => transition(CREATE)} 
        />
      )}
      {mode === SHOW && (
        <Show 
          student={props.interview.student} 
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form 
          interviewers={props.interviewers}
          onCancel={() => back()}
        />
      )}
    </article>
  );
};
