import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Header, Footer, Posts, Register, Search, PostView } from ".";
import { getPosts, BASE_URL } from "../api";
import "./App.css";
import Login from "./Login";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await getPosts(BASE_URL);
      setPosts(data.posts);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    const filteredPosts = posts.filter(
      (post) =>
        post.title.includes(searchTerm) || post.description.includes(searchTerm)
    );
    setFilteredPosts(filteredPosts);
  }, [searchTerm]);

  return (
    <div className="container">
      <Header isLoggedIn={isLoggedIn} setIsloggedIn={setIsLoggedIn} />
      <div className="main">
        <Switch>
          <Route exact path="/">
            <div>
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Posts
                posts={posts}
                filteredPosts={filteredPosts}
                searchTerm={searchTerm}
              />
            </div>
          </Route>
          <Route exact path="/register">
            <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route exact path="/login">
            <Login setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route exact path="/posts/:postId">
            <PostView posts={posts} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
