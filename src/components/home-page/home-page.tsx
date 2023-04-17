import { useEffect, useState } from "react";
import { Collapse } from "antd";

import axios from "utils/axios";
import EditUser from "components/edit-user";

import type User from "types/user";

function HomePage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get<User[]>("users");

      setUsers(data);
    };

    getUsers();
  }, []);

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
