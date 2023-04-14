import { useEffect, useState } from "react";
import { Collapse } from "antd";

import axios from "utils/axios";

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
      {users.map(({ id, name, email }) => (
        <Collapse.Panel key={id} header={`${name} (${email})`}>
          Lorem ipsum dolor sit amet.
        </Collapse.Panel>
      ))}
    </Collapse>
  );
}

export default HomePage;
