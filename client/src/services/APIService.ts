import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreationUserAttributes, UserAttributes } from "../types/UserTypes";

console.log(process.env);

export const API = createApi({
  reducerPath: "baseAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api/`,
  }),
  tagTypes: ["User", "BankAccount", "Transactions"],
  endpoints: (build) => ({
    // Получение списка клиентов
    getUsers: build.query<UserAttributes[], undefined>({
      query: () => ({
        url: "user",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    createUser: build.mutation<UserAttributes, CreationUserAttributes>({
      query: (data) => ({
        url: `user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
