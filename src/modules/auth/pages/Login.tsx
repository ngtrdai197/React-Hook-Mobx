import React from "react";

import { AuthService } from "../../../services/auth.service";

export const Login: React.FC = () => {
  return (
    <section className="auth-login">
      <h3>Login Component work ...</h3>
      <button onClick={() => AuthService.loginAccountTodoApp()}>Login</button>
    </section>
  );
};
