import baseApi from "src/redux/api/baseApi";
import { TResponse } from "src/types";

interface IAcademicSemester {
  _id: string;
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
}
const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query<TResponse<IAcademicSemester[]>, undefined>({
      query: () => ({
        url: "/academic-semesters",
      }),
    }),
    addAcademicSemester: builder.mutation<
      TResponse<IAcademicSemester>,
      Record<string, unknown>
    >({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation } =
  academicManagementApi;
