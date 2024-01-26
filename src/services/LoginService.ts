import http from "../shared/http-common";
import { Login } from "../shared/types";

const login = (body: any) => {
    return http.post<any>("/Login", body)
}

export const LoginService = {
    login,
  };