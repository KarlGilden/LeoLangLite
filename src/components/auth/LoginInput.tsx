import { ChangeEvent } from "react";

interface IProps{
    type: string;
    label: string;
    value: string;
    name: string;
    hasError: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void
}

function LoginInput({type, label, value, name, hasError, onChange}:IProps) {
  return (
    <div className="flex flex-col">
    <small>{label}</small>
    <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className={`${hasError ? "border-red": "border-black"} border-[1px] border-solid rounded-sm p-1`}
        />
</div>
  )
}

export default LoginInput