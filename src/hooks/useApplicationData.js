import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  // Default states
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  }, []);

  // Book Interview function
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    // Adjusts spot count on sidebar
    const spotAdjuster = state.days.map((day) => {
      if (day.appointments.includes(id) && state.appointments[id].interview === null) {
        return { ...day, spots: day.spots -- };
      }
      return day;
    });

    // Axios put request
    return axios.put(`http://localhost:8001/api/appointments/${id}`, {interview:interview})
    .then(res => {
      setState({...state, appointments, spotAdjuster})
      return res
    })
  }  

  // Cancel Interview function
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    // Adjusts spot count on sidebar
    const spotAdjuster = state.days.map((day) => {
      if (day.appointments.includes(id)) {
        return { ...day, spots: day.spots ++ };
      }
      return day
    })

    // Axios delete request
    return axios.delete(`http://localhost:8001/api/appointments/${id}`)
    .then(res => {
      setState({...state, appointments, spotAdjuster})
      return res
    })
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
};