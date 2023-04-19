import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Collapse, Typography } from "antd";

import EditUser from "components/edit-user";
import { useDispatch, useSelector } from "hooks/use-redux";
import { postsApi } from "store/posts";
import EditPost from "components/edit-post";

function PostsPage() {
  const { uid } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (uid) {
      dispatch(postsApi.getPosts(uid));
    }
  }, [dispatch, uid]);

  return (
    <div>
      <Typography.Title level={2}>User:</Typography.Title>

      {uid && <EditUser uid={+uid} />}

      <Typography.Title level={2}>Posts:</Typography.Title>

      {posts && (
        <Collapse>
          {posts.map((post) => (
            <Collapse.Panel key={post.id} header={post.title}>
              <EditPost postId={post.id} />
            </Collapse.Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
}

export default PostsPage;
