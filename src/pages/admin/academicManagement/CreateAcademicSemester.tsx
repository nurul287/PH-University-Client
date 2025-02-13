import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import Form from "src/components/form/Form";
import Select, { ISelectOptions } from "src/components/form/Select";
import { monthOptions } from "src/constants/global";
import { semesterOptions } from "src/constants/semester";
import { academicSemesterSchema } from "src/schemas/academicManagement.schema";

const currentYear = new Date().getFullYear();
let yearOptions: ISelectOptions[] = [];
for (let i = 0; i < 5; i++) {
  yearOptions.push({
    value: String(currentYear + i),
    label: String(currentYear + i),
  });
}

const CreateAcademicSemester = () => {
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const semesterData = {
      name: semesterOptions[Number(data.name) - 1]?.label,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center">
      <Col span={10}>
        <Form
          onSubmit={handleSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <Select name="name" label="Semester Name" options={semesterOptions} />
          <Select name="year" label="Year" options={yearOptions} />
          <Select
            name="startMonth"
            label="Start Month"
            options={monthOptions}
          />
          <Select name="endMonth" label="End Month" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </Form>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
