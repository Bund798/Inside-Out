
import React,{useState} from "react";
//import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from "./Login";
import Home from "./Home";


function App() {
   
  const [token, setToken] = useState(true);
  if(!token) {
    return <Login  setToken={setToken} />
  }
   return <div className="wrapper">
      <h1>Inside-Out</h1>
      <Home />
    {/* <BrowserRouter>
  

        <Routes>
          <Route path="/home">
            <Home />
          </Route>
          </Routes>
          
          
       
      </BrowserRouter>  */}
    </div>
 
}  

export default App;
