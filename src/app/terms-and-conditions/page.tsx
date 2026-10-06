import type { Metadata } from "next";
import CommonBanner from "@/src/components/CommonBanner";
import MaxWidth from "@/src/components/layout/MaxWidth";

export const metadata: Metadata = {
  title: "Terms & Conditions | Strap World",
  description:
    "Read the Terms and Conditions governing the use of the Strap World website, products, enquiries, and services.",
};

const sections = [
  {
    title: "1. About These Terms",
    content: (
      <p>
        These Terms and Conditions govern your access to and use of the Strap
        World website, including its content, product information, enquiry
        forms, and other services made available through the website.
      </p>
    ),
  },
  {
    title: "2. Website Information",
    content: (
      <>
        <p>
          The information provided on this website is intended for general
          informational and business enquiry purposes.
        </p>

        <p>
          We make reasonable efforts to keep the information on our website
          accurate and up to date. However, product specifications,
          availability, dimensions, colours, packaging, pricing, and other
          information may change without prior notice.
        </p>
      </>
    ),
  },
  {
    title: "3. Products and Specifications",
    content: (
      <p>
        Strap World manufactures and supplies strapping and packaging-related
        products for industrial and commercial applications. Product images,
        descriptions, specifications, dimensions, colours, and other details
        shown on the website may vary from actual products.
      </p>
    ),
  },
  {
    title: "4. Enquiries and Quotations",
    content: (
      <p>
        Submitting an enquiry through our website does not create a binding
        contract between you and Strap World. Any quotation or commercial
        proposal provided by Strap World may be subject to product
        availability, specifications, quantities, payment terms, delivery
        conditions, taxes, transportation costs, and other agreed commercial
        terms.
      </p>
    ),
  },
  {
    title: "5. User Responsibilities",
    content: (
      <>
        <p>When using this website, you agree that you will not:</p>

        <ul>
          <li>Provide false, misleading, or fraudulent information.</li>
          <li>
            Attempt to gain unauthorized access to the website or its systems.
          </li>
          <li>Introduce malicious software, viruses, or harmful code.</li>
          <li>Interfere with the operation or security of the website.</li>
          <li>Use website content for unlawful purposes.</li>
          <li>
            Copy, reproduce, distribute, or exploit website content without
            authorization.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Intellectual Property",
    content: (
      <p>
        Unless otherwise stated, the content available on this website,
        including text, graphics, logos, images, designs, photographs, icons,
        and other materials, is owned by or licensed to Strap World. You may
        not reproduce, modify, distribute, publish, transmit, sell, or
        commercially exploit website content without prior written permission
        from Strap World.
      </p>
    ),
  },
  {
    title: "7. Third-Party Links",
    content: (
      <p>
        Our website may contain links to third-party websites or services for
        convenience or additional information. Strap World does not control and
        is not responsible for the content, availability, security, privacy
        practices, or policies of third-party websites.
      </p>
    ),
  },
  {
    title: "8. Website Availability",
    content: (
      <p>
        We aim to keep the website available and functioning properly, but we
        do not guarantee that the website will always be available,
        uninterrupted, secure, or free from errors. We may modify, suspend,
        update, or discontinue any part of the website without prior notice.
      </p>
    ),
  },
  {
    title: "9. Disclaimer",
    content: (
      <p>
        To the extent permitted by applicable law, Strap World does not
        guarantee that all website content will always be complete, accurate,
        current, or error-free.
      </p>
    ),
  },
  {
    title: "10. Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by applicable law, Strap World shall
        not be responsible for losses or damages arising from your use of, or
        inability to use, the website or reliance on information published on
        the website.
      </p>
    ),
  },
  {
    title: "11. Privacy",
    content: (
      <p>
        Your use of this website is also subject to our Privacy Policy, which
        explains how we collect, use, and protect personal information.
      </p>
    ),
  },
  {
    title: "12. Changes to These Terms",
    content: (
      <p>
        Strap World may update these Terms and Conditions from time to time to
        reflect changes to our website, business practices, services, or
        applicable legal requirements. Updated terms will be published on this
        page with a revised "Last Updated" date.
      </p>
    ),
  },
  {
    title: "13. Governing Law",
    content: (
      <p>
        These Terms and Conditions shall be governed by and interpreted in
        accordance with the applicable laws of India. Any disputes arising in
        connection with these terms or the use of this website shall be subject
        to the jurisdiction of the appropriate courts in India, unless
        otherwise agreed in writing or required by applicable law.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white">
      <CommonBanner
        label="LEGAL"
        headingParts={[{text:"Terms & Conditions"}]}
        description="Please review the terms and conditions governing your use of the Strap World website and services."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Terms & Conditions" },
        ]}
      />

      <MaxWidth className=" py-12 lg:py-16">
        <p className="mb-12 text-sm text-gray-500">
          Last Updated: October 3, 2026
        </p>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold tracking-tight text-[#0B1E2D] md:text-2xl">
                {section.title}
              </h2>

              <div className="mt-4 space-y-4 text-[15px] leading-7 text-gray-600 md:text-base">
                {section.content}
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-semibold tracking-tight text-[#0B1E2D] md:text-2xl">
              14. Contact Us
            </h2>

            <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-[15px] leading-7 text-gray-600">
              <p className="font-semibold text-[#0B1E2D]">
                Strap World
              </p>

              <p className="mt-3">
                <span className="font-medium text-[#0B1E2D]">
                  Email:
                </span>{" "}
                enquiry@strapworld.com
              </p>

              <p>
                <span className="font-medium text-[#0B1E2D]">
                  Phone:
                </span>{" "}
                +91 997 873 5708
              </p>

              <p>
                <span className="font-medium text-[#0B1E2D]">
                  Location:
                </span>{" "}
                Gujarat, India
              </p>
            </div>
          </section>
        </div>
      </MaxWidth>
    </main>
  );
}