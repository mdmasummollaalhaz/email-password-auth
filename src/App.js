import logo from './logo.svg';
import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app);

function App() {

  const handleEmailBlur = event =>{
    console.log(event.target.value);
  };

  const handlePasswordBlur = event =>{
    console.log(event.target.value);
  };

  const handleFormSubmit = event =>{
    console.log('Submited');
    event.preventDefault();
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleFormSubmit}>
        <input onBlur={handleEmailBlur} className='inputField' type="email" placeholder='Enter Your Email'/>
        <input onBlur={handlePasswordBlur} className='inputField' type="password" name="" id="" placeholder='Enter Your Password'/>
        <br />
        <input className='logIn' type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
