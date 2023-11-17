import { client } from "~/shared";
import { AxiosResponse } from "axios";
import { AuthData } from "../types/types.api";

export const login = (data: {
  username: string;
  password: string;
}): Promise<AxiosResponse<AuthData>> =>
  client.post("auth/login", {
    username: data.username,
    password: data.password,
  });
