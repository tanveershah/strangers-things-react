import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
  return (
    <>
      {post?<Link to={`/posts/${post._id}`}>
        <h2>{post.title}</h2>
      </Link>:null}

      <p>{post.description}</p>
    </>
  );
};

export default SinglePost;
