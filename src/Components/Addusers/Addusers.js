import React, { useState } from "react";
import { Link } from "react-router-dom";

const Addusers = () => {
  const [user, setUser] = useState({
    name: "default",
    email: "default@gmail.com",
  });
  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("user added successfully");
          event.target.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h1>add user</h1>
      <form onSubmit={handleAddUser} action="">
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="name"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="address"
          placeholder="address"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          id=""
          placeholder="email"
        />
        <br />
        <button type="submit">Add User</button>
      </form>
      <Link to="/"> home </Link>
    </div>
  );
};

export default Addusers;
