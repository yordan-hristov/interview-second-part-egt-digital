import type { Rule } from "antd/es/form";

export default interface FormFieldProps {
  label: string;
  name: string;
  textarea?: boolean;
  validationRules?: Rule[];
}
