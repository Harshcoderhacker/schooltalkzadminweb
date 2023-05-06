import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className="shadow-large-bottom w-full h-fit rounded-xl p-10 bg-white">{children}</div>;
};

export default Card;
