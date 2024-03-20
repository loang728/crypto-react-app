import './Register.css';

const EventElement = (props) => {
  return (
    <li>
      <span className={props.cssClass}>.</span>
      <p>{props.text}</p>
    </li>
  );
}

function Register() {
  return (
      <div className="register-here__wrapper">
        <h2>- Register Here -</h2>
        <p className="join">Join us to celebrate our biggest night of the year.</p>
        <ul className="event-details">
          <EventElement cssClass="date" text="05 NOVEMBER 2022" />
          <EventElement cssClass="hour" text="05 NOVEMBER 2022" />
          <EventElement cssClass="place" text="05 NOVEMBER 2022" />
        </ul>
      </div>
  );
}

export default Register;

import './Register.css';

const EventElement = (props) => {
  return (
    <li>
      <span className={props.cssClass}>.</span>
      <p>{props.text}</p>
    </li>
  );
}

function Register() {
  return (
      <div className="register-here__wrapper">
        <h2>- Register Here -</h2>
        <p className="join">Join us to celebrate our biggest night of the year.</p>
        <ul className="event-details">
          <EventElement cssClass="date" text="05 NOVEMBER 2022" />
          <EventElement cssClass="hour" text="05 NOVEMBER 2022" />
          <EventElement cssClass="place" text="05 NOVEMBER 2022" />
        </ul>
      </div>
  );
}

export default Register;
