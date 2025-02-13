import { Select as AntSelect, Form } from "antd";
import { FC } from "react";
import { Controller } from "react-hook-form";

export interface ISelectOptions {
  value: string;
  label: string;
  disabled?: boolean;
}
interface ISelectProps {
  label?: string;
  name: string;
  options: ISelectOptions[];
}
const Select: FC<ISelectProps> = ({ label, options, name }) => (
  <Controller
    name={name}
    render={({ field, fieldState: { error } }) => (
      <Form.Item label={label}>
        <AntSelect
          style={{ width: "100%" }}
          {...field}
          options={options}
          size="large"
        />
        {error && <small style={{ color: "red" }}>{error.message}</small>}
      </Form.Item>
    )}
  />
);

export default Select;
