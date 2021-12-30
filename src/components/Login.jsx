import React,{useState} from 'react';

 function Login() {
  const [userDetail,setUserDetail]=useState([
    {username:"",
  password:""}
  ]);


  return(
    <div class="form-wrapper">
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <label>
        <p> Confirm Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
    </div>
  )
}
export default Login;