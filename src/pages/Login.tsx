import { Button } from "antd";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "src/hooks/useAuth";
import { useLoginMutation } from "src/redux/feature/auth/authApi";
import { ILoginRequest } from "src/types";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin1234",
    },
  });
  const [login] = useLoginMutation();
  const { user } = useAuth();

  const onSubmit = async (data: any) => {
    try {
      await login(data as ILoginRequest);
      toast.success("Logged in successfully.");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (user) {
      navigate(`/${user.role}/dashboard`);
    }
  }, [user]);

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
