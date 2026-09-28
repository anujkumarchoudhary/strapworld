"use client";

interface BackgroundEffectsProps {
  color?: string;
  variant?: 1 | 2 | 3 | 4;
}

export default function BackgroundEffects({
  color,
  variant = 1,
}: BackgroundEffectsProps) {

  // ==========================================================
  // VARIANT 01
  // Existing reusable background
  // ==========================================================

  if (variant === 1) {
    const leftColor = color
      ? `color-mix(in srgb, ${color} 10%, transparent)`
      : undefined;

    const rightColor = color
      ? `color-mix(in srgb, ${color} 10%, transparent)`
      : undefined;

    const topColor = color
      ? `color-mix(in srgb, ${color} 30%, transparent)`
      : undefined;

    const bottomColor = color
      ? `color-mix(in srgb, ${color} 30%, transparent)`
      : undefined;

    return (
      <>
        {/* Grid */}

        <div className="absolute inset-0 -z-20 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.035) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.035) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "42px 42px",
            }}
          />
        </div>


        {/* Left Glow */}

        <div
          className={`absolute -left-32 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 rounded-full blur-[120px] ${
            !color ? "bg-purple-600/10" : ""
          }`}
          style={{
            backgroundColor: leftColor,
          }}
        />


        {/* Right Glow */}

        <div
          className={`absolute -right-32 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 rounded-full blur-[120px] ${
            !color ? "bg-blue-600/10" : ""
          }`}
          style={{
            backgroundColor: rightColor,
          }}
        />


        {/* Top Line */}

        <div
          className={`absolute left-0 right-0 top-0 h-px ${
            !color
              ? "bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
              : ""
          }`}
          style={
            color
              ? {
                  background: `linear-gradient(
                    to right,
                    transparent,
                    ${topColor},
                    transparent
                  )`,
                }
              : undefined
          }
        />


        {/* Bottom Line */}

        <div
          className={`absolute bottom-0 left-0 right-0 h-px ${
            !color
              ? "bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
              : ""
          }`}
          style={
            color
              ? {
                  background: `linear-gradient(
                    to right,
                    transparent,
                    ${bottomColor},
                    transparent
                  )`,
                }
              : undefined
          }
        />
      </>
    );
  }


  // ==========================================================
  // VARIANT 02
  // About / Hero Background
  // ==========================================================
if (variant === 2) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* =====================================================
          GLOW SYSTEM
      ===================================================== */}

      {/* Purple */}

      <div
        className="
          absolute
          left-[12%]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-600/[0.13]
          blur-[150px]
        "
      />

      {/* Blue */}

      <div
        className="
          absolute
          bottom-[-5%]
          right-[8%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-blue-600/[0.11]
          blur-[170px]
        "
      />

      {/* Center */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/[0.07]
          blur-[140px]
        "
      />


      {/* =====================================================
          GRID
          Grid exists only inside the glow area
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.055]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",

          /*
           * The grid is visible mainly around
           * the center/glow region.
           */
          maskImage: `
            radial-gradient(
              ellipse 75% 65% at 50% 50%,
              black 0%,
              black 35%,
              transparent 78%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(
              ellipse 75% 65% at 50% 50%,
              black 0%,
              black 35%,
              transparent 78%
            )
          `,
        }}
      />


      {/* =====================================================
          EXTRA GRID FOCUS
          Very subtle grid around purple side
      ===================================================== */}

      <div
        className="
          absolute
          left-[-5%]
          top-[-5%]
          h-[650px]
          w-[650px]
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(168,85,247,0.9) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(168,85,247,0.9) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",

          maskImage: `
            radial-gradient(
              circle,
              black 0%,
              transparent 68%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(
              circle,
              black 0%,
              transparent 68%
            )
          `,
        }}
      />


      {/* =====================================================
          EXTRA GRID FOCUS
          Very subtle blue side
      ===================================================== */}

      <div
        className="
          absolute
          bottom-[-15%]
          right-[-5%]
          h-[700px]
          w-[700px]
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(59,130,246,0.9) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(59,130,246,0.9) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",

          maskImage: `
            radial-gradient(
              circle,
              black 0%,
              transparent 68%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(
              circle,
              black 0%,
              transparent 68%
            )
          `,
        }}
      />


      {/* =====================================================
          DARK RADIAL VIGNETTE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_center,
            transparent_20%,
            rgba(0,0,0,0.35)_70%,
            rgba(0,0,0,0.75)_100%
          )]
        "
      />

    </div>
  );
}

  // ==========================================================
  // VARIANT 03
  // Dark Premium Grid
  // ==========================================================

  if (variant === 3) {
    return (
      <div className="pointer-events-none absolute inset-0">

        {/* Large Center Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-600/[0.08]
            blur-[180px]
          "
        />


        {/* Top Right Glow */}

        <div
          className="
            absolute
            right-[-10%]
            top-[-15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/[0.08]
            blur-[150px]
          "
        />


        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.7) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.7) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "55px 55px",
          }}
        />


        {/* Center Radial */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(
              ellipse_at_center,
              transparent_20%,
              rgba(0,0,0,0.7)_100%
            )]
          "
        />

      </div>
    );
  }


  // ==========================================================
  // VARIANT 04
  // Minimal / Light Background
  // ==========================================================

  if (variant === 4) {
    return (
      <div className="pointer-events-none absolute inset-0">

        {/* Soft Purple */}

        <div
          className="
            absolute
            left-[-10%]
            top-[20%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-purple-500/[0.035]
            blur-[130px]
          "
        />


        {/* Soft Blue */}

        <div
          className="
            absolute
            bottom-[-10%]
            right-[-5%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-500/[0.035]
            blur-[140px]
          "
        />


        {/* Fine Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0,0,0,1) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(0,0,0,1) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
        />


        {/* Bottom Gradient */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-purple-500/20
            to-transparent
          "
        />

      </div>
    );
  }

  


  return null;
}