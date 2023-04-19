import { Button, Form, Space } from "antd";

import { useDispatch, useSelector } from "hooks/use-redux";

import type EditPostProps from "./edit-post.props";
import FormField from "components/form-field";

function EditPost({ postId }: EditPostProps) {
  const dispatch = useDispatch();
  const post = useSelector(
    (state) => state.posts.posts.find((p) => p.id === postId)!
  );
  const [form] = Form.useForm();

  const handleResetFields = () => {
    form.resetFields();
  };

  const onFinish = async () => {};

  return (
    <Form
      layout="vertical"
      initialValues={post}
      form={form}
      onFinish={onFinish}
    >
      <FormField label="Title" name="title" />
      <FormField label="Body" name="body" textarea />

      {/* Buttons */}
      <Space size="middle">
        <Button size="large" type="primary" htmlType="submit">
          Save
        </Button>

        <Button size="large" danger onClick={handleResetFields}>
          Cancel
        </Button>
      </Space>
    </Form>
  );
}

export default EditPost;
