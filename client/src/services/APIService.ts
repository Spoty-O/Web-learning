import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log(process.env);

interface UserAttributes {
  id: number;
  login: string;
  email: string;
  password: string;
}

interface CreationUserAttributes {
  id?: number;
  login: string;
  email: string;
  password: string;
}

export const API = createApi({
  reducerPath: "baseAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api/`,
  }),
  tagTypes: ["User", "BankAccount", "Transactions"],
  endpoints: (build) => ({
    // Получение списка клиентов
    getUsers: build.query<UserAttributes, number>({
      query: (id) => ({
        url: "user",
        method: "GET",
        params: {
          id,
        },
      }),
      providesTags: ["User"],
    }),

    // Поиск клиента по имени и фамилии
    createUser: build.mutation<UserAttributes, CreationUserAttributes>({
      query: (data) => ({
        url: `clients/find`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
