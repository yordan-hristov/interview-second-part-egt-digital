import { Routes, Route } from "react-router";

import HomePage from "components/home-page";
import PostsPage from "components/posts-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users/:uid/posts" element={<PostsPage />} />
    </Routes>
  );
}

export default App;
