export function getAppointmentsForDay(state, day) {
  let result = [];
  if (!state.days) {
    return result;
  }
  let appDay = state.days.filter(chosenDay => chosenDay.name === day)[0];
  if (!appDay) {
    return result;
  }
  for (const id of appDay.appointments) {
    const appObj = state.appointments[id];
    result.push(appObj);
  }
  return result
};


export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  }
};

export function getInterviewersForDay(state, day) {
  let result = [];
  let days = state.days;
  let interviewersOfDay;
  if (days.length < 1) {
    return result;
  }

  for (const selectedDay of days) {
    if (selectedDay.name === day) {
      interviewersOfDay = selectedDay.interviewers;
    }
  }
  if (!interviewersOfDay) {
    return result;
  }
  for (const id of interviewersOfDay) {
    let interviewer = state.interviewers[id];
    result.push(interviewer);
  }
  return result
};