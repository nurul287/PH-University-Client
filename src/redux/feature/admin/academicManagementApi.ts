import baseApi from "src/redux/api/baseApi";
import {
  IAcademicSemester,
  TQueryParams,
  TResponse,
  TResponseRedux,
} from "src/types";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (args: TQueryParams[]) => {
        const params = new URLSearchParams();
        if (args.length > 0) {
          args.forEach((arg) => params.append(arg.field, arg.value));
        }
        return {
          url: "/academic-semesters",
          params,
        };
      },
      transformResponse: (response: TResponseRedux<IAcademicSemester[]>) => {
        return {
          data: response.data ?? [],
          meta: response.meta,
        };
      },
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
