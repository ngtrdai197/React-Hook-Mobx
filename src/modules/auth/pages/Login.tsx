import React from "react";
import { Constant } from "@app/common/Constant";

export const Login: React.FC = () => {
  async function loginAccountTodoApp() {
    const user = {
      email: "dainguyen@gmail.com",
      password: "Aloalo123",
    };
    const accountToken = await fetch(Constant.URL_ACCOUNT_LOGIN, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("USER_TOKEN", data.token);
        return data.token;
      });
    console.log("accountToken :>> ", accountToken);
  }

  return (
    <section className="auth-login">
      <h3>Login Component work ...</h3>
      <button onClick={() => loginAccountTodoApp()}>Login</button>
    </section>
  );
};
