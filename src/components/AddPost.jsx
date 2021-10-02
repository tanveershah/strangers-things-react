import React from "react";
import { BASE_URL } from "../api";
import "./Posts.css";
import { addPost } from "../api";
import { useHistory } from "react-router-dom";

const AddPost = ({
  posts,
  setPosts,
  title,
  setTitle,
  description,
  setDescription,
  price,
  setPrice,
}) => {
  const history = useHistory();

  return (
    <div className="posts">
      <form
        id="add-post-form"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const { data } = await addPost(BASE_URL, title, description, price);
            setPosts([...posts, data.post]);
          } catch (error) {
            console.error(error.message);
          } finally {
            history.push("/");
          }
        }}
      >
        <fieldset>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={title}
            placeholder="post title"
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            value={description}
            placeholder="post description"
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            value={price}
            placeholder="item price"
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </fieldset>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPost;
