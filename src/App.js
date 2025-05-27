
import './App.css';
import { useState } from 'react';

function App() {

  // let name="Wai Yan Hein";

  let [name,setName]=useState('Wai Yan Hein');

  let changename=()=>{
    // name="Aung AUng";
    setName('Aung Aung Tun');
    console.log(name);
  }

  return (
    <div className='app'>
      <h1>Hello {name}</h1>
      <button onClick={changename}>change name</button>
        
    </div>
  );
}

export default App;
