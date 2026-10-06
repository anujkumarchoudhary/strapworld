"use client"
import { MdArrowOutward } from "react-icons/md";
import SaveAndCancel from "../common/SaveAndCancel";

const ContactForm = () => {
  return (
    <div >

      <div className="w-full  rounded-[14px] bg-[#2E9B4F] p-5 sm:p-15">
        {/* Heading */}
        <h2 className="mb-4 text-[clamp(18px,1.5vw,28px)] font-semibold leading-tight text-[#FFFFFF]">
          Tell us about your requirement.
        </h2>

        <form className="space-y-4">
          {/* Name + Company */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-[15px] font-medium text-[#FFFFFF]">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="
              py-3.5 w-full rounded-[5px]
              border border-[#DCE3DF]
              bg-[#F4F7F4]
              px-2.5
              text-[15px] text-[#FFFFFF]
              outline-none
              placeholder:text-[#8A9490]
              focus:border-[#218B55]
            "
              />
            </div>

            <div>
              <label className="mb-1 block text-[15px] font-medium text-[#FFFFFF]">
                Company
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="
              py-3.5 w-full rounded-[5px]
              border border-[#DCE3DF]
              bg-[#F4F7F4]
              px-2.5
              text-[15px] text-[#FFFFFF]
              outline-none
              placeholder:text-[#8A9490]
              focus:border-[#218B55]
            "
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-[15px] font-medium text-[#FFFFFF]">
                Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="
              py-3.5 w-full rounded-[5px]
              border border-[#DCE3DF]
              bg-[#F4F7F4]
              px-2.5
              text-[15px] text-[#FFFFFF]
              outline-none
              placeholder:text-[#8A9490]
              focus:border-[#218B55]
            "
              />
            </div>

            <div>
              <label className="mb-1 block text-[15px] font-medium text-[#FFFFFF]">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                className="
              py-3.5 w-full rounded-[5px]
              border border-[#DCE3DF]
              bg-[#F4F7F4]
              px-2.5
              text-[15px] text-[#FFFFFF]
              outline-none
              placeholder:text-[#8A9490]
              focus:border-[#218B55]
            "
              />
            </div>
          </div>

          {/* Product + Quantity */}
          {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-[15px] font-medium text-[#FFFFFF]">
                Product
              </label>
              <input
                type="text"
                placeholder="PET Strap"
                className="
              py-3.5 w-full rounded-[5px]
              border border-[#DCE3DF]
              bg-[#F4F7F4]
              px-2.5
              text-[15px] text-[#FFFFFF]
              outline-none
              placeholder:text-[#8A9490]
              focus:border-[#218B55]
            "
              />
            </div>

            <div>
              <label className="mb-1 block text-[15px] font-medium text-[#FFFFFF]">
                Quantity
              </label>
              <input
                type="text"
                placeholder="Required quantity"
                className="
              py-3.5 w-full rounded-[5px]
              border border-[#DCE3DF]
              bg-[#F4F7F4]
              px-2.5
              text-[15px] text-[#FFFFFF]
              outline-none
              placeholder:text-[#8A9490]
              focus:border-[#218B55]
            "
              />
            </div>
          </div> */}

          {/* Requirements */}
          {/* <div>
            <label className="mb-1 block text-[15px] font-medium text-[#FFFFFF]">
              Requirements
            </label>

            <input
              type="text"
              placeholder="Width, thickness, strength, color or other details"
              className="
            py-3.5 w-full rounded-[5px]
            border border-[#DCE3DF]
            bg-[#F4F7F4]
            px-2.5
            text-[15px] text-[#FFFFFF]
            outline-none
            placeholder:text-[#8A9490]
            focus:border-[#218B55]
          "
            />
          </div> */}

          {/* Message */}
          <div>
            <label className="mb-1 block text-[15px] font-medium text-[#FFFFFF]">
              Message
            </label>

            <textarea
              rows={5}
              placeholder="Application, delivery location and any additional information"
              className="
            min-h-[56px] w-full resize-none rounded-[5px]
            border border-[#DCE3DF]
            bg-[#F4F7F4]
            px-2.5 py-2
            text-[15px] text-[#FFFFFF]
            outline-none
            placeholder:text-[#8A9490]
            focus:border-[#218B55]
          "
            />
          </div>

          {/* Button */}
          <button

            className="
          group
          inline-flex cursor-pointer items-center justify-center
          gap-2
          whitespace-nowrap
          rounded-full
          px-15 py-3
          text-[clamp(12px,1vw,16px)]
          font-medium
          transition-all
          duration-300
          w-full
          hover:shadow-purple-500/30
          bg-[#063F3D]
        "
          >
            <span className="text-[#ffffff]">{"Submit"}</span>

            <MdArrowOutward size={18} className="text-[#ffffff]" />
          </button>

        </form>
      </div>

    </div>
  );
};

export default ContactForm;
