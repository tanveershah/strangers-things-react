import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BASE_URL, deletePost, editPost, getUser, sendMessage } from "../api";

const PostView = ({
  posts,
  setPosts,
  title,
  setTitle,
  description,
  setDescription,
  price,
  setPrice,
}) => {
  const { postId } = useParams();
  const post = posts.find((post) => post._id === postId);
  const history = useHistory();
  const [user, setUser] = useState({});
  const [content, setContent] = useState("");

  useEffect(async () => {
    try {
      const { data } = await getUser(BASE_URL);
      setUser(data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <>
      {post && post.author._id !== user._id ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <h4>{post.price}</h4>
          <h4>
            {post.willDeliver ? "Willing to deliver" : "Not willing to Deliver"}
          </h4>
          <form
            id="message"
            onSubmit={async (event) => {
              event.preventDefault();
              try {
                const { data } = await sendMessage(BASE_URL, post._id, content);
                setContent("");
              } catch (error) {
                console.error(error.message);
              }
            }}
          >
            <fieldset>
              <label htmlFor="message">Send a message to seller</label>
              <input
                id={post._id}
                type="text"
                value={content}
                onChange={(event) => {
                  setContent(event.target.value);
                }}
              />
            </fieldset>
            <button type="submit">Send</button>
          </form>
        </div>
      ) : post && post.author._id === user._id ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <h4>{post.price}</h4>
          <button
            onClick={async (event) => {
              event.preventDefault();
              const { data } = await deletePost(BASE_URL, postId);
              history.push("/");
            }}
          >
            Delete
          </button>
          <form
            id="edit"
            onSubmit={async (event) => {
              event.preventDefault();
              try {
                const { data } = await editPost(
                  BASE_URL,
                  title,
                  description,
                  price,
                  postId
                );
                setPosts([...posts, data.post]);
              } catch (error) {
                console.error(error.message);
              } finally {
                history.push("/profile");
              }
            }}
          >
            <fieldset>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                placeholder={post.title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="description">Description</label>
              <input
                id="description"
                type="text"
                value={description}
                placeholder={post.description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                value={price}
                placeholder={post.price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </fieldset>
            <button type="submit">Edit</button>
          </form>
        </>
      ) : (
        <>
          {post ? (
            <>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default PostView;
