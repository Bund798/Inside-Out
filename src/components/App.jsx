
import React,{useState} from "react";
//import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from "./Login";
import Home from "./Home";


function App() {
   
  const [token, setToken] = useState();
  if(!token) {
    return <Login  setToken={setToken} />
  }else
   return <Home />
    
}  

export default App;
