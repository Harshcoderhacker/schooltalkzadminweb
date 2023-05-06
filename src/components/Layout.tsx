import { ReactNode } from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";

type LayoutProp = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProp) => {
  return (
    <div>
      <Header />
      <SubHeader/>
      <span>{children}</span>
    </div>
  );
};

export default Layout;
