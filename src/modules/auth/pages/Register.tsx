import React from "react";

import { AuthService } from "../../../services/auth.service";

export const Register: React.FC = () => {
  return (
    <section className="auth-register">
      <h3>Register Component work ...</h3>
      <button onClick={() => AuthService.registerAccountTodoApp()}>
        Register
      </button>
    </section>
  );
};
