import Link from "next/link";
import { MdArrowOutward, MdOutlineArrowDownward, MdOutlineArrowForward } from "react-icons/md";

type SaveAndCancelProps = {
  saveText?: string;
  saveBgColor?: string,
  saveTextColor?: string,
  cancelBgColor?: string,
  cancelTextColor?: string,
  cancelText?: string;
  isButton2?: boolean;
  handleClick?: () => void;
  handleClick2?: () => void;
  className?: string;
};

const SaveAndCancel = ({
  saveBgColor = "#2E9B4F",
  saveTextColor = "#000000",
  cancelBgColor = "transparent",
  cancelTextColor = "#FFFFFF",
  saveText,
  cancelText,
  isButton2,
  handleClick = () => { },
  handleClick2,
  className = "",
}: SaveAndCancelProps) => {
  return (
    <div
      className={`
    flex items-center gap-3
    ${className}
  `}
    >
      {/* Start a Project */}
      {saveText && <button
        onClick={handleClick}
        style={{
          backgroundColor: saveBgColor,
          color: saveTextColor,
        }}
        className="
          group
          inline-flex cursor-pointer items-center justify-center
          gap-2
          whitespace-nowrap
          rounded-full
          px-5 py-3
          text-[clamp(12px,1vw,16px)]
          font-medium
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:shadow-purple-500/30
        "
      >
        <span className="text-[#ffffff]">{saveText}</span>

        <MdArrowOutward size={18} className="text-[#ffffff]" />
      </button>}


      {/* Explore Our Work */}
      {cancelText && (
        <button
          style={{
            backgroundColor: cancelBgColor,
            color: cancelTextColor,
          }}
          onClick={handleClick2}

          className="
        inline-flex items-center cursor-pointer justify-center
        gap-2
        rounded-full
        border border-[#29414E]
        bg-transparent
        px-5 py-3
        text-[clamp(12px,1vw,14px)]
        font-semibold
        text-white
        transition-all
        duration-300
        hover:border-white/40
        hover:bg-white/[0.06]
        hover:scale-[1.03]
      "
        >
          {cancelText}
          <MdArrowOutward />
        </button>
      )}
    </div>
  );
};

export default SaveAndCancel;