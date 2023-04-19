import { message } from "antd";
import { useSelector } from "hooks/use-redux";
import { useEffect } from "react";

function NotificationsProvider() {
  const usersNotification = useSelector((state) => state.users.notification);
  const postsNotification = useSelector((state) => state.posts.notification);
  const [msg, context] = message.useMessage();

  useEffect(() => {
    if (usersNotification) {
      const { type, value } = usersNotification;

      msg[type](value);
    }
  }, [usersNotification, msg]);

  useEffect(() => {
    if (postsNotification) {
      const { type, value } = postsNotification;

      msg[type](value);
    }
  }, [postsNotification, msg]);

  return <div>{context}</div>;
}

export default NotificationsProvider;
