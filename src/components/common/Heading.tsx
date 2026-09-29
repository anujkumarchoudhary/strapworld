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
  description?: string;

  headingParts?: HeadingPart[];
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
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
    fontWeight: 600,
    lineHeight: 1.08,
  },
  h2: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 700,
    lineHeight: 1.1,
  },
  h3: {
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
    fontWeight: 600,
    lineHeight: 1.15,
  },
  h4: {
    fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h5: {
    fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h6: {
    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
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
            <div className={`flex items-center gap-5 justify-center lg:justify-normal  ${isCenter ? "text-center w-fit mx-auto" : "w-full"}`}>
              <span className="h-px w-4 lg:w-7 " style={{ backgroundColor: accentColor ?? "#A855F7", animationDelay: "0s", }} />

              <span
                className={`
         inline-block
    rounded-full
    bg-transparent
    px-0 py-2
    uppercase
    font-roboto-mono
    text-[clamp(9px,0.75vw,12px)]
    font-semibold
    tracking-[0.15em]
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

      {/* Description */}
      {description && (
        <p
          className={`
      transition-all
      duration-700
      delay-300
      w-[90%]
      ${isCenter
              ? "mx-auto text-center"
              : "mx-auto text-center lg:mx-0 lg:text-left lg:w-full"
            }
      ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }
      mt-6 lg:mt-5
    `}
          style={{
            color: textColor,
            fontSize: descriptionSize
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
