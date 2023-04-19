import { useEffect } from "react";
import { Modal } from "antd";

import { useSelector } from "hooks/use-redux";

function ErrorProvider() {
  const usersError = useSelector((state) => state.users.error);
  const postsError = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (usersError) {
      Modal.error({
        title: "Error",
        content: usersError.message,
        okButtonProps: { danger: true, type: "primary" },
      });
    }
  }, [usersError]);

  useEffect(() => {
    if (postsError) {
      Modal.error({
        title: "Error",
        content: postsError.message,
        okButtonProps: { danger: true, type: "primary" },
      });
    }
  }, [postsError]);

  return <div></div>;
}

export default ErrorProvider;
