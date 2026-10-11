"use client";

import { BaseUrl } from "@/src/app/baseurl";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface GetEnquiryFormProps {
  isOpen: boolean;
  handleClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  agree: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  agree?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  agree: false,
};

const GetEnquiryForm = ({
  isOpen,
  handleClose,
}: GetEnquiryFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    // Name validation
    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (!/^[a-zA-ZÀ-ÿ\s.'-]+$/.test(name)) {
      newErrors.name = "Please enter a valid name.";
    }

    // Email validation
    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation
    if (!phone) {
      newErrors.phone = "Please enter your phone number.";
    } else {
      const digitsOnly = phone.replace(/\D/g, "");

      if (digitsOnly.length < 10) {
        newErrors.phone = "Phone number must contain at least 10 digits.";
      } else if (digitsOnly.length > 15) {
        newErrors.phone = "Please enter a valid phone number.";
      }
    }

    // Message validation
    if (!message) {
      newErrors.message = "Please enter your message.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    // Agreement validation
    if (!formData.agree) {
      newErrors.agree = "Please agree before submitting the form.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (isSubmitting || !validateForm()) {
      return;
    }

    const apiUrl = `${BaseUrl.replace(/\/+$/, "")}/enquiries`;

    try {
      setIsSubmitting(true);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          agree: formData.agree,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.message || "Failed to submit your enquiry."
        );
      }

      toast.success(
        result.message || "Your enquiry has been submitted successfully!"
      );

      setFormData({ ...initialFormData });
      setErrors({});
      handleClose();
    } catch (error) {
      console.error("Enquiry submission failed:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (fieldError?: string) =>
    `w-full rounded-xl border bg-white px-4 py-2.5 text-black outline-none placeholder:text-black/30 transition ${
      fieldError
        ? "border-red-500"
        : "border-black/15 focus:border-[#2E9B4F]"
    }`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={() => {
        if (!isSubmitting) handleClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-heading"
        className="relative max-h-[90vh] w-full overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8 lg:w-[30%] lg:min-w-[380px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={handleClose}
          disabled={isSubmitting}
          aria-label="Close enquiry form"
          className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 text-xl text-black/50 transition hover:border-black/20 hover:bg-black/5 hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
        >
          ×
        </button>

        {/* Heading */}
        <div className="mb-8 pr-12">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2E9B4F]">
            Get In Touch
          </span>

          <h2
            id="enquiry-heading"
            className="mt-3 text-3xl font-bold text-black"
          >
            Let's Connect
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="enquiry-name"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                id="enquiry-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                disabled={isSubmitting}
                aria-invalid={!!errors.name}
                className={inputClass(errors.name)}
              />

              {errors.name && (
                <p className="mt-1.5 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="enquiry-email"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Email Address <span className="text-red-500">*</span>
              </label>

              <input
                id="enquiry-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                autoComplete="email"
                disabled={isSubmitting}
                aria-invalid={!!errors.email}
                className={inputClass(errors.email)}
              />

              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="enquiry-phone"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                autoComplete="tel"
                disabled={isSubmitting}
                aria-invalid={!!errors.phone}
                className={inputClass(errors.phone)}
              />

              {errors.phone && (
                <p className="mt-1.5 text-xs text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="enquiry-message"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Message <span className="text-red-500">*</span>
              </label>

              <textarea
                id="enquiry-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or requirements..."
                disabled={isSubmitting}
                aria-invalid={!!errors.message}
                className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-black outline-none placeholder:text-black/30 transition disabled:opacity-60 ${
                  errors.message
                    ? "border-red-500"
                    : "border-black/15 focus:border-[#2E9B4F]"
                }`}
              />

              {errors.message && (
                <p className="mt-1.5 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Agreement */}
            <div>
              <div className="flex items-start gap-3">
                <input
                  id="enquiry-agree"
                  name="agree"
                  type="checkbox"
                  checked={formData.agree}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-1 h-4 w-4 cursor-pointer accent-[#2E9B4F] disabled:cursor-not-allowed"
                />

                <label
                  htmlFor="enquiry-agree"
                  className="cursor-pointer text-sm leading-5 text-black/60"
                >
                  I agree to be contacted by Strap World regarding my
                  enquiry.
                </label>
              </div>

              {errors.agree && (
                <p className="mt-1.5 text-xs text-red-500">
                  {errors.agree}
                </p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="mt-5 flex justify-end border-t border-black/10 pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer rounded-full bg-black px-8 py-3 font-semibold text-white transition hover:bg-[#2E9B4F] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetEnquiryForm;