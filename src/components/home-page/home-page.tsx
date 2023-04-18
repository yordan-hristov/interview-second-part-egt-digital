import { useEffect } from "react";
import { Button, Collapse, Divider, Spin, Typography } from "antd";

import { usersApi } from "store/users";
import { useDispatch, useSelector } from "hooks/use-redux";
import EditUser from "components/edit-user";
import { Link } from "react-router-dom";

function HomePage() {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersApi.getUsers());
  }, [dispatch]);

  return (
    <div>
      <Typography.Title level={1}>Users:</Typography.Title>

      {isLoading && (
        <Spin
          style={{ position: "absolute", top: "50%", right: "50%" }}
          size="large"
        />
      )}

      {error && (
        <Typography.Text strong type="danger">
          {error}
        </Typography.Text>
      )}

      {!isLoading && users && users.length <= 0 && (
        <Typography.Text strong type="danger">
          There are currently no users
        </Typography.Text>
      )}

      {users && users.length > 0 && (
        <Collapse>
          {users.map((user) => (
            <Collapse.Panel
              key={user.id}
              header={`${user.name} (${user.email})`}
            >
              <EditUser uid={user.id} />

              <Divider />

              <Link to={`posts?uid=${user.id}`}>
                <Button size="large" type="default">
                  See Posts
                </Button>
              </Link>
            </Collapse.Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
}

export default HomePage;
