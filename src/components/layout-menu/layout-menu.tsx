import { Menu } from "antd";
import { FileTextOutlined, UserOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router";

import { useSelector } from "hooks/use-redux";

import type { MenuInfo } from "rc-menu/lib/interface";

function LayoutMenu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);

  const generatedItems = users.map(({ id }) => ({
    label: `User ${id}`,
    key: `/users/${id}/posts`,
  }));

  const handleOnClick = ({ key }: MenuInfo) => {
    navigate(key);
  };

  return (
    <Menu
      style={{ position: "sticky", top: 0 }}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["/"]}
      selectedKeys={[pathname]}
      onClick={handleOnClick}
      items={[
        {
          label: "Users",
          key: "/",
          icon: <UserOutlined />,
        },
        {
          label: "Posts",
          key: "posts",
          icon: <FileTextOutlined />,
          children: generatedItems,
        },
      ]}
    />
  );
}

export default LayoutMenu;
