import { Button, Space } from "antd";

import type FormButtonsProps from "./form-buttons.props";

function FormButtons({ isDirty, handleResetFields }: FormButtonsProps) {
  return (
    <Space size="middle">
      <Button disabled={!isDirty} size="large" type="primary" htmlType="submit">
        Save
      </Button>

      <Button
        disabled={!isDirty}
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
