import { FC, ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface IFormConfig {
  defaultValues?: Record<string, any>;
}

interface ILoginFormProps extends IFormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}
const LoginForm: FC<ILoginFormProps> = ({
  children,
  onSubmit,
  defaultValues,
}) => {
  const formConfig: IFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default LoginForm;
