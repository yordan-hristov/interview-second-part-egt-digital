import { Routes, Route } from "react-router";
import { Layout } from "antd";

import HomePage from "components/home-page";
import PostsPage from "components/posts-page";
import LayoutMenu from "components/layout-menu";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider>
        <LayoutMenu />
      </Layout.Sider>
      <Layout.Content style={{ padding: "0 16px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:uid/posts" element={<PostsPage />} />
        </Routes>
      </Layout.Content>
    </Layout>
  );
}

export default App;
