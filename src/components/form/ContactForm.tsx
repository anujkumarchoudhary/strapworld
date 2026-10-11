"use client";

import { useState, type FormEvent } from "react";
import axios from "axios";
import { MdArrowOutward } from "react-icons/md";
import { LoaderCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { BaseUrl } from "@/src/app/baseurl";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status) setStatus(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!BaseUrl) {
      toast.error("API URL is not configured.");
      return;
    }

    if (!formData.agree) {
      toast.error("Please agree before submitting your enquiry.");
      return;
    }

    setLoading(true);

    try {
      const finalMessage = [
        formData.company.trim()
          ? `Company: ${formData.company.trim()}`
          : "",
        `Message: ${formData.message.trim()}`,
      ]
        .filter(Boolean)
        .join("\n\n");

      const response = await axios.post(
        `${BaseUrl.replace(/\/$/, "")}/enquiries`,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: finalMessage,
          agree: formData.agree,
        }
      );

      if (response.data?.success) {
        toast.success(
          response.data.message || "Enquiry submitted successfully!"
        );

        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          agree: false,
        });
        
        router.push("/thank-you");

      } else {
        toast.error(
          response.data?.message || "Failed to submit enquiry."
        );
      }
    } catch (error: unknown) {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message ||
        "Unable to submit your enquiry. Please try again."
        : "Something went wrong. Please try again.";

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-[5px] border border-[#DCE3DF] bg-[#F4F7F4] px-3 py-3.5 text-[15px] text-[#16161D] outline-none placeholder:text-[#8A9490] transition focus:border-[#063F3D] focus:ring-2 focus:ring-[#063F3D]/10 disabled:opacity-60";

  const labelClass =
    "mb-1 block text-[15px] font-medium text-white";

  return (
    <div className="w-full">
      <div className="w-full rounded-[14px] bg-[#2E9B4F] p-5 sm:p-10 lg:p-15">
        {/* Heading */}
        <h2 className="mb-6 text-[clamp(18px,1.5vw,28px)] font-semibold leading-tight text-white">
          Tell us about your requirement.
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name + Company */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name <span className="text-white/80">*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                required
                minLength={2}
                maxLength={100}
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="company" className={labelClass}>
                Company
              </label>

              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
                className={inputClass}
                maxLength={150}
                disabled={loading}
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-white/80">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                required
                maxLength={254}
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone <span className="text-white/80">*</span>
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                required
                maxLength={30}
                disabled={loading}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClass}>
              Message <span className="text-white/80">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your requirements, product specifications, quantity, delivery location, or any other details."
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} min-h-[130px] resize-y`}
              required
              minLength={5}
              maxLength={5000}
              disabled={loading}
            />
          </div>

          {/* Consent */}
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-white">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  agree: e.target.checked,
                }));

                if (status) setStatus(null);
              }}
              className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#063F3D]"
              required
              disabled={loading}
            />

            <span>
              I agree to be contacted regarding my enquiry and understand
              that my information will be used to respond to my request.
              <span className="ml-1 text-white/80">*</span>
            </span>
          </label>

          {/* Success / Error Message */}
          {status && (
            <div
              role={status.type === "error" ? "alert" : "status"}
              aria-live="polite"
              className={`flex items-start gap-3 rounded-lg border p-4 text-sm ${status.type === "success"
                ? "border-white/30 bg-white/15 text-white"
                : "border-red-200 bg-white text-red-700"
                }`}
            >
              {status.type === "success" ? (
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0"
                />
              ) : (
                <AlertCircle
                  size={20}
                  className="mt-0.5 shrink-0"
                />
              )}

              <p>{status.message}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#063F3D] px-8 py-3.5 text-[clamp(12px,1vw,16px)] font-medium text-white transition-all duration-300 hover:bg-[#052F2D] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[180px]"
          >
            <span>{loading ? "Submitting..." : "Submit Enquiry"}</span>

            {loading ? (
              <LoaderCircle size={18} className="animate-spin" />
            ) : (
              <MdArrowOutward
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;