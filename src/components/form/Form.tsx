import { Form as AntForm } from "antd";
import { FC, ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface IFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IFormProps extends IFormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}
const Form: FC<IFormProps> = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
}) => {
  const formConfig: IFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <AntForm layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </AntForm>
    </FormProvider>
  );
};

export default Form;
