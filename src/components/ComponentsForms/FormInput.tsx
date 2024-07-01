import { ElementType, useState } from "react";
import { twMerge } from "tailwind-merge";

import { EyeOff, Eye } from "lucide-react";
import { Button } from "../ui/button";

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  errorMsg?: string;
  register: {};
  className?: string;
  tag?: boolean;
}
export const FormInput = ({
  label,
  placeholder,
  type,
  register,
  errorMsg,
  className,
}: InputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const inputType =
    type === "password" ? (isShowPassword ? "text" : "password") : type;

  return (
    <fieldset className="flex flex-col gap-2 relative">
      <label
        className="uppercase font-semibold text-gray-500 text-xs"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className={twMerge("", className)}
        {...register}
        id={label}
        type={inputType}
        placeholder={placeholder}
      />
      {errorMsg && (
        <span className="text-red-600 font-semibold">{errorMsg}</span>
      )}

      {type === "password" && (
        <Button
          type="button"
          className={"w-5 h-5 absolute top-[2.2rem] right-2  hover"}
          title={"verificarsenha"}
          onClick={handleShowPassword}
        >
          {isShowPassword ? <Eye /> : <EyeOff />}
        </Button>
      )}
    </fieldset>
  );
};
