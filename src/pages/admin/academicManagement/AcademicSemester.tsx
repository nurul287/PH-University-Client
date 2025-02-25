import type { TableColumnsType, TableProps } from "antd";
import { Table } from "antd";
import { useState } from "react";
import { useGetAllSemesterQuery } from "src/redux/feature/admin/academicManagementApi";
import { IAcademicSemester, TQueryParams } from "src/types";
import { generateParams } from "src/utils/generateParams";

const columns: TableColumnsType<IAcademicSemester> = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },
    filters: [
      {
        text: "Autumn",
        value: "Autumn",
      },
      {
        text: "Summer",
        value: "Summer",
      },
      {
        text: "Fall",
        value: "Fall",
      },
    ],
  },
  {
    title: "Year",
    dataIndex: "year",
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
  },
  {
    title: "End Month",
    dataIndex: "endMonth",
  },
];

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllSemesterQuery(params);
  const tableData = semesterData?.data?.map((semester) => ({
    ...semester,
    key: semester._id,
  }));

  const onChange: TableProps<IAcademicSemester>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
    if (extra.action === "filter") {
      const filterParams: TQueryParams[] = generateParams(filters);
      setParams(filterParams);
    }
  };

  return (
    <Table<IAcademicSemester>
      loading={isFetching || isLoading}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
