import { Col, Form, Row, Typography } from "antd";

import FormField from "components/form-field";
import FormButtons from "components/form-buttons/form-buttons";
import useForm from "hooks/use-form";
import { useDispatch, useSelector } from "hooks/use-redux";
import { formDataToUserObject, userObjectToFormData } from "utils/users/users";
import { usersApi } from "store/users";

import type EditUserProps from "./edit-user.props";

function EditUser({ uid }: EditUserProps) {
  const dispatch = useDispatch();
  const user = useSelector(
    (state) => state.users.users.find((u) => u.id === uid)!
  );
  const initialFormValues = userObjectToFormData(user);

  const {
    form,
    buttonsDisabled,
    handleResetFields,
    handleValuesChange,
    setDirtyFields,
  } = useForm(initialFormValues);

  const onFinish = async (values: typeof initialFormValues) => {
    const updatedUser = formDataToUserObject({ ...values, id: uid });

    dispatch(usersApi.updateUser(updatedUser));

    setDirtyFields([]);
  };

  return (
    <Form
      layout="vertical"
      initialValues={initialFormValues}
      form={form}
      onFinish={onFinish}
      onValuesChange={handleValuesChange}
    >
      <Row gutter={32}>
        {/* User Details */}
        <Col span={8}>
          <Typography.Title level={3}>Details</Typography.Title>

          <FormField label="Name" name="name" />
          <FormField
            label="Username"
            name="username"
            rules={[{ required: true, min: 3 }]}
          />
          <FormField
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          />
          <FormField label="Phone Number" name="phone" />
          <FormField label="Website" name="website" />
        </Col>

        {/* User Address */}
        <Col span={8}>
          <Typography.Title level={3}>Address</Typography.Title>

          <FormField
            label="City"
            name="addressCity"
            rules={[
              { required: true },
              { pattern: /^[A-Za-z\s\-']+$/gm, message: "Invalid city name" },
            ]}
          />
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
      <FormButtons
        disabled={buttonsDisabled}
        handleResetFields={handleResetFields}
      />
    </Form>
  );
}

export default EditUser;
