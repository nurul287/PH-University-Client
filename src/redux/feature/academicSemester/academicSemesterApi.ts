import baseApi from "src/redux/api/baseApi";
import { IApiResponse } from "src/types";

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
const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query<IAcademicSemester[], undefined>({
      query: () => ({
        url: "/academic-semesters",
      }),
      transformResponse: (response: IApiResponse<IAcademicSemester>) =>
        response.data,
    }),
  }),
});

export const { useGetAllSemesterQuery } = academicSemesterApi;
