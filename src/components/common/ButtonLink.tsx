import Link from "next/link";
import { MdArrowOutward, MdOutlineArrowDownward, MdOutlineArrowForward } from "react-icons/md";

type ButtonLinkProps = {
  saveText?: string;
  saveBgColor?: string,
  saveTextColor?: string,
  cancelBgColor?: string,
  cancelTextColor?: string,
  cancelText?: string;
  href?: any;
  isButton2?: boolean;
  handleClick?: () => void;
  handleClick2?: () => void;
  className?: string;
};

const ButtonLink = ({
  saveBgColor = "#2E9B4F",
  saveTextColor = "#000000",
  cancelBgColor = "transparent",
  cancelTextColor = "#2E9B4F",
  href,
  saveText = "Start a Project",
  cancelText = "Explore Our Work",
  isButton2,
  handleClick = () => { },
  handleClick2,
  className = "",
}: ButtonLinkProps) => {
  return (
    <div
      className={`
    flex items-center gap-3
    ${className}
  `}
    >
      {/* Start a Project */}
      <Link
        href={href ? href : "#"}
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
      </Link>

      {/* Explore Our Work */}
      {isButton2 && (
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

export default ButtonLink;