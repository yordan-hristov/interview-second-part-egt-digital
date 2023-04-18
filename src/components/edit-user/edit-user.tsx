import { Button, Col, Form, Input, Row, Space, Typography } from "antd";

import { useSelector } from "hooks/use-redux";
import Label from "components/label";

import type EditUserProps from "./edit-user.props";

function EditUser({ uid }: EditUserProps) {
  const user = useSelector(
    (state) => state.users.users.find((u) => u.id === uid)!
  );

  const formInitialValues = {
    ...user,
    companyName: user.company.name,
    companyCatchPhrase: user.company.catchPhrase,
    companyBs: user.company.bs,
    addressCity: user.address.city,
    addressStreet: user.address.street,
    addressSuite: user.address.suite,
    addressZipCode: user.address.zipcode,
    addressLongitude: user.address.geo.lng,
    addressLatitude: user.address.geo.lat,
  };

  const onFinish = (values: typeof formInitialValues) => {
    console.log(values);
  };

  return (
    <Form
      layout="vertical"
      initialValues={formInitialValues}
      onFinish={onFinish}
    >
      <Row gutter={32}>
        {/* User Details */}
        <Col span={8}>
          <Typography.Title level={3}>Details</Typography.Title>

          <Form.Item label={<Label text="Name" />} name="name">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Username" />} name="username">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Email" />} name="email">
            <Input />
          </Form.Item>

          <Form.Item label={<Label text="Phone Number" />} name="phone">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Website" />} name="website">
            <Input />
          </Form.Item>
        </Col>

        {/*  User Address */}
        <Col span={8}>
          <Typography.Title level={3}>Address</Typography.Title>

          <Form.Item label={<Label text="City" />} name="addressCity">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Street" />} name="addressStreet">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Suite" />} name="addressSuite">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="ZIP Code" />} name="addressZipCode">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Latitude" />} name="addressLatitude">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Longitude" />} name="addressLongitude">
            <Input />
          </Form.Item>
        </Col>

        {/* User Company */}
        <Col span={8}>
          <Typography.Title level={3}>Company</Typography.Title>

          <Form.Item label={<Label text="City" />} name="addressCity">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Street" />} name="addressStreet">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Suite" />} name="addressSuite">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="ZIP Code" />} name="addressZipCode">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Latitude" />} name="addressLatitude">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Longitude" />} name="addressLongitude">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      {/* Buttons */}
      <Space size="middle">
        <Button size="large" type="primary" htmlType="submit">
          Save
        </Button>

        <Button size="large" danger>
          Cancel
        </Button>
      </Space>
    </Form>
  );
}

export default EditUser;
