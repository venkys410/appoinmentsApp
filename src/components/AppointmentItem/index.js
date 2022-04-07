// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {list, onClickStartIcon} = props
  const {id, title, date, isStarred} = list

  const changeStatus = () => {
    onClickStartIcon(id)
  }

  const formatedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const starUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="appointment-item">
      <div className="item-deatils-container">
        <div className="title-button-container">
          <p className="title-heading">{title}</p>
          <button
            type="button"
            className="starred-button"
            testid="star"
            onClick={changeStatus}
          >
            <img src={starUrl} alt="star" className="star-icon" />
          </button>
        </div>
        <p className="date-para">{formatedDate}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
