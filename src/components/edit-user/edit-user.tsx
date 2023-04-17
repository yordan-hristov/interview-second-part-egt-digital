import { Button, Col, Form, Input, Row, Space, Typography } from "antd";

import Label from "components/label";

import type EditUserProps from "./edit-user.props";

function EditUser({ user }: EditUserProps) {
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

  return (
    <Form initialValues={formInitialValues} layout="vertical">
      {/* User Details */}
      <Typography.Title level={3}>Details</Typography.Title>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label={<Label text="Name" />} name="name">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Username" />} name="username">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Email" />} name="email">
            <Input />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label={<Label text="Phone Number" />} name="phone">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Website" />} name="website">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      {/* User Company Details */}
      <Typography.Title level={3}>Company</Typography.Title>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label={<Label text="Name" />} name="companyName">
            <Input />
          </Form.Item>

          <Form.Item
            label={<Label text="Business Services" />}
            name="companyBs"
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label={<Label text="Catch Phrase" />}
            name="companyCatchPhrase"
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      {/* User Address Details */}
      <Typography.Title level={3}>Address</Typography.Title>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label={<Label text="City" />} name="addressCity">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Street" />} name="addressStreet">
            <Input />
          </Form.Item>
          <Form.Item label={<Label text="Suite" />} name="addressSuite">
            <Input />
          </Form.Item>
        </Col>

        <Col span={6}>
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
        <Button size="large" danger>
          Cancel
        </Button>
        <Button size="large" type="primary">
          Save
        </Button>
      </Space>
    </Form>
  );
}

export default EditUser;
