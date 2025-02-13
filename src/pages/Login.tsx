import { Button, Row } from "antd";
import { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginForm from "src/components/form/Form";
import Input from "src/components/form/Input";
import { useAuth } from "src/hooks/useAuth";
import { useLoginMutation } from "src/redux/feature/auth/authApi";
import { setUser } from "src/redux/feature/auth/authSlice";
import { useAppDispatch } from "src/redux/hooks";
import { ILoginRequest } from "src/types";

const defaultValues = {
  id: "A-0001",
  password: "admin1234",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const { user } = useAuth();

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await login(data as ILoginRequest).unwrap();
      dispatch(setUser({ token: res.data.accessToken }));
      toast.success("Logged in successfully.");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate(`/${user.role}/dashboard`);
    }
  }, [user]);

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <LoginForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <Input type="text" name="id" label={"ID:"} />
        <Input type="password" name="password" label="Password:" />
        <Button htmlType="submit">Login</Button>
      </LoginForm>
    </Row>
  );
};

export default Login;
