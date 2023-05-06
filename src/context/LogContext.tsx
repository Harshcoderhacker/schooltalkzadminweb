import { createContext } from "react";

interface LoginContext {
  loginStatus: any;
  setCookie: (value: string) => void;
  validateUser: () => void;
}
const LoginContext = createContext<LoginContext>({
  loginStatus: false,
  setCookie: (value: string) => {},
  validateUser: () => {},
});

export default LoginContext;
