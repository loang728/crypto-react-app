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


  //(#[]()@$&*!?|,.^/\+_-)
}
/*
function check(email, pass) {
  return (isValidEmail(email)&&containsSpecialChars(pass)&&hasUpperCase(pass)&&hasLowerCase(pass) &&containsNumbers(pass));
}
*/
const Form = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [go, setGo] = useState(false);

 
  
  const CriteriaItem = (props) => {
    var type = "";
    (password.length > 0) ? (props.ok) ? type = "good" : type = "bad" : type = "";
    return (<li className={type} id={props.errType}>{props.text}</li>)
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
          {(username.length > 0) ? (isValidEmail(username)) ? "yes" : <div id="emailerr" className="error red">Please enter a valid email address</div> : null}


          <label for="password">Password</label>
          <div className="input-group">
            <input className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              id="password" name="password" type="password" required />
          </div>
          <p>{password}</p>

          <ul className="password-criteria">
            <CriteriaItem ok={(password.length > 5)} errType="size" text="Use 10 - 15 characters" />
            <CriteriaItem ok={containsSpecialChars(password)} errType="number" text="Use 1 or more numbers" />
            <CriteriaItem ok={hasUpperCase(password)} errType="number" text="Use 1 or more English lower case letters" />
            <CriteriaItem ok={hasLowerCase(password)} errType="number" text="Use 1 or more English upper case letters" />
            <CriteriaItem ok={containsNumbers(password)} errType="number" text="Use 1 or more special characters (#[]()@$&amp;*!?|,.^/\+_-)s" />
          </ul>
          
          <button class={(go) ? "btn" : "btn disabled"} id="btnsubmit" type="submit">Continue</button>
        </form>
        <p class="note">Don’t have an account? <a class="highlight underline">Create one here</a> and register for the event</p>
        <p class="tc" >Terms and Conditions apply<span class="highlight">*</span>. To read the full T&Cs, <a class="highlight underline">click here</a>.</p>
      </div>

    </>
  );
}



export default Form;
