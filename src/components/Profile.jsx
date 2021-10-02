import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = ({ post }) => {
    const [user, setUser]=useState({})
  return (
    <>
      <Link to={`/posts/${post._id}`}>
        <h2>{post.title}</h2>
      </Link>

      <p>{post.description}</p>
    </>
  );
};

export default Profile;
