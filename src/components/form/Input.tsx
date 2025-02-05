import { Input as AntInput } from "antd";
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
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        name={name}
        render={({ field }) => <AntInput {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default Input;
