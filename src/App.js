import React, {useState,useEffect} from 'react'
import './App.css';
import Logo from './Logo';
import AuthHeader from './AuthHeader';
import Textfield from './Textfield';
import Dictionary, {dictionary} from './Dictionary';

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed:', value);
  }, [value])
}

function initialValue(intitalValue) {

  const [value, setValue] = useState(intitalValue)

  const onChange = () => {
    if (value === dictionary.actions.logIn) {
      setValue(dictionary.actions.signUp)
    } else {
      setValue(dictionary.actions.logIn)
    }
  }

  return {
    bind: {value, onChange},
    value,
    onChange
  }
}

function getButtonText(currentActionType) {
  if (currentActionType === dictionary.actions.logIn) {
      return "Don’t have an account? "
  } else {
      return "Already have an account? "
  }
}

function getOtherAction(currentActionType) {
  if (currentActionType === dictionary.actions.logIn) {
      return dictionary.actions.signUp
  } else {
      return dictionary.actions.logIn
  }
}

function actionButtonOnClick(currentAction) {
  if (currentAction = dictionary.actions.logIn) {

  } else if (currentAction = dictionary.actions.signUp) {

  }
}

function App() {

  const currentActionState = initialValue(dictionary.actions.logIn)

  useLogger(currentActionState.value)

  return (
    <div className="main">
      <div className="window">
        <Logo />
        <p className="headertext caption">{dictionary.propeties.projectName}</p>
        <AuthHeader currentAction={currentActionState.value} projectName ={dictionary.propeties.projectName} />
        <Textfield currentAction={currentActionState.value} type={dictionary.types.email} />
        <Textfield currentAction={currentActionState.value} type={dictionary.types.password}/>
        <button className="actionbutton" onClick={() => actionButtonOnClick(currentActionState.value)}>
          <p className="buttontext text">{currentActionState.value}</p>
        </button>
        <p className="text caption">{getButtonText(currentActionState.value)}
          <a  href="#"
              className="hyperlink"
              onClick={currentActionState.onChange}>
              {getOtherAction(currentActionState.value)}
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
