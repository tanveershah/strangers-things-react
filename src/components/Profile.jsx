import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SinglePost } from ".";
import { BASE_URL, getUser } from "../api";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(async () => {
    const { data } = await getUser(BASE_URL);
    setUser(data);
  }, []);

  const { posts, messages, username } = user;

  return (
    <>
      <h1>Welcome {username}</h1>
      <h2>Your Posts:</h2>
      {posts && posts.length
        ? posts.map((post) => <SinglePost post={post} />)
        : null}

      <h2>Your Messages:</h2>
      {messages && messages.length
        ? messages.map((message) => (
            <div key={message._id}>
              <h3>From: {message.fromUser.username}</h3>
              <h4>{message.post.title}</h4>
              <p>{message.content}</p>
            </div>
          ))
        : null}
    </>
  );
};

export default Profile;
