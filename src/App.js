import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Nav from "./components/Nav.jsx";
import Posts from "./pages/Posts.jsx";
import Post from "./pages/Post.jsx";
import UseRefExample from "./hooks/UseRefExample.jsx";
import UseReducerExample from "./hooks/UseReducerExample.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
      <Nav />
      <UseRefExample />
      <UseReducerExample />
    </Router>
  );
}

export default App;
