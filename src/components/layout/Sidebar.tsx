import { Layout, Menu, MenuProps } from "antd";
import { useAuth } from "src/hooks/useAuth";
import { adminPaths } from "src/routes/admin.routes";
import { facultyPaths } from "src/routes/faculty.routes";
import { studentPaths } from "src/routes/student.routes";
import { sidebarItemsGenerator } from "src/utils/sidebarItemsGenerator";

const { Sider } = Layout;

const UserRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const { user } = useAuth();
  let sidebarItems: MenuProps["items"] = [];

  switch (user?.role) {
    case UserRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, "admin");
      break;
    case UserRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, "faculty");
      break;
    case UserRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, "student");
      break;
    default:
      sidebarItems = [];
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: 0, left: 0 }}
    >
      <div
        className="demo-logo-vertical"
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          paddingLeft: "24px",
        }}
      >
        PH University
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
