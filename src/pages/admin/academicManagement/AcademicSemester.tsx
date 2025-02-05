import { useGetAllSemesterQuery } from "src/redux/feature/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);
  return <div>Academic Semester</div>;
};

export default AcademicSemester;
