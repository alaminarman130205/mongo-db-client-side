import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();
  return (
    <div>
      <h1>update {user.name}</h1>
    </div>
  );
};

export default Update;
