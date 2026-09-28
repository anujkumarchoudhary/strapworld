import React from "react";

export interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: InputFieldProps) => {
  return (
    <div>
      <span className="text-[#FFFFFF] font-semibold">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-3 outline-none border bg-[#FFFFFF] border-gray-300 mt-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent "
      />
    </div>
  );
};

export default InputField;
