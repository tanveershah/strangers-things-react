import React from "react";
import { SinglePost } from ".";
import "./Posts.css";

const AddPost = ({ posts }) => {
  return (
    <div className="posts">
      {filteredPosts.length && searchTerm
        ? filteredPosts.map((post) => (
            <div className="post" key={post._id}>
              <SinglePost post={post} />
            </div>
          ))
        : !filteredPosts.length && searchTerm
        ? null
        : posts.length
        ? posts.map((post) => (
            <div className="post" key={post._id}>
              <SinglePost post={post} />
            </div>
          ))
        : null}
    </div>
  );
};

export default AddPost;
