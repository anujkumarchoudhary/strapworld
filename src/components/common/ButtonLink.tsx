import Link from "next/link";
import { MdArrowOutward, MdOutlineArrowDownward, MdOutlineArrowForward } from "react-icons/md";

type ButtonLinkProps = {
  saveText?: string;
  btnBgColor?: string,
  btnColor?: string,
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
  btnBgColor ,
  btnColor,
  cancelBgColor = "transparent",
  cancelTextColor ,
  href,
  saveText,
  cancelText,
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
      {saveText && <Link
        href={href ? href : "#"}
        style={{
          backgroundColor: btnBgColor,
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
        <span style={{color:btnColor}} className="">{saveText}</span>

        <MdArrowOutward style={{color:btnColor}} size={18} />
      </Link>}


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