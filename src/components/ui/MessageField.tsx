import React from "react";

interface MessageFieldProps {
  label: string;
  placeholder?: string;
}

const MessageField = ({ label, placeholder }: MessageFieldProps) => {
  return (
    <div>
      <span className="text-[#FFFFFF] font-semibold">{label}</span>

      <textarea
        placeholder={placeholder}
        className="w-full p-3 outline-none border bg-[#FFFFFF] border-gray-300 mt-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-[150px] resize-none"
      />
    </div>
  );
};

export default MessageField;