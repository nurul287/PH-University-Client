import baseApi from "./baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    getPostById: builder.query({
      query: (id: number) => `/posts/${id}`,
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    setPost: builder.mutation({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetUsersQuery,
  useGetPostByIdQuery,
  useSetPostMutation,
} = postApi;
