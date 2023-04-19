import { Button, Col, Form, Row, Space, Typography } from "antd";

import FormField from "components/form-field";
import { useDispatch, useSelector } from "hooks/use-redux";
import { formDataToUserObject, userObjectToFormData } from "utils/users/users";
import { usersApi } from "store/users";

import type EditUserProps from "./edit-user.props";

function EditUser({ uid }: EditUserProps) {
  const dispatch = useDispatch();
  const user = useSelector(
    (state) => state.users.users.find((u) => u.id === uid)!
  );
  const [form] = Form.useForm();

  const initialFormValues = userObjectToFormData(user);

  const handleResetFields = () => {
    form.resetFields();
  };

  const onFinish = async (values: typeof initialFormValues) => {
    const updatedUser = formDataToUserObject({ ...values, id: uid });

    dispatch(usersApi.updateUser(updatedUser));
  };

  return (
    <Form
      layout="vertical"
      initialValues={initialFormValues}
      form={form}
      onFinish={onFinish}
    >
      <Row gutter={32}>
        {/* User Details */}
        <Col span={8}>
          <Typography.Title level={3}>Details</Typography.Title>

          <FormField label="Name" name="name" />
          <FormField label="Username" name="username" />
          <FormField label="Email" name="email" />
          <FormField label="Phone Number" name="phone" />
          <FormField label="Website" name="website" />
        </Col>

        {/* User Address */}
        <Col span={8}>
          <Typography.Title level={3}>Address</Typography.Title>

          <FormField label="City" name="addressCity" />
          <FormField label="Street" name="addressStreet" />
          <FormField label="Suite" name="addressSuite" />
          <FormField label="ZIP Code" name="addressZipCode" />
          <FormField label="Latitude" name="addressLatitude" />
          <FormField label="Longitude" name="addressLongitude" />
        </Col>

        {/*  User Company */}
        <Col span={8}>
          <Typography.Title level={3}>Company</Typography.Title>

          <FormField label="Name" name="companyName" />
          <FormField label="Catch Phrase" name="companyCatchPhrase" />
          <FormField label="Business Services" name="companyBs" />
        </Col>
      </Row>

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

export default EditUser;
