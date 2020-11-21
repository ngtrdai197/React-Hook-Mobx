import React from "react";

import { Constant } from "@app/common/Constant";

export const Register: React.FC = () => {
  async function registerAccountTodoApp() {
    const account = {
      name: "Dai Nguyen",
      email: "dainguyen@gmail.com",
      password: "Aloalo123",
      age: 23,
    };
    const accountProfile = await fetch(Constant.URL_ACCOUNT_REGISTER, {
      method: "POST",
      body: JSON.stringify(account),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    console.log("accountProfile :>> ", accountProfile);
  }

  return (
    <section className="auth-register">
      <h3>Register Component work ...</h3>
      <button onClick={() => registerAccountTodoApp()}>Register</button>
    </section>
  );
};
