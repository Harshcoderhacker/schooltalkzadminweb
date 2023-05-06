import { ReactNode } from "react";
import Button from "./Button";

interface SearchProp {
  children?: ReactNode;
  color?: "blue" | "orange";
  onSearch?(e:any): void;
}

const Search = ({ color, children, onSearch }: SearchProp) => {
  const classes = {
    orange: "bg-gradient-to-b from-[#faa401] to-[#fa5f01]",
    blue: "bg-gradient-to-b from-[#0a1122] to-[#03194d]",
  };

  return (
    <form
      className="flex  w-fit border border-black rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        if (onSearch !== undefined) onSearch(e.target);
      }}
    >
      <input type="text" className="rounded-l-lg" />
      <span className="">
        <button
          className={`bg-gradient-to-b p-2 from-[#faa401] to-[#fa5f01] rounded-r-lg`}
          type="submit"
        >
          <span className="text-white font-bold">s</span>
        </button>
      </span>
    </form>
  );
};

export default Search;
