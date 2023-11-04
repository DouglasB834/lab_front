interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  errorMsg?: string;
  register: {};
}
export const Input = ({
  label,
  placeholder,
  type,
  register,
  errorMsg,
}: InputProps) => {
  return (
    <fieldset className="flex flex-col gap-2">
      <label
        className="uppercase font-semibold text-gray-500 text-xs"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        {...register}
        id={label}
        type={type ? type : "text"}
        placeholder={placeholder}
      />
      {errorMsg && (
        <span className="text-red-600 font-semibold">{errorMsg}</span>
      )}
    </fieldset>
  );
};
