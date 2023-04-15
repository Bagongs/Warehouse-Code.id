import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainContent, Navbar } from './components';


function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  
  const loginCbHandler = (result) => {
    setLoginStatus(result)
  }
  useState(() =>{
    if (localStorage.getItem('access_token')) {
      setLoginStatus(true)
    } else {
      setLoginStatus(false)
    }
  }, [loginStatus])
  return (
   <>
      <div className="container-fluid">
      <Navbar
          loginStatus={loginStatus}
          loginCbHandler={loginCbHandler}
        ></Navbar>
        <MainContent loginCbHandler={loginCbHandler}></MainContent>
      </div>
   </>
  );
}

export default App;
