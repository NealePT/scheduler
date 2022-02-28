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

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE"
const SAVING = "SAVING"
const DELETING = "DELETING"
const CONFIRM = "CONFIRM"


export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
  props.interview ? SHOW : EMPTY
);

  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id, interview)
    .then(res => {
      transition(SHOW);
    })
    .catch(err => console.log(err))
  }

  function deleteInt() {
    if (mode === CONFIRM) {
      transition(DELETING)
      props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
    } else {
      transition(CONFIRM);
    }
  }

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
          onDelete={deleteInt}
        />
      )}
      {mode === CREATE && (
        <Form 
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === SAVING && (
        <Status message="Saving" />
      )}
      {mode === DELETING && (
        <Status message="Deleting" />
      )}
      {mode === CONFIRM && (
        <Confirm 
          onCancel={back}
          onConfirm={deleteInt}
          message="Are you sure you would like to delete?"
        />
      )}
    </article>
  );
};
