import React, { useState } from 'react';
import "./Login.scss";
import { useAuth } from "./Auth.js";
import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";


const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [isNewAccount, setNewAccount] = useState(true);
  const [isConPass, setIsConPass] = useState(false);
  // const history = useHistory();
  const auth = useAuth();
  console.log(auth);

  const onSubmit = data => {
    console.log(data.email, data.password);
    if (isNewAccount) {
      auth.signup(data.email, data.password)
        .then(res => {
          console.log('success', res);
          // history.push('/food-category');
        })
    }
    else {
      auth.signin(data.email, data.password)
        .then(res => {
          console.log('success', res);
        })
    }
  };

  const toggleSigninType = (e, type) => {
    e.preventDefault();
    setNewAccount(type);
  }

  const conPassHandle = () => {
    const password = document.getElementById("password").value;
    console.log(password);
    const conPassword = document.getElementById("conPassword").value;
    console.log(conPassword);
    if (password !== conPassword) {
      setIsConPass(true);
      return;
    } else {
      setIsConPass(false);
    }
  }


  return (
    <div className="ship">
      <div className="ship-form">
        {
          isNewAccount ?
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="pt-5 pb-2" style={{ color: "#000", paddingLeft: "101px" }}>Sign Up</h3>

              <input name="name" ref={register({ required: true })} placeholder="Name" />
              {errors.name && <span className="error">Name is required</span>}

              <input name="email" ref={register({ required: true })} placeholder="Email" />
              {errors.email && <span className="error">Email is required</span>}

              <input id="password" name="password" defaultValue="" ref={register({ required: true })} placeholder="Password" />
              {errors.password && <span id="passErr" className="error">Password is required</span>}

              <input id="conPassword" name="conPassword" defaultValue="" ref={register({ required: true })} placeholder="Confirm Password" />
              {errors.conPassword && <span className="error">Confirm Password is required</span>}
              {isConPass && <span id="conPassErr" className="error">Password Doesn't Match</span>}

              <input onClick={() => conPassHandle()} style={{ color: "#ffffff", backgroundColor: "#11d670", fontWeight: "500" }} type="submit" />
              <Link to="/login"
                className="text-secondary"
                onClick={(e) => toggleSigninType(e, false)}
                style={{ marginLeft: "35px", marginTop: "31px", color: "#f91944", fontWeight: "500", textDecoration: "none" }}>
                Already have an account? Log In
              </Link>
            </form>
            :
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="pt-5 pb-2" style={{ color: "#000", paddingLeft: "101px" }}>Log In</h3>

              <input name="email" ref={register({ required: true })} placeholder="Email" />
              {errors.email && <span className="error">Email is required</span>}

              <input name="password" ref={register({ required: true })} placeholder="Password" />
              {errors.password && <span className="error">Password is required</span>}

              <input style={{ color: "#ffffff", backgroundColor: "#11d670", fontWeight: "500" }} type="submit" />
              <a href=""
                className="text-secondary"
                onClick={(e) => toggleSigninType(e, true)}
                style={{ marginLeft: "35px", marginTop: "31px", fontWeight: "500", textDecoration: "none" }}>
                Don't have an account? Sign Up
              </a>
            </form>
        }
      </div>
    </div >
  );
};

export default Login;