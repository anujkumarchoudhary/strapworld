"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
  ShieldCheck,
  PackageCheck,
  X,
  CheckCircle2,
  Factory,
  LoaderCircle,
  KeyRound,
} from "lucide-react";
import toast from "react-hot-toast";
import { BaseUrl } from "../baseurl";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError("");
  };

  const handleAuth = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password;

    if (isSignup && !name) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!password.trim()) {
      toast.error("Please enter your password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const endpoint = isSignup ? "register" : "login";

      const res = await fetch(`${BaseUrl}/auth/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          name,
          email,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.message || `${isSignup ? "Signup" : "Login"} failed.`,
        );
      }

      if (isSignup) {
        toast.success("Account created. Please verify your email.");
        setIsSignup(false);
        setFormData({
          name: "",
          email,
          password: "",
        });
        return;
      }

      if (!data.token || !data.user) {
        throw new Error("Login response is missing token or user data.");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("adminAccessToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Welcome back!");
      router.push("/admin");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";

      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!forgotEmail.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    setForgotLoading(true);

    try {
      const res = await fetch(`${BaseUrl}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: forgotEmail.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || data.success === false) {
        throw new Error(data.message || "Unable to send reset link.");
      }

      toast.success("Password reset instructions have been sent.");
      setShowForgotModal(false);
      setForgotEmail("");
    } catch (err: unknown) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    } finally {
      setForgotLoading(false);
    }
  };

  const switchMode = () => {
    setIsSignup((prev) => !prev);
    setError("");
    setFormData({
      name: "",
      email: formData.email,
      password: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#f4f7f5] p-3 sm:p-5 lg:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-24px)] max-w-[1440px] overflow-hidden rounded-3xl bg-white shadow-[0_20px_80px_-25px_rgba(15,60,43,0.16)] sm:min-h-[calc(100vh-40px)] lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT BRAND PANEL */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-[#073f32] p-10 text-white sm:p-12 lg:flex xl:p-16">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-36 -top-32 h-[480px] w-[480px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-16 -top-12 h-[320px] w-[320px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-48 -left-28 h-[420px] w-[420px] rounded-full bg-[#2d9a69]/20 blur-3xl" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#073f32] shadow-lg">
              <Factory size={25} strokeWidth={2.2} />
            </div>

            <div>
              <p className="text-xl font-bold tracking-tight">
                STRAP WORLD
              </p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.28em] text-emerald-200">
                Industrial Packaging
              </p>
            </div>
          </div>

          <div className="relative z-10 my-14 max-w-xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-white/[0.07] px-4 py-2 text-xs font-medium text-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Your business workspace
            </span>

            <h1 className="text-4xl font-semibold leading-[1.18] tracking-tight xl:text-6xl">
              Everything you need.
              <span className="mt-2 block text-emerald-300">
                All in one place.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-emerald-50/75">
              Access your dashboard to manage products, customer enquiries,
              content, and business operations with ease.
            </p>

            <div className="mt-10 space-y-5">
              {[
                {
                  icon: PackageCheck,
                  title: "Product management",
                  description: "Keep your product catalogue organized.",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure workspace",
                  description: "Access your account with confidence.",
                },
                {
                  icon: CheckCircle2,
                  title: "Simplified operations",
                  description: "Manage business activities efficiently.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07]">
                      <Icon size={21} className="text-emerald-300" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-1 text-xs text-emerald-50/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-emerald-50/60">
            <span>Strap World Pvt. Ltd.</span>
            <span>Secure Admin Portal</span>
          </div>
        </section>

        {/* RIGHT AUTH PANEL */}
        <section className="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-20">
          <div className="w-full max-w-[420px]">
            {/* Mobile logo */}
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#073f32] text-white">
                <Factory size={23} />
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight text-[#073f32]">
                  STRAP WORLD
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Industrial Packaging
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f5ee] text-[#176d4c]">
                {isSignup ? (
                  <UserRound size={27} />
                ) : (
                  <LockKeyhole size={27} />
                )}
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#228354]">
                {isSignup ? "Get started" : "Admin workspace"}
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-[36px]">
                {isSignup ? "Create your account" : "Welcome back"}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {isSignup
                  ? "Enter your details to create your account."
                  : "Sign in to continue to your dashboard."}
              </p>
            </div>

            {error && (
              <div
                role="alert"
                className="mb-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <form onSubmit={handleAuth} className="space-y-5">
              {isSignup && (
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full name
                  </label>

                  <div className="relative">
                    <UserRound
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/70 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#228354] focus:bg-white focus:ring-4 focus:ring-[#228354]/10"
                    />
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/70 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#228354] focus:bg-white focus:ring-4 focus:ring-[#228354]/10"
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  {/* {!isSignup && (
                    <button
                      type="button"
                      onClick={() => setShowForgotModal(true)}
                      className="text-xs font-semibold text-[#228354] transition hover:text-[#073f32]"
                    >
                      Forgot password?
                    </button>
                  )} */}
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete={
                      isSignup ? "new-password" : "current-password"
                    }
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/70 pl-11 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#228354] focus:bg-white focus:ring-4 focus:ring-[#228354]/10"
                  />

                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0b503b] px-5 text-sm font-semibold text-white shadow-lg shadow-[#0b503b]/15 transition hover:bg-[#073f32] hover:shadow-xl hover:shadow-[#0b503b]/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" />
                    {isSignup ? "Creating account..." : "Signing in..."}
                  </>
                ) : (
                  <>
                    {isSignup ? "Create account" : "Sign in to dashboard"}
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-100" />
              <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                Secure access
              </span>
              <div className="h-px flex-1 bg-gray-100" />
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-4">
              <ShieldCheck
                size={19}
                className="mt-0.5 shrink-0 text-[#228354]"
              />
              <p className="text-xs leading-5 text-gray-500">
                Your account information is protected. Never share your
                password or authentication credentials with anyone.
              </p>
            </div>

            <p className="mt-8 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} Strap World Pvt. Ltd.
            </p>
          </div>
        </section>
      </div>

      {/* FORGOT PASSWORD MODAL */}
      {showForgotModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/50 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setShowForgotModal(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="forgot-title"
            className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl sm:p-9"
          >
            <button
              type="button"
              aria-label="Close dialog"
              onClick={() => setShowForgotModal(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            >
              <X size={19} />
            </button>

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f5ee] text-[#176d4c]">
              <KeyRound size={25} />
            </div>

            <h3
              id="forgot-title"
              className="text-2xl font-semibold tracking-tight text-gray-900"
            >
              Forgot your password?
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Enter your registered email address. If password recovery is
              available for your account, you'll receive instructions.
            </p>

            <form onSubmit={handleForgotPassword} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="forgotEmail"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="forgotEmail"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#228354] focus:bg-white focus:ring-4 focus:ring-[#228354]/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={forgotLoading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0b503b] text-sm font-semibold text-white transition hover:bg-[#073f32] disabled:opacity-60"
              >
                {forgotLoading ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" />
                    Sending instructions...
                  </>
                ) : (
                  <>
                    Send reset instructions
                    <ArrowRight size={17} />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowForgotModal(false)}
                className="w-full py-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
              >
                Back to sign in
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}