// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem/index'

import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    titleInput: '',
    dateInput: '',
    isStarredActive: false,
  }

  onTitleInputChange = event => {
    const inputTitleValue = event.target.value
    this.setState({titleInput: inputTitleValue})
  }

  onDateInputChange = event => {
    const inputTitleValue = event.target.value
    this.setState({dateInput: inputTitleValue})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const newAppointment = {
      id: uuidv4(),
      title: titleInput,
      date: dateInput,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  onClickStarBtn = () => {
    this.setState(prevState => ({
      isStarredActive: !prevState.isStarredActive,
      //   appointmentsList: prevState.appointmentsList.filter(
      //     eachAppointment => eachAppointment.isStarred === true,
      //   )
    }))
  }

  onClickStartIcon = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  render() {
    const {
      appointmentsList,
      titleInput,
      dateInput,
      isStarredActive,
    } = this.state
    const btnClass = isStarredActive ? 'active-star-button' : 'star-button'
    const starredAppointments = appointmentsList.filter(
      eachAppointment => eachAppointment.isStarred === true,
    )
    const appointments = isStarredActive
      ? starredAppointments
      : appointmentsList
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="add-section">
            <form className="form" onSubmit={this.onClickAddButton}>
              <h1 className="app-heading">Add Appointment</h1>
              <label htmlFor="title" className="title">
                TITLE
              </label>
              <input
                type="text"
                className="title-input"
                id="title"
                placeholder="Title"
                onChange={this.onTitleInputChange}
                value={titleInput}
              />
              <label htmlFor="date" className="title">
                DATE
              </label>
              <input
                type="date"
                className="title-input"
                id="date"
                placeholder="Title"
                onChange={this.onDateInputChange}
                value={dateInput}
              />
              <button type="submit" className="submit-btn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr className="line" />
          <div className="appointments-section">
            <div className="btn-container">
              <h1 className="section-heading">Appointments</h1>
              <button
                className={btnClass}
                type="button"
                onClick={this.onClickStarBtn}
              >
                Starred
              </button>
            </div>
            <ul className="appointment-container">
              {appointments.map(eachAppointment => (
                <AppointmentItem
                  key={eachAppointment.id}
                  list={eachAppointment}
                  onClickStartIcon={this.onClickStartIcon}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
