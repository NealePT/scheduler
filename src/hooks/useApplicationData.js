import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  })

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      console.log(all)
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  }, [])

  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    

    const spotAdjuster = state.days.map((day) => {
      if (day.appointments.includes(id) && state.appointments[id].interview === null) {
        return { ...day, spots: day.spots -- };
      }
      return day;
    });

    return axios.put(`http://localhost:8001/api/appointments/${id}`, {interview:interview})
    .then(res => {
      setState({...state, appointments, spotAdjuster})
      return res
    })
  }  

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const spotAdjuster = state.days.map((day) => {
      if (day.appointments.includes(id)) {
        return { ...day, spots: day.spots ++ };
      }
      return day
    })

    return axios.delete(`http://localhost:8001/api/appointments/${id}`,)
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
}