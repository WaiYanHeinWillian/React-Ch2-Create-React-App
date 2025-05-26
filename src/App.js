import logo from './logo.svg';
import QAImage from './assets/logo.jpg';
import './App.css';

function App() {

  let name="Wai Yan Hein";

  return (
    <div>
      <h1>Hello {name}</h1>

      {/* 1st way - public folder way */}
      {/* absolute path */}
      {/* <img src='http://localhost:3000/logo.jpg'></img> */}
      {/* relative path */}
      {/* <img src='/logo.jpg'></img> */}

      {/* 2nd import */}
      <img src={QAImage}></img>
    </div>
  );
}

export default App;
