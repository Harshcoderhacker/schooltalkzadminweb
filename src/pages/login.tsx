import { useContext, useEffect, useState } from "react";
import SchoolTalkzLogo from "@/assets/images/SchoolTalkzLogo";
import Button from "@/ui/Button";
import Card from "@/ui/Card";
import Input from "@/ui/Input";
import { postData } from "./api/axios";
import axios, { AxiosResponse } from "axios";
// import { LoginContext } from "@/context/LoginContext";
import { Cookies } from "react-cookie";
import LoginContext from "@/context/LogContext";
import { useRouter } from "next/router";

interface obj {
  email: string;
  password: string;
}
interface InputProps {
  type: string;
  placeholder: string;
  value: any;
  onChange: any;
}
interface loginTypeHandler {
  res: AxiosResponse<any>;
}

const path: string = "/login";

const Login = () => {
  const [emailinp, setEmail] = useState<string>("");
  const [passwordinp, setPassword] = useState<string>("");
  // const [state, setState] = useState<boolean>(true);
  // const {loginStatus,setLoginStatus} = useContext(LoginContext)
  // const { isLoggedIn, setLoginStatus } = useContext(LoginContext);
  const { loginStatus, setCookie } = useContext(LoginContext);
  const router = useRouter();
  // const cookii = new Cookies();
  // const cook = cookii.get("token");
  // console.log(cook);
  // console.log(document.cookie)
  console.log(loginStatus);
  // console.log("hi")

  // console.log(isLoggedIn);
  const log: any = async (e: any) => {
    e.preventDefault();
    let obj: object | string = {
      email: emailinp,
      password: passwordinp,
    };
    // obj = JSON.stringify(obj);
    // console.log(obj);
    try {
      let res: any = await postData({ path, obj });
      const token = res.data.token;

      // const verifyUser = await axios.post(
      //   "http://localhost:4000/api/v1/verifyUser",
      //   {
      //     data: obj,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );

      // console.log(verifyUser.data);
      if (res.data.success === true) {
        // alert("Login Successfull")
        // loginTypeHandler(res);
        if (res.data.user.schooltalkz_staff.priviledge === "rwd") {
          // setLoginStatus(true);
          // console.log(isLoggedIn);
          // console.log(res.data.token);
          setCookie(res.data.token);
          alert("Admin");
          router.push("/");
        } else {
          setCookie(res.data.token);
          alert("Not a Admin");
          // setState(false);
        }

        console.log(res);

        return res;
      } else if (res.data.message === "cannot login") {
        alert("Check Credentials");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const verifyUser = async () => {};
  useEffect(() => {}, []);
  // const loginTypeHandler = ({ res }: loginTypeHandler) => {
  //   // if(res.user.schooltalkz_staff.priviledge){

  //   // }
  //   console.log(res)
  // };
  return (
    <div className="flex items-center flex-col mt-36 gap-24 max-h-screen">
      <div className="absolute top-0 right-0 left-0 bg-gradient-blue h-1/2 z-[-10]"></div>
      <SchoolTalkzLogo />
      <div className="flex flex-col  items-center justify-center gap-4 w-1/3">
        <Card>
          <div className="flex gap-5 flex-col ">
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold">SchoolTalkz Admin</span>
              <span>Enter your credentials</span>
            </div>
            <form onSubmit={log} className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Email"
                value={emailinp}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                type="password"
                placeholder="Password"
                value={passwordinp}
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
              />
              <Button onClick={log}>Login</Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
