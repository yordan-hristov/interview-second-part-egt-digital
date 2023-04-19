import type { FormItemProps } from "antd/es/form";

type FormFieldProps = FormItemProps & {
  label: string;
  textarea?: boolean;
};

export default FormFieldProps;
