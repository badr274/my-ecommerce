import { ILogin } from "@/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface ILoginResponse {
  token: string;
}
export const AuthApiSlice = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (build) => ({
    Login: build.mutation<ILoginResponse, ILogin>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});
// eslint-disable-next-line react-refresh/only-export-components
export const { useLoginMutation } = AuthApiSlice;
