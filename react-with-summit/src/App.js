import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Input from './components/Input';

const App = () => {
  const [times, setTimes] = useState(new Date())
  const [isStop, setIsStop] = useState(false)

  const inputRef = useRef(null)
  const timeRef = useRef(new Date())

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    timeRef.current = setInterval(() => setTimes(new Date()), 1000)

    return () => {
      clearInterval(timeRef.current)
    }
  }, [])
  return (
    <div>
      {!isStop && <h5>{times.toLocaleTimeString()}</h5>}
      <button onClick={() => clearInterval(timeRef.current)}>Stop Clock</button>
      <form >
        <Input ref={inputRef} type="text" />
      </form>
    </div>
  )
}

export default App;
