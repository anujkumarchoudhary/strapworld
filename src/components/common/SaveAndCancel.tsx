import Link from "next/link";

type SaveAndCancelProps = {
  saveText?: string;
  cancelText?: string;
  isButton2?:boolean;
  handleClick?: () => void;
  handleClick2?: () => void;
  className?: string;
};

const SaveAndCancel = ({
  saveText = "Start a Project",
  cancelText = "Explore Our Work",
  isButton2,
  handleClick = () => {},
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
      <button
        onClick={handleClick}
        className="
          group
          inline-flex cursor-pointer items-center justify-center
          gap-2
          rounded-md
          bg-secondary-bg
          px-5 py-3
          text-[16px]
          sm:text-[18px]
          font-medium
          text-[#000000]
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:shadow-purple-500/30
        "
      >
        <span>{saveText}</span>

        <span
          className="
            text-sm
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </button>

      {/* Explore Our Work */}
      {isButton2 &&   <button
      onClick={handleClick2}
        
        className="
          inline-flex items-center cursor-pointer justify-center
          rounded-md
          border border-[#29414E]
          bg-transparent
          px-5 py-3
          text-[12px]
          sm:text-[18px]
          font-medium
          text-white
          transition-all
          duration-300
          hover:border-white/40
          hover:bg-white/[0.06]
          hover:scale-[1.03]
        "
      >
        {cancelText}
      </button>}
    
    </div>
  );
};

export default SaveAndCancel;