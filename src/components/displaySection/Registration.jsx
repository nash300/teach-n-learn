import React from "react";

const Registration = () => {
  return (
    <div>
      <form action="">
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Country</label>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label>Subject</label>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label>Discipline</label>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label>Platform</label>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <div>
          <label>I am a</label>
          <input type="checkbox" id="subscribe" name="subscribe" />
        </div>
        <label>About</label>
        <input type="text" />
      </form>
    </div>
  );
};

export default Registration;
