import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import Form from "src/components/form/Form";
import Input from "src/components/form/Input";

const student = {
  password: "student123",
  student: {
    name: {
      firstName: "Nurul",
      middleName: "Alam",
      lastName: "Azad",
    },
    gender: "male",
    dateOfBirth: "1995-05-15",
    email: "student3@example.com",
    contactNo: "1234567890",
    emergencyContactNo: "9876546510",
    bloodGroup: "B+",
    presentAddress: "123 Main Street, Cityville",
    permanentAddress: "456 Oak Avenue, Townsville",
    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "1112223333",
      motherName: "Jane Doe",
      motherOccupation: "Doctor",
      motherContactNo: "4445556666",
    },
    localGuardian: {
      name: "Lisa Johnson",
      occupation: "Teacher",
      contactNo: "7778889999",
      address: "789 Pine Lane, Villageton",
    },
    admissionSemester: "65c77a1e0117920fef568f99",
    academicDepartment: "65c779620117920fef568f96",
  },
};
const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="name" label="Name" />
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
};

export default CreateStudent;
