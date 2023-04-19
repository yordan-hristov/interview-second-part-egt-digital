import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Collapse, Typography } from "antd";

import EditUser from "components/edit-user";
import axios from "utils/axios";

function PostsPage() {
  const { uid } = useParams();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(`/users/${uid}/posts`);

      setPosts(data);
    };

    getPosts();
  }, [uid]);

  return (
    <div>
      <Typography.Title level={2}>User:</Typography.Title>

      {uid && <EditUser uid={+uid} />}

      <Typography.Title level={2}>Posts:</Typography.Title>

      {posts && (
        <Collapse>
          {posts.map((post) => (
            <Collapse.Panel key={post.id} header={post.title}>
              {post.body}
            </Collapse.Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
}

export default PostsPage;
