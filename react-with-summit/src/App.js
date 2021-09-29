import { useState } from 'react';
import './App.css';
import ThemeContext from './lib/ThemeContext';

const App = () => {
  const [myTheme, setMyTheme] = useState({ theme: "light" })
  return (
    <ThemeContext.Provider value={myTheme}>
      <div className="row">
        <div className="col-md-12 custom-print">
          Hello
        </div>
      </div>
      {/* <div className="App">
        <Counter>{(count, increament) => <ClickCounter count={count} increament={increament} />}</Counter>
        <Counter>{(count, increament) => <HoverCounter count={count} increament={increament} />}</Counter>
        <HoverCounter />
        <button onClick={() => setMyTheme({ theme: "dark" })}>change</button>
        <ThemeTester />
      </div> */}
    </ThemeContext.Provider>
  )
}

export default App;
