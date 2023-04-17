import { Typography } from "antd";

import type LabelProps from "./label.props";

function Label({ text }: LabelProps) {
  return <Typography.Text strong>{text}</Typography.Text>;
}

export default Label;
