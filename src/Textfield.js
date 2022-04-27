import Dictionary, {dictionary} from './Dictionary';

function Textfield({type, currentAction}) {

  let placeholdertext = ""

  if (type === dictionary.types.email) {
    placeholdertext = "Email adress"
  } else if (type === dictionary.types.password) {
    placeholdertext = "Password"
  } else {
    return
  }

  function getFogotPasswordLabel(type) {
      if (type === dictionary.types.password && currentAction === dictionary.actions.logIn) {
        return(
          <a href="#" className="forgotpassword label">Forgot password?</a>
        )
      } else {
        return
      }
    }

  return (
    <div className="textfield">
        <div className="labeldiv">
        <label className="label">{type.toUpperCase()}</label>
        {getFogotPasswordLabel(type)}
        </div>
        <input
          className={"textfildinput "+type}
          type="text"
          name={type}
          id={type}
          placeholder={placeholdertext}
        />
    </div>
  );
}

export default Textfield;
