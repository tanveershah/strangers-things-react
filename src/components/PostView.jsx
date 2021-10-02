import React from "react";
import { useParams } from "react-router-dom";

const PostView = ({posts}) => {
    const {postId} = useParams()

const post = posts.find(post=>post._id===postId)
  return <>
    <h2>{post.title}</h2>
    <p>{post.description}</p>
    <h4>{post.location}</h4>
    <h4>{post.price}</h4>
    <h4>{post.willDeliver?'Willing to deliver':'Not willing to Deliver'}</h4>
  </>
};

export default PostView;
