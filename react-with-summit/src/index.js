

import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const states = [];

let stateIndex = -1;

const useState = (defaultValue) => {
  const index = ++stateIndex;

  if (states[index]) return states[index]

  const setValue = (newValue) => {
    states[index][0] = newValue;
    customRenderer()
  }

  const returnArray = [defaultValue, setValue];
  states[index] = returnArray;
  return returnArray;
}
const App = () => {
  const [text, setText] = useState('ar')
  const [warning, setWarning] = useState('aa');

  const handleChange = (e) => {
    setText(e.target.value)
    if (e.target.value.indexOf('.js') !== -1) {
      setWarning(<b style={{ color: "red" }}>This is warning</b>)
    } else {
      setWarning(<b style={{ color: "green" }}>Good job!</b>)
    }
  }
  return (
    <div>
      <input
        onChange={handleChange}
        placeholder="Please type here"
        type="text" />
      {warning}
      <hr />
      <b>Your typed text is:</b><br />
      {text}
    </div>
  );
};
const customRenderer = () => {
  stateIndex = -1;
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
customRenderer()
// reportWebVitals();
