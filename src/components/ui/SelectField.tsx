import React from "react";

export interface SelectFieldProps {
  label: string;
  placeholder?: string;
}

const SelectField = ({ label, placeholder }: SelectFieldProps) => {
  return (
    <div>
      <span className="text-[#FFFFFF] font-semibold">{label}</span>
      <select
        id="subject"
        defaultValue=""
        className="w-full p-3 outline-none border bg-[#FFFFFF] border-gray-300 mt-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent "
      >
        <option value="" disabled>
          {placeholder || "Select a subject"}
        </option>
        <option value="general">General Inquiry</option>
        <option value="support">Support Request</option>
        <option value="feedback">Feedback</option>
      </select>
    </div>
  );
};

export default SelectField;
