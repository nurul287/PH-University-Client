import { Form as AntForm } from "antd";
import { BaseSyntheticEvent, FC, ReactNode } from "react";
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

  const submit = (data: FieldValues, event?: BaseSyntheticEvent) => {
    onSubmit(data, event);
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <AntForm layout="vertical" onFinish={methods.handleSubmit(submit)}>
        {children}
      </AntForm>
    </FormProvider>
  );
};

export default Form;
