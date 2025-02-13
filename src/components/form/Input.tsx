import { Input as AntInput, Form } from "antd";
import { FC } from "react";
import { Controller } from "react-hook-form";

interface IInputProps {
  type: string;
  name: string;
  label?: string;
}
const Input: FC<IInputProps> = ({ type, name, label }) => {
  return (
    <div className="mb-[20px]">
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <AntInput {...field} type={type} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default Input;
