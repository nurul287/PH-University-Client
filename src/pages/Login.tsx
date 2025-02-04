import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "src/redux/feature/auth/authApi";
import { LoginRequest } from "src/types";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin1234",
    },
  });
  const [login] = useLoginMutation();

  const onSubmit = async (data: any) => {
    await login(data as LoginRequest);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
