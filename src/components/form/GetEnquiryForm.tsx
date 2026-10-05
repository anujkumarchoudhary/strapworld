
"use client";

import { BaseUrl } from "@/src/app/baseurl";
import React, { useState } from "react";

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

const GetEnquiryForm = ({
  isOpen,
  handleClose,
}: GetEnquiryFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
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

    // Clear field error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    const name = formData.name.trim();

    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (!/^[a-zA-ZÀ-ÿ\s.'-]+$/.test(name)) {
      newErrors.name = "Please enter a valid name.";
    }

    // Email validation
    const email = formData.email.trim();

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation
    const phone = formData.phone.trim();

    if (!phone) {
      newErrors.phone = "Please enter your phone number.";
    } else {
      const digitsOnly = phone.replace(/\D/g, "");

      if (digitsOnly.length < 10) {
        newErrors.phone =
          "Phone number must contain at least 10 digits.";
      } else if (digitsOnly.length > 15) {
        newErrors.phone =
          "Please enter a valid phone number.";
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must be at least 10 characters.";
    }

    // Agreement
    if (!formData.agree) {
      newErrors.agree =
        "Please agree before submitting the form.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  try {
    setIsSubmitting(true);

    const response = await fetch(`${BaseUrl}enquiries`, {
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

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result?.message || "Failed to submit enquiry."
      );
    }

    console.log("Enquiry submitted:", result);

    alert(
      "Thank you! Your enquiry has been submitted successfully."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    });

    setErrors({});

    handleClose();

  } catch (error) {
    console.error(
      "Enquiry submission failed:",
      error
    );

    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );

  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative max-h-[90vh] w-full lg:w-[30%] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close enquiry form"
          className="absolute cursor-pointer right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-xl text-black/50 transition hover:border-black/20 hover:bg-black/5 hover:text-black"
        >
          ×
        </button>

        {/* Heading */}
        <div className="mb-8 pr-12">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2E9B4F]">
            Get In Touch
          </span>

          <h2 className="mt-3 text-3xl font-bold text-black">
           Let's Connect
          </h2>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-2">

            {/* Name */}
            <div>
              <label
                htmlFor="enquiry-name"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Full Name{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                id="enquiry-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                className={`w-full rounded-xl border bg-white px-4 py-2.5 text-black outline-none placeholder:text-black/30 transition ${
                  errors.name
                    ? "border-red-500"
                    : "border-black/15 focus:border-[#2E9B4F]"
                }`}
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
                Email Address{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                id="enquiry-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                autoComplete="email"
                className={`w-full rounded-xl border bg-white px-4 py-2.5 text-black outline-none placeholder:text-black/30 transition ${
                  errors.email
                    ? "border-red-500"
                    : "border-black/15 focus:border-[#2E9B4F]"
                }`}
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
                Phone Number{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                autoComplete="tel"
                className={`w-full rounded-xl border bg-white px-4 py-2.5 text-black outline-none placeholder:text-black/30 transition ${
                  errors.phone
                    ? "border-red-500"
                    : "border-black/15 focus:border-[#2E9B4F]"
                }`}
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
                Message{" "}
                <span className="text-red-500">*</span>
              </label>

              <textarea
                id="enquiry-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or requirements..."
                className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-black outline-none placeholder:text-black/30 transition ${
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
                  className="mt-1 h-4 w-4 cursor-pointer accent-[#2E9B4F]"
                />

                <label
                  htmlFor="enquiry-agree"
                  className="cursor-pointer text-sm leading-5 text-black/60"
                >
                  I agree to be contacted by Strap World
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
              className="rounded-full w-full cursor-pointer bg-black px-8 py-3 font-semibold text-white transition hover:bg-[#2E9B4F] disabled:cursor-not-allowed disabled:opacity-50"
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
