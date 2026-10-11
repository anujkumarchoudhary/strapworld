"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


import toast from "react-hot-toast";
import { BaseUrl } from "../baseurl";
import InputField from "@/src/components/ui/InputField";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAuth = async (e: React.FormEvent) => {
    if (
      isSignup &&
      (!formData.name || formData.name === "undefined" || !formData.name.trim())
    ) {
      toast.error("Name is required");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!formData.password.trim()) {
      toast.error("Password is required");
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
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || `${isSignup ? "Signup" : "Login"} failed`,
        );
      }

      // 🟢 SIGNUP FLOW
      if (isSignup) {
        toast.success("Signup successful. Please verify your email.");

        // optional redirect to login page
        router.push("/login");
        return;
      }

      // 🟢 LOGIN FLOW
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login successful");

      router.push("/admin");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!forgotEmail.trim()) {
      toast.error("Email is required");
      return;
    }

    try {
      const res = await fetch(`${BaseUrl}auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: forgotEmail }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send reset link");
      }

      toast.success("Reset link sent to your email");
      setShowForgotModal(false);
      setForgotEmail("");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        {error && (
          <p className="mb-4 text-red-500 text-sm text-center">{error}</p>
        )}

        {/* <form onSubmit={handleLogin} className="space-y-4"> */}
        <form onSubmit={handleAuth} className="space-y-4">
          {isSignup && (
            <div>
              {/* <label className="block text-sm mb-1">Name</label> */}
              <InputField
                label="Name"
                type="text"
                name="name"
                // required
                placeholder="Enter your name"
                value={formData.name}
                handleChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          )}
          <div>
            {/* <label className="block text-sm mb-1">Email</label> */}
            <InputField
              label="Email"
              type="email"
              name="email"
              // required
              placeholder="Enter your email"
              value={formData.email}
              handleChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className={`${isSignup ? "pb-6" : ""}`}>
            <InputField
              label="Password"
              type="password"
              name="password"
              // required
              placeholder=""
              value={formData.password}
              handleChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            {!isSignup && (
              <p
                onClick={() => setShowForgotModal(true)}
                className="text-right text-sm text-blue-600 cursor-pointer hover:text-secondary"
              >
                Forgot Password?
              </p>
            )}
          </div>

          <button
            aria-label={loading ? "Submitting" : isSignup ? "Sign Up" : "Login"}
            onClick={handleAuth}
            disabled={loading}
            className="w-full bg-black text-white font-medium py-2 rounded-md transition"
          >
            {loading
              ? isSignup
                ? "Signing up..."
                : "Logging in..."
              : isSignup
                ? "Sign Up"
                : "Login"}
          </button>
{/* 
          <p className="text-sm  text-center">
            {isSignup ? "Already have an account?" : "Don't Have an Account?"}{" "}
            <span
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-600 cursor-pointer hover:text-secondary"
            >
              {isSignup ? "Login" : "Sign Up"}
            </span>
          </p> */}

          {showForgotModal && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white p-6 pb-8 rounded-lg w-full max-w-sm shadow-lg relative">
                {/* Close button */}
                <button
                  aria-label="Close forgot password form"
                  onClick={() => setShowForgotModal(false)}
                  className="absolute top-2 right-3 text-black"
                >
                  ✖
                </button>

                <h2 className="text-lg font-semibold mb-4 text-center">
                  Forgot Password?
                </h2>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full border px-3 py-2 rounded-md mb-4"
                />

                <button
                  aria-label={
                    loading ? "Sending reset link" : "Send reset link"
                  }
                  onClick={handleForgotPassword}
                  className="w-full bg-black text-white py-2 rounded-md"
                >
                  Send Reset Link
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}