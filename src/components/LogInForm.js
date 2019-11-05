import React from "react";

export default function LogInForm(props) {
  return (
    <div>
      <p>Please login to continue evaluate the students</p>
      <form onSubmit={props.onSubmit}>
        <label>E-mail:</label>
        <input
          type="text"
          name="email"
          onChange={props.onChange}
          value={props.value.email}
          placeholder="enter email"
          
        ></input>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={props.onChange}
          value={props.value.password}
          placeholder="enter password"
        ></input>
        <input type="submit" className="btn btn-primary"></input>
      </form>
    </div>
  );
}
