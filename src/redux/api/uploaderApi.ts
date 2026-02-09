// src/redux/api/uploaderApi.ts
import { baseApi } from "./baseApi";

export const uploaderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadFile: builder.mutation<
      { success: boolean; data: string[] },
      FormData
    >({
      query: (formData) => ({
        url: "/upload",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useUploadFileMutation } = uploaderApi;
