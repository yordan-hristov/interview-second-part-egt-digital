import { Form, Input, Typography } from "antd";

import type FormFieldProps from "./form-field.props";

function FormField({ label, textarea = false, ...rest }: FormFieldProps) {
  return (
    <Form.Item
      required
      label={<Typography.Text strong>{label}</Typography.Text>}
      rules={[{ required: true }]}
      {...rest}
    >
      {textarea ? <Input.TextArea autoSize /> : <Input />}
    </Form.Item>
  );
}

export default FormField;
