import { Button, Space } from "antd";

import type FormButtonsProps from "./form-buttons.props";

function FormButtons({ disabled, handleResetFields }: FormButtonsProps) {
  return (
    <Space size="middle">
      <Button disabled={disabled} size="large" type="primary" htmlType="submit">
        Save
      </Button>

      <Button
        disabled={disabled}
        size="large"
        danger
        onClick={handleResetFields}
      >
        Cancel
      </Button>
    </Space>
  );
}

export default FormButtons;
