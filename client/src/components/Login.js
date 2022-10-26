import React, { useState } from "react";
import {Link} from 'react-router-dom';


// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   
//   render() {
//     
//   }
// }




function Login() {

  const[user, setUser] = useState(null)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  const handleSubmit = (e) => {
        e.preventDefault();
        // const { email, password } = user;
        // console.log(email, password);
        fetch("http://localhost:5000/login-user", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if (data.status === "ok") {
              alert("login successful");
              window.localStorage.setItem("token", data.data);
              window.location.href = "./userDetails";
            }
          });
      }


  return (
          <div className="h-100 d-flex flex-column justify-content-center align-items-center ">    
            <h1 className="mb-2">Log in as</h1>
          <div className="d-flex flex-row">
            <button className="btn btn-primary mx-2" onClick={() => setUser("doctor")}>Doctor</button>
            <button className="btn btn-primary mx-2" onClick={() => setUser("nurse")}>Nurse</button>
            <button className="btn btn-primary mx-2" onClick={() => setUser("admin")}>Admin</button>
          </div>

          {user && (
          <form onSubmit={handleSubmit} className='w-45 mx-auto bg-light p-4 mt-4' >
            <h3>Sign in as {user}</h3>
    
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
    
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid">
    
              <Link to = {`/${user}`} className="btn btn-primary">Sign In</Link>
            </div>
          </form>
          )}
          </div>
        );
}

export default Login
