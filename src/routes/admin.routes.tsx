import AcademicDepartment from "src/pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "src/pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "src/pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "src/pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "src/pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "src/pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "src/pages/admin/AdminDashboard";
import CreateAdmin from "src/pages/admin/CreateAdmin";
import CreateFaculty from "src/pages/admin/CreateFaculty";
import CreateStudent from "src/pages/admin/CreateStudent";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
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
