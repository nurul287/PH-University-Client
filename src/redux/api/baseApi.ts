import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";
import { API_URL } from "../../config/config";
import { logout, setUser } from "../feature/auth/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (
  args: FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    console.log(result);

    //handle refresh token
    if (result.error.status === 401) {
      const res = await fetch(`${API_URL}/auth/refresh-token`, {
        method: "POST",
        credentials: "include",
      });
      const { data } = await res.json();
      if (data) {
        api.dispatch(setUser({ token: data.accessToken }));
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    } else {
      const errorMessage = result.error.data
        ? (result.error.data as { message: string }).message
        : "";
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.error("Something went wrong");
      }
    }
  }
  return result;
};

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefreshToken,
  refetchOnReconnect: true,
  tagTypes: [],
  endpoints: () => ({}),
});

export default baseApi;
