import { Constant } from "../common/Constant";
import { httpClient } from "./base.service";

export class AuthService {
  static async loginAccountTodoApp() {
    const user = {
      email: "dainguyen@gmail.com",
      password: "Aloalo123",
    };
    const accountToken = await httpClient
      .post(Constant.URL_ACCOUNT_LOGIN, user)
      .then((response) => response.data)
      .then((data) => {
        localStorage.setItem(Constant.KEY_TOKEN, data?.token);
        return data.token;
      });
    console.log("accountToken :>> ", accountToken);
  }

  static async registerAccountTodoApp() {
    const account = {
      name: "Dai Nguyen",
      email: "dainguyen@gmail.com",
      password: "Aloalo123",
      age: 23,
    };
    const accountProfile = await httpClient
      .post(Constant.URL_ACCOUNT_REGISTER, account)
      .then((response) => response ?? null);
    console.log("accountProfile :>> ", accountProfile);
  }
}
