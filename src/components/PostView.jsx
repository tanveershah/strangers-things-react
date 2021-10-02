import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BASE_URL, getUser } from "../api";

const PostView = ({ posts, title, setTitle, description, setDescription, price, setPrice }) => {
  const { postId } = useParams();
  const post = posts.find((post) => post._id === postId);
  const history=useHistory()
  const [user, setUser]=useState({})

  useEffect(async()=>{
const {data} = await getUser(BASE_URL)
setUser(data)
  },[])

  return (
    <>

      {post && post.author._id !== user._id? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <h4>{post.location}</h4>
          <h4>{post.price}</h4>
          <h4>
            {post.willDeliver ? "Willing to deliver" : "Not willing to Deliver"}
          </h4>
          <form id='message'
          onSubmit={async event=>{
              event.preventDefault()
              try {
                  const {data}= await sendMessage(post._id, content)
              } catch (error) {
                  
              }
          }}
          >

          </form>
        </div>
      ) : null}
    </>
  );
};

export default PostView;
