import { BrowserRouter as Router } from "react-router-dom";
import ReactDom from "react-dom";
import { App } from "./components";

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
