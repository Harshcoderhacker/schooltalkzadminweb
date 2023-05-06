// import LoginState from "@/context/LoginState";
import LoginState from "@/context/LogState";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoginState>
      <Component {...pageProps} />
    </LoginState>
  );
}
