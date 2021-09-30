import React, { useCallback, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import Title from './components/Title';

const App = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const increamentOne = useCallback(() => {
    setCounter1((prevCount) => prevCount + 1)
  }, [])

  const increamentFive = useCallback(() => {
    setCounter2((prevCount) => prevCount + 5)
  }, [])
  console.log("App is rendering");
  return (
    <div>
      <Title counterName="Counter 1" />
      <Counter counterName="Counter 1" value={counter1} />
      <Button counterName="1" handleClick={increamentOne}>Increament 1</Button>
      <hr />

      <Title counterName="Counter 2" />
      <Counter counterName="Counter 2" value={counter2} />
      <Button counterName="5" handleClick={increamentFive}>Increament 1</Button>
    </div>
  )
}

export default App;
