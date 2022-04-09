import logo from './logo.svg';
import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <form action="">
        <input className='inputField' type="text" placeholder='Enter Your Email'/>
        <input className='inputField' type="password" name="" id="" placeholder='Enter Your Password'/>
      </form>
    </div>
  );
}

export default App;
