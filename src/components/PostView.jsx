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
    const { data } = await getUser(BASE_URL);
    setUser(data);
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
      ) : post && post.author._id === user._id ? <>
      <h2>{post.title}</h2>
          <p>{post.description}</p>
          <h4>{post.price}</h4>
          <button onClick={event=>{
              event.preventDefault()
              deletePost(BASE_URL, postId)
              history.push('/')
          }}>Delete</button>
          <form id='edit'
          onSubmit={async event=>{
              event.preventDefault()
              try {
                  const {data}=await editPost(BASE_URL, title, description, price, postId)
                  setPosts([...posts, data.post])
              } catch (error) {
                  console.error(error.message)
              } finally {
                  history.push('/profile')
              }
          }}
          >

          </form>
      </>:null}
    </>
  );
};

export default PostView;
