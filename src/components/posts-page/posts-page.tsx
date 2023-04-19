import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Collapse, Divider, Popconfirm, Typography } from "antd";

import EditUser from "components/edit-user";
import EditPost from "components/edit-post";
import { useDispatch, useSelector } from "hooks/use-redux";
import { postsApi } from "store/posts";

function PostsPage() {
  const { uid } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (uid) {
      dispatch(postsApi.getPosts(uid));
    }
  }, [dispatch, uid]);

  const createDeletePostHandler = (postId: number) => () => {
    dispatch(postsApi.deletePost(postId));
  };

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

              <Divider />

              <Popconfirm
                title="Post Delete"
                description="Are you sure to delete this post?"
                okText="Yes"
                okType="danger"
                okButtonProps={{ type: "primary" }}
                cancelText="No"
                onConfirm={createDeletePostHandler(post.id)}
              >
                <Button size="large" danger type="primary">
                  Delete
                </Button>
              </Popconfirm>
            </Collapse.Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
}

export default PostsPage;
