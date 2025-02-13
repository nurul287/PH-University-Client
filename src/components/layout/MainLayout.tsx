import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { logout } from "src/redux/feature/auth/authSlice";
import { useAppDispatch } from "src/redux/hooks";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header
          style={{ padding: 0, position: "sticky", top: 0, zIndex: 9999 }}
        >
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
