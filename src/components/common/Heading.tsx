import { Sparkles } from "lucide-react";

type HeadingPart = {
  text: string;
  color?: string;
  font?: string;
  style?: string;
  size?: string;
  weight?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string;
  gradient?: string;
  className?: string;
};

type HeadingProps = {
  label?: string;
  isAccentCircle?: boolean;
  isAccentLine?: boolean;
  isSparkles?: boolean;

  labelColor?: string;
  accentColor?: string;
  description?: any;

  headingParts?: HeadingPart[];
  subHeading?: string;
  descriptionSize?: string
  textColor?: string;
  descColor?: string;

  labelBorderStart?: string;
  labelBorderEnd?: string;

  isDart?: boolean;
  isCenter?: boolean;
  isVisible?: boolean;
  isGradient?: boolean;

  gradient?: string;

  // Break line after this heading part index
  breakIndex?: number;

  className?: string;

  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const fontMap: Record<string, string> = {
  playfair: "var(--font-playfair-display)",
  geist: "var(--font-geist-sans)",
  "geist-mono": "var(--font-geist-mono)",
  kanit: "var(--font-kanit)",
};

const headingDefaults = {
  h1: {
    fontSize: "var(--h1-size)",
    fontWeight: 600,
    lineHeight: "var(--h1-leading)",
  },

  h2: {
    fontSize: "var(--h2-size)",
    fontWeight: 700,
    lineHeight: "var(--h2-leading)",
  },

  h3: {
    fontSize: "var(--h3-size)",
    fontWeight: 600,
    lineHeight: "var(--h3-leading)",
  },

  h4: {
    fontSize: "var(--h4-size)",
    fontWeight: 400,
    lineHeight: "var(--h4-leading)",
  },

  h5: {
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: 1.25,
  },

  h6: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: 1.3,
  },
};

const Heading = ({
  label,
  labelColor,
  accentColor,
  isSparkles,
  isAccentCircle,
  isAccentLine,
  descriptionSize,
  description,
  headingParts,
  subHeading,
  textColor = "#000000",
  isDart = false,
  isCenter = false,
  isVisible = true,
  breakIndex,
  isGradient = false,
  gradient,
  className = "",
  as: Tag = "h2",
}: HeadingProps) => {
  const defaultHeading = headingDefaults[Tag];
  return (
    <div className={` space-y-3  ${isCenter ? "text-center" : ""}`}>
      {/* Label */}
      {label && (
        <div
          className={``}
        >
          {isSparkles && <div className={`flex items-center gap-5 justify-center lg:justify-normal  ${isCenter ? "text-center w-fit mx-auto" : "w-full"}`}>
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
              "
            >
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            </span>
            <span
              className={`
        uppercase inline-block
        rounded-full
        bg-transparent
        px-0 py-2
        text-[10px]
        lg:text-[12px]
        tracking-[0.25em]
        font-inter
        font-semibold
      `}
              style={{
                color: labelColor ?? textColor,
              }}
            >
              {label}
            </span>
          </div>}
          {isAccentCircle && (
            <div className={`flex items-center gap-5 justify-center lg:justify-normal  ${isCenter ? "text-center w-fit mx-auto" : "w-full"}`}>
              <span
                className="h-2.5 w-2.5 animate-pulse rounded-full"
                style={{
                  backgroundColor: accentColor ?? "#A855F7",
                  boxShadow: `0 0 12px ${accentColor ?? "#A855F7"}`,
                }}
              />
              <span
                className={`
        uppercase 
        inline-block
        rounded-full
        bg-transparent
        px-0 py-2
        font-roboto-mono
        text-[10px]
        lg:text-[12px]
        tracking-[0.25em]
        font-semibold
      `}
                style={{
                  color: labelColor ?? textColor,
                }}
              >
                {label}
              </span>
            </div>
          )}

          {isAccentLine &&
            <div className={`flex items-center gap-2 lg:justify-normal  ${isCenter ? "text-center w-fit mx-auto" : "w-full"}`}>
              <span className="h-px w-4 lg:w-7 " style={{ backgroundColor: accentColor ?? "#A855F7", animationDelay: "0s", }} />

              <span
                className={`
         inline-block
    rounded-full
    bg-transparent
    px-0 py-2
    uppercase
    text-[clamp(9px,0.75vw,15px)]
    font-bold
      `}
                style={{
                  color: labelColor ?? textColor,
                }}
              >
                {label}
              </span>
              <span className="h-px hidden w-4 lg:w-7 animate-ping" style={{ backgroundColor: accentColor ?? "#A855F7", animationDelay: "0.5s", }} /></div>}
        </div>
      )}

      {/* Heading */}
      <Tag
        className={`
    transition-all duration-700 delay-150
    ${isCenter ? "text-center" : "text-left"}
    ${className}
    ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
          }
  `}
      >
        {(() => {
          let wordCount = 0;

          return headingParts?.map((part, partIndex) => {
            const isPartGradient = Boolean(part.gradient);

            // Split while preserving whitespace
            const words = part.text.split(/(\s+)/);

            return (
              <span key={partIndex}>
                {words.map((word, wordIndex) => {
                  const isWhitespace = /^\s+$/.test(word);

                  if (isWhitespace) {
                    return word;
                  }

                  wordCount++;

                  const shouldBreak = wordCount === breakIndex;

                  return (
                    <span key={wordIndex}>
                      <span
                        className={`inline ${part.className ?? ""}`}
                        style={{
                          color: isPartGradient
                            ? "transparent"
                            : part.color ?? textColor,

                          backgroundImage: isPartGradient
                            ? part.gradient
                            : undefined,

                          backgroundClip: isPartGradient
                            ? "text"
                            : undefined,

                          WebkitBackgroundClip: isPartGradient
                            ? "text"
                            : undefined,

                          WebkitTextFillColor: isPartGradient
                            ? "transparent"
                            : undefined,

                          fontFamily: part.font
                            ? fontMap[part.font] || part.font
                            : undefined,

                          fontStyle: part.style,

                          fontSize:
                            part.size ?? defaultHeading.fontSize,

                          fontWeight:
                            part.weight ?? defaultHeading.fontWeight,

                          lineHeight:
                            part.lineHeight ?? defaultHeading.lineHeight,

                          letterSpacing:
                            part.letterSpacing ?? undefined,
                        }}
                      >
                        {word}
                      </span>

                      {shouldBreak && <br />}
                    </span>
                  );
                })}
              </span>
            );
          });
        })()}
      </Tag>
      {subHeading && <h4 className="py-2" style={{
        color: textColor,
        fontSize: descriptionSize
      }}>{subHeading}</h4>}


      {/* Description */}
{description && (
  <>
    {Array.isArray(description) ? (
      description.map((desc: string, index: number) => (
        <p
          key={index}
          className={`
            w-full
            transition-all duration-700 delay-300
            lg:w-[90%]
            ${isCenter
              ? "mx-auto text-center"
              : "mx-auto text-left lg:w-full"
            }
            ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
            }
            mt-6 lg:mt-5
          `}
          style={{
            color: textColor,
            fontSize: descriptionSize,
          }}
        >
          {desc}
        </p>
      ))
    ) : (
      <p
        className={`
          w-full
          transition-all duration-700 delay-300
          lg:w-[90%]
          ${isCenter
            ? "mx-auto text-center"
            : "mx-auto text-left lg:w-full"
          }
          ${isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
          }
          mt-6 lg:mt-5
        `}
        style={{
          color: textColor,
          fontSize: descriptionSize,
        }}
      >
        {description}
      </p>
    )}
  </>
)}
    </div>
  );
};

export default Heading;
