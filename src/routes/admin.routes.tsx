import { ReactNode } from "react";
import { NavLink, RouteObject } from "react-router-dom";
import AdminDashboard from "src/pages/admin/AdminDashboard";
import CreateAdmin from "src/pages/admin/CreateAdmin";
import CreateFaculty from "src/pages/admin/CreateFaculty";
import CreateStudent from "src/pages/admin/CreateStudent";

type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};
const adminPaths = [
  {
    name: "Dashboard",
    path: 'dashboard"',
    element: <AdminDashboard />,
  },
  {
    name: "User ManageMent",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

export const adminRoutes = adminPaths.reduce((acc: RouteObject[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);

export const adminSidebarItems = adminPaths.reduce(
  (acc: TSidebarItem[], item) => {
    if (item.children) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
        children: item?.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    } else {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }
    return acc;
  },
  []
);
