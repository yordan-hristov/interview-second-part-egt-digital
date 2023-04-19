import { Spin } from "antd";

import { useSelector } from "hooks/use-redux";

function LoadingProvider() {
  const isLoadingPosts = useSelector((state) => state.posts.isLoading);
  const isLoadingUsers = useSelector((state) => state.users.isLoading);

  const isLoading = isLoadingPosts || isLoadingUsers;

  return (
    <div>
      {isLoading && (
        <Spin
          style={{
            position: "fixed",
            top: "50%",
            right: "50%",
            zIndex: 999999,
          }}
          size="large"
        />
      )}
    </div>
  );
}

export default LoadingProvider;
