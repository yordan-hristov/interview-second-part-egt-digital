import { useState } from "react";
import { Form } from "antd";

function useForm(initialFormValues: Record<string, string>) {
  const [dirtyFields, setDirtyFields] = useState<string[]>([]);
  const [form] = Form.useForm();

  const handleValuesChange = (changed: Partial<typeof initialFormValues>) => {
    const [key] = Object.keys(changed);
    const castedKey = key as keyof typeof changed;

    const currentValue = changed[castedKey];

    if (currentValue?.trim() !== initialFormValues[castedKey].trim()) {
      setDirtyFields((prev) => [...prev, castedKey]);
    } else {
      setDirtyFields((prev) => prev.filter((k) => k !== castedKey));
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
