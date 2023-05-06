import { useState } from "react";

type SwitchProp = {
  active?: boolean;
};

function Switch({ active }: SwitchProp) {
  const [toggle, setToggle] = useState(active || false);
  const toggleClass = " transform translate-x-6";
  return (
    <>
      <div
        className={`w-10 h-4 flex items-center ${
          toggle === true ? " bg-gray-400" : "bg-green-400"
        } rounded-full p-1 cursor-pointer`}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        <div
          className={
            "bg-white w-2 h-2 rounded-full shadow-md transform duration-300 ease-in-out" +
            (toggle ? null : toggleClass)
          }
        ></div>
      </div>
    </>
  );
}

export default Switch;
