// redux/api/categoryApi.ts
import { baseApi } from "@/redux/api/baseApi";
import { Category } from "@/types/user.type";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allcat: builder.query<{ data: Category[] }, void>({
      query: () => "/categories",
      providesTags: ["categories"],
    }),

    addCat: builder.mutation({
      query: ({ data }) => ({
        url: "/categories",
        method: "POST",
        body: data, // { name, description }
      }),
      invalidatesTags: ["categories"],
    }),

    updateCat: builder.mutation({
      query: ({ data }) => ({
        url: `/categories/${data.id}`,
        method: "PATCH", // or "PUT" depending on your backend
        body: data, // { id, name, description }
      }),
      invalidatesTags: ["categories"],
    }),

    deleteCat: builder.mutation({
      query: ({ data }) => ({
        url: `/categories/${data.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["categories"],
    }),
  }),
});

export const {
  useAllcatQuery,
  useAddCatMutation,
  useUpdateCatMutation,
  useDeleteCatMutation,
} = categoryApi;