import React from "react";

const MaxWidth = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-[90%] lg:w-[85%] mx-auto ${className}`}>{children}</div>
  );
};

export default MaxWidth;
