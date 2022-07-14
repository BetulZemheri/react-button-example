import React, {useState} from 'react'
import './App.css';

function App() {
  const [deger, setDeger] = useState(0);

  const Azalt = () => {
    setDeger(deger - 1);
  }

  return (
    <div className="App">
      <button onClick={() => {setDeger(deger + 1)}}>INCREASE</button>
      <p> {deger} </p>
      <button onClick={Azalt}>DECREASE</button>
    </div>
  );
}

export default App;
