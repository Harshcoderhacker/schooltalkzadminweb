import { mode } from "@/types/mode";

interface IInput extends mode {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input = ({ mode, placeholder, type, value, onChange }: IInput) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`rounded  w-full p-2 ${
        mode === "dark" ? "bg-gray-500" : "bg-gray-100"
      } `}
    />
  );
};

export default Input;
