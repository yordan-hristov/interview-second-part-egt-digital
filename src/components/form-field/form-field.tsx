import { Form, Input, Typography } from "antd";

import type FormFieldProps from "./form-field.props";

function FormField({
  label,
  name,
  validationRules,
  textarea = false,
}: FormFieldProps) {
  return (
    <Form.Item
      rules={validationRules}
      required
      label={<Typography.Text strong>{label}</Typography.Text>}
      name={name}
    >
      {textarea ? <Input.TextArea autoSize /> : <Input />}
    </Form.Item>
  );
}

export default FormField;
