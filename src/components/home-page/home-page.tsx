import { useEffect } from "react";
import { Collapse, Spin, Typography } from "antd";

import { usersApi } from "store/users";
import { useDispatch, useSelector } from "hooks/use-redux";
import EditUser from "components/edit-user";

function HomePage() {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersApi.getUsers());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Spin
        style={{ position: "absolute", top: "50%", right: "50%" }}
        size="large"
      />
    );
  }

  if (error) {
    return (
      <Typography.Text strong type="danger">
        {error}
      </Typography.Text>
    );
  }

  return (
    <Collapse>
      {users.map((user) => (
        <Collapse.Panel key={user.id} header={`${user.name} (${user.email})`}>
          <EditUser user={user} />
        </Collapse.Panel>
      ))}
    </Collapse>
  );
}

export default HomePage;
