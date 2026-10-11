"use client";

import { motion } from "framer-motion";
import MaxWidth from "./layout/MaxWidth";
import Icon from "@/src/utills/iconMap ";
import { ChangeEvent, FormEvent, useState } from "react";
import GetEnquiryForm from "./form/GetEnquiryForm";
import Heading from "./common/Heading";
import { MdArrowOutward, MdCheck, MdOutlineMailOutline, MdPhone } from "react-icons/md";
import { useResponsive } from "../hooks/useResponsive";
import SaveAndCancel from "./common/SaveAndCancel";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AlertCircle, CheckCircle2, LoaderCircle } from "lucide-react";
import { BaseUrl } from "../app/baseurl";

interface FinalCTAData {
  label: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

interface FinalCTAProps {
  data: FinalCTAData;
}

export default function FinalCTA({ data }: any) {
  const [open, setOpen] = useState(false);
  const { isDesktop, isMobile } = useResponsive()
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

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
    "w-full rounded-[5px] border border-[#DCE3DF] bg-[#F4F7F4] px-3 py-3.5 text-[15px] text-[#000000] outline-none placeholder:text-[#8A9490] transition focus:border-[#063F3D] focus:ring-2 focus:ring-[#063F3D]/10 disabled:opacity-60";

  const labelClass =
    "mb-1 block text-[15px] font-medium text-[#000000]";

  return (
    <section className=" bg-[#2E9B4F] py-10 md:py-12 lg:py-20" >
      {data?.isVariant === "01" && <MaxWidth>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.96 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden "
        >
          {/* Content */}
          <div className="relative w-full mb-auto z-10 lg:grid grid-cols-1 lg:grid-cols-[35%_50%] justify-between gap-6 space-y-10 ">
            {/* Left */}
            <div className="space-y-5 ">
              <Heading
                isAccentLine={true}
                isCenter={isDesktop ? false : true}
                accentColor="#ffffff"
                labelColor="#ffffff"
                textColor="#ffffff"
                label={data?.label}
                headingParts={data?.headingParts}
                description={data?.description}
              />
              <div className="bg-[#FFFFFF]/10 p-5 rounded-[10px] space-y-3">
                {data?.list?.map((item: any, idx: number) => {
                  return (
                    <div className="flex gap-2">
                      <MdCheck size={15} className="text-[#FFFFFF]" />
                      <p className="my-auto text-[15px] font-normal text-[#FFFFFF]">
                        {item?.label}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Form */}
            <div className="w-full   rounded-[14px] bg-white p-5 sm:p-10">
              {/* Heading */}
              <h2 className="mb-4 text-[clamp(18px,1.5vw,28px)] font-semibold leading-tight text-[#101820]">
                Tell us about your requirement.
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Company */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name <span className="text-[#000000]/80">*</span>
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
                      Email <span className="text-[#000000]/80">*</span>
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
                      Phone <span className="text-[#000000]/80">*</span>
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
                    Message <span className="text-[#000000]/80">*</span>
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

                  <span className="text-[#000000]/70">
                    I agree to be contacted regarding my enquiry and understand
                    that my information will be used to respond to my request.
                    <span className="ml-1 text-[#000000]/80">*</span>
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
        </motion.div>
      </MaxWidth>}

      {data?.isVariant === "02" && <MaxWidth>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.96 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden "
        >
          {/* Content */}
          <div className="relative w-full mx-auto z-10 lg:grid grid-cols-1 lg:grid-cols-[50%_40%]  items-center justify-between gap-6 sm:px-10 md:px-16">
            {/* Left */}
            <div className="space-y-5 ">
              <Heading
                isAccentLine={true}
                isCenter={isDesktop ? false : true}
                accentColor="#ffffff"
                labelColor="#ffffff"
                textColor="#ffffff"
                label={data?.label}
                headingParts={data?.headingParts}
                description={data?.description}
              />
              <div className="hidden lg:flex gap-3">
                <a
                  href="mailto:nalandaindustri@gmail.com"
                  className="flex gap-2"
                >
                  <MdOutlineMailOutline
                    size={18}
                    className="my-auto text-[#FFFFFF]"
                  />
                  <p className="my-auto text-[14px] font-bold text-[#FFFFFF]">
                    nalandaindustri@gmail.com
                  </p>
                </a>

                <a
                  href="tel:+919978735708"
                  className="flex gap-2"
                >
                  <MdPhone
                    size={18}
                    className="my-auto text-[#FFFFFF]"
                  />
                  <p className="my-auto text-[14px] font-bold text-[#FFFFFF]">
                    +91 997 873 5708
                  </p>
                </a>
              </div>
            </div>

            {/* Button */}
            <div className="bg-white space-y-10 w-full p-5 md:p-10 h-full rounded-[10px]">
              <Heading
                isAccentLine={true}
                isCenter={isDesktop ? false : true}
                accentColor="#2E9B4F"
                labelColor="#2E9B4F"
                textColor="#647077"
                label={data?.formLabel}
                headingParts={data?.headingParts2}
                description={data?.description2}

              />
              <div className="flex justify-center lg:justify-start">
                <SaveAndCancel
                  saveText={"Start a Project"}
                  saveBgColor="#063F3D"
                  cancelBgColor="#FFFFFF"
                  cancelTextColor="#000000"
                  handleClick={() => setOpen(true)}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </MaxWidth>}
      <GetEnquiryForm isOpen={open} handleClose={() => setOpen(false)} />
    </section>
  );
}
