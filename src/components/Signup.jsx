import axios from "axios";
import React, { useReducer } from "react";

const initState = {
  name: "",
  email: "",
  password: "",
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NAME": {
      return { ...state, name: payload };
    }

    case "SET_EMAIL": {
      return { ...state, email: payload };
    }

    case "SET_PASSWORD": {
      return { ...state, password: payload };
    }

    case "RESET": {
      return initState;
    }
    default: {
      return initState;
    }
  }
};

const Signup = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const register = () => {
    axios
      .post(`https://lilac-boa-hem.cyclic.app/users/register`, state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handalSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    dispatch({ type: "RESET" });

    register();
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handalSubmit}>
        <label>Enter your Name</label>
        <br />
        <input
          value={state.name}
          type="text"
          placeholder="Enter Your Full Name"
          name="name"
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
        />
        <br />
        <label>Enter your Email</label>
        <br />
        <input
          value={state.email}
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
        />
        <br />
        <label>Enter your Password</label>
        <br />
        <input
          value={state.password}
          type="password"
          placeholder="Enter Your password"
          name="password"
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
        />
        <br />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Signup;
