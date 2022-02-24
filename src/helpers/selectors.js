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
