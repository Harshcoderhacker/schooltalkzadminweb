import { useState } from "react";
import { Cookies } from "react-cookie";
import LoginContext from "./LogContext";
import { getData } from "@/pages/api/axios";
import { useRouter } from "next/router";

const cookie = new Cookies();
const cook = cookie.get("token");
const cookiePresent = cook || false;

const path = "/me";
const LoginState = (props: any) => {
  const [loginStatus, setLoginStatus] = useState(cookiePresent);
  const [validUser, setValidUser] = useState(false);
  const router = useRouter();
  //   const [value, setCookieValue] = useState();
  const setCookie = (value: string) => {
    // cookie.set("token", value, {
    //   httpOnly: true,
    //   secure: true,
    //   maxAge: 86400000,
    // });
  };

  const validateUser = async () => {
    let res = await getData({ path });
    // console.log("abc")

    console.log(res);
  };

  return (
    <LoginContext.Provider value={{ loginStatus, setCookie, validateUser }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginState;
