import { mode } from "@/types/mode";

interface IInput extends mode {
  placeholder?: string;
  type?: string;
  value?: string;
  name?: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputSchool = ({
  mode,
  placeholder,
  type,
  value,
  name,
  label,
  onChange,
}: IInput) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white bold text-xl" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`rounded  w-full p-2 text-white ${
          mode === "dark" ? "bg-[#313131]" : "bg-[#313131]"
        } `}
      />
    </div>
  );
};

export default InputSchool;
