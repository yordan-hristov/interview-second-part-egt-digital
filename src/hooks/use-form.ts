import { useState } from "react";
import { Form } from "antd";

function useForm(initialFormValues: Record<string, string>) {
  const [dirtyFields, setDirtyFields] = useState<string[]>([]);
  const [form] = Form.useForm();

  const handleValuesChange = (changed: Partial<typeof initialFormValues>) => {
    const [key] = Object.keys(changed);

    const currentValue = changed[key];

    if (currentValue?.trim() !== initialFormValues[key].trim()) {
      setDirtyFields((prev) => [...prev, key]);
    } else {
      setDirtyFields((prev) => prev.filter((k) => k !== key));
    }
  };

  const handleResetFields = () => {
    form.resetFields();
    setDirtyFields([]);
  };

  const isDirty = dirtyFields.length > 0;
  const buttonsDisabled = !isDirty;

  return {
    form,
    buttonsDisabled,
    handleValuesChange,
    handleResetFields,
    setDirtyFields,
  };
}

export default useForm;
