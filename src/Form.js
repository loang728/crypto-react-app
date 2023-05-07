import './Form.css';
import { useState } from 'react';

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function containsNumbers(str) {
  return /\d/.test(str);
}

function hasLowerCase(str) {
  return (/[a-z]/.test(str));
}

function hasUpperCase(str) {
  return (/[A-Z]/.test(str));
}

function containsSpecialChars(str) {
  const specialChars =
    /[!@#$^&*()_+\-\[\]\\|,.\/?]/;
  return specialChars.test(str);
}

/* Checks if authentication detais are ready to be submited in order to enable button continue */

function proceed(email, pass) {
  return (isValidEmail(email) && containsSpecialChars(pass) && hasUpperCase(pass) && hasLowerCase(pass) && containsNumbers(pass));
}

const Form = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [go, setGo] = useState(false);
  const [success, setSuccess] = useState(false);
  
/*Creates criteria items list */

  const CriteriaList = () => {
    return (<ul className="password-criteria">
      <CriteriaItem ok={(password.length > 5 && password.length < 10)} errType="size" text="Use 5 - 10 characters" />
      <CriteriaItem ok={containsNumbers(password)} errType="number" text="Use 1 or more numbers" />
      <CriteriaItem ok={hasLowerCase(password)} errType="number" text="Use 1 or more English lower case letters" />
      <CriteriaItem ok={hasUpperCase(password)} errType="number" text="Use 1 or more English upper case letters" />
      <CriteriaItem ok={containsSpecialChars(password)} errType="number" text="Use 1 or more special characters (#[]()@$&amp;*!?|,.^/\+_-)s" />
    </ul>
    )
  }

  /*Checks if password matches a criteria */

  const CriteriaItem = (props) => {
    let type = "";
    (password.length > 0) ? (props.ok) ? type = "good" : type = "bad" : type = "";
    return (<li className={type} id={props.errType}>{props.text}</li>)

  }

  /* sets success state , to clean email and pass and display sucess message on next render */
  const confirmSuccesss = (e) => {
    setSuccess(true);
    e.preventDefault();
    setUsername("");  
    setPassword("");  
  }

  return (
    <>
      <div class="form-revamp__wrapper">
        <form id="basic_profile">
          <label for="email">Email</label>
          <input className="form-control"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="email"
            type="email"
            required />

          { /* Checks if username is a valid email adress */
            (username.length > 0) ? (isValidEmail(username)) ? "Valid Email" : <div id="emailerr" className="error red">
              Please enter a valid email address</div> :  null}
          <label for="password">Password</label>
          <div className="input-group">
            <input className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              id="password" name="password" type="password" required />
          </div>
          <CriteriaList />
        <button className={proceed(username, password) ? "btn" : "btn disabled"} id="btnsubmit" type="submit" disabled={!proceed(username, password)} onClick={confirmSuccesss}>Continue</button>
        </form>
        <p class="note">Don’t have an account? <a class="highlight underline">Create one here</a> and register for the event</p>
        <p class="tc" >Terms and Conditions apply<span class="highlight">*</span>. To read the full T&Cs, <a class="highlight underline">click here</a>.</p>
        <div class={success ? "success show" : "success"}>
          <div class="confirm"><span class="ok">.</span>Registration Successful</div>
          <p class="sm">Thank you for registering for our event with XM. You will receive an email shortly with confirmation of your registration.</p>
        </div>
      </div>
  </>
  );
}

export default Form;
