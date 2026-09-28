import React from "react";
import { IoMdArrowForward } from "react-icons/io";

interface ButtonProps {
  name: string;
  name2?: string;
  is2button?: boolean;
  buttonWidth?: "full" | "auto";
  className?: string;
  handleClick?: () => void;
}

const Button = ({
  name,
  name2,
  is2button,
  buttonWidth = "auto",
  className = "",
  handleClick,
}: ButtonProps) => {
  const widthClass = buttonWidth === "full" ? "w-full" : "w-fit";

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {/* Primary Button */}
      <button
        type="button"
        onClick={handleClick}
        className={`gradient-border-btn  group ${widthClass}`}
      >
        <span className="gradient-border-btn-content">
          {name}

          <span className="gradient-arrow">
            <IoMdArrowForward/>
          </span>
        </span>
      </button>

      {/* Secondary Button */}
      {is2button && (
        <button
          type="button"
          className={`gradient-border-btn group ${widthClass}`}
        >
          <span className="gradient-border-btn-content">
            {name2}

            <span className="gradient-arrow">
              →
            </span>
          </span>
        </button>
      )}
    </div>
  );
};

export default Button;