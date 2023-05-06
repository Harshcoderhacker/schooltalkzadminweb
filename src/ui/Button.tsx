import { ReactNode } from "react";

interface ButtonProp {
  children: ReactNode;
  color?: "blue" | "orange";
  onClick?(): void
}

const Button = ({ color, children, onClick }: ButtonProp) => {
  const classes = {
    orange: "bg-gradient-orange",
    blue: "bg-gradient-blue",
  };

  return (
    <button
      className={`rounded  w-full h-full flex items-center justify-center  p-2 ${
        color === "orange" ? classes.orange : classes.blue
      } `}
      onClick={onClick}
    >
      <span className="text-white font-bold">{children}</span>
    </button>
  );
};

export default Button;
