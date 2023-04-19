import { Form } from "antd";

import { postsApi } from "store/posts";
import FormField from "components/form-field";
import FormButtons from "components/form-buttons/form-buttons";
import { useDispatch, useSelector } from "hooks/use-redux";
import useForm from "hooks/use-form";

import type EditPostProps from "./edit-post.props";

function EditPost({ postId }: EditPostProps) {
  const dispatch = useDispatch();
  const post = useSelector(
    (state) => state.posts.posts.find((p) => p.id === postId)!
  );

  const initialFormValues = {
    title: post.title,
    body: post.body,
  };

  const { form, isDirty, handleResetFields, handleValuesChange } =
    useForm(initialFormValues);

  const onFinish = async (values: typeof initialFormValues) => {
    const updatedPost = {
      ...values,
      id: post.id,
      userId: post.userId,
    };

    dispatch(postsApi.updatePost(updatedPost));
  };

  return (
    <Form
      layout="vertical"
      initialValues={initialFormValues}
      form={form}
      onFinish={onFinish}
      onValuesChange={handleValuesChange}
    >
      <FormField label="Title" name="title" />
      <FormField label="Body" name="body" textarea />

      {/* Buttons */}
      <FormButtons isDirty={isDirty} handleResetFields={handleResetFields} />
    </Form>
  );
}

export default EditPost;
