import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const handleDelete = (user) => {
    const agree = window.confirm(
      `are you sure you want to delete ${user.name} `
    );
    if (agree) {
      console.log("deleting user with", user._id);
    }
  };
  return (
    <div>
      <h1>home {users.length} </h1>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name}
            <br />
            {user.email} <button onClick={() => handleDelete(user)}>X</button>
          </p>
        ))}
      </div>
      <Link to="/user/add"> add users </Link>
    </div>
  );
};

export default Home;
