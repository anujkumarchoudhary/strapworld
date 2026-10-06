import CommonBanner from "@/src/components/CommonBanner";
import MaxWidth from "@/src/components/layout/MaxWidth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Strap World",
  description:
    "Read the Strap World privacy policy to understand how we collect, use, protect, and manage your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          We may collect information that you voluntarily provide when you
          interact with our website, including:
        </p>

        <ul>
          <li>Name</li>
          <li>Company or organization name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Country or location</li>
          <li>Product or service requirements</li>
          <li>Enquiry and message details</li>
          <li>Other information you choose to provide</li>
        </ul>

        <p>
          We may also automatically collect limited technical information, such
          as your IP address, browser type, device type, pages visited, and
          general website usage information.
        </p>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We may use the information we collect to:</p>

        <ul>
          <li>Respond to product and business enquiries.</li>
          <li>Provide quotations and requested information.</li>
          <li>Communicate with you regarding our products and services.</li>
          <li>Understand your requirements and provide relevant assistance.</li>
          <li>Improve our website, products, and services.</li>
          <li>Maintain website security and prevent misuse.</li>
          <li>Comply with applicable legal and regulatory requirements.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Enquiry and Contact Information",
    content: (
      <p>
        When you submit an enquiry through our website, the information you
        provide may be used by Strap World and its authorized representatives
        to respond to your request. Depending on your enquiry, we may contact
        you by email, phone, or other communication methods you have provided.
      </p>
    ),
  },
  {
    title: "4. Cookies and Similar Technologies",
    content: (
      <p>
        Our website may use cookies and similar technologies to improve website
        functionality, understand website usage, and enhance the user
        experience. You can control or disable cookies through your browser
        settings. Disabling certain cookies may affect some website
        functionality.
      </p>
    ),
  },
  {
    title: "5. Third-Party Services",
    content: (
      <p>
        We may use third-party services to support website functionality,
        analytics, hosting, communication, security, or other business
        operations. These providers may process information according to their
        own privacy policies and applicable terms. We do not sell your personal
        information to third parties.
      </p>
    ),
  },
  {
    title: "6. Data Security",
    content: (
      <p>
        We take reasonable technical and organizational measures to protect
        personal information against unauthorized access, loss, misuse,
        alteration, or disclosure. However, no method of transmission over the
        Internet or electronic storage is completely secure.
      </p>
    ),
  },
  {
    title: "7. Data Retention",
    content: (
      <p>
        We retain personal information only for as long as reasonably necessary
        to fulfill the purposes for which it was collected, respond to
        enquiries, maintain business records, comply with legal obligations,
        resolve disputes, and enforce our agreements.
      </p>
    ),
  },
  {
    title: "8. Your Rights",
    content: (
      <>
        <p>
          Depending on applicable law, you may have rights concerning your
          personal information, including the right to:
        </p>

        <ul>
          <li>Request access to personal information we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion where legally applicable.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>Ask questions about how your information is being used.</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Children's Privacy",
    content: (
      <p>
        Our website and services are intended for businesses and general
        audiences and are not specifically directed toward children. We do not
        knowingly collect personal information from children where prohibited
        by applicable law.
      </p>
    ),
  },
  {
    title: "10. International Visitors and Export Enquiries",
    content: (
      <p>
        Strap World may receive enquiries from customers, businesses, and
        partners located in different countries. Where personal information is
        transferred or processed across borders, we take reasonable measures to
        handle such information in accordance with applicable privacy and data
        protection requirements.
      </p>
    ),
  },
  {
    title: "11. Links to Other Websites",
    content: (
      <p>
        Our website may contain links to third-party websites or services. We
        are not responsible for the privacy practices, content, security, or
        policies of third-party websites. We encourage you to review their
        privacy policies before providing personal information.
      </p>
    ),
  },
  {
    title: "12. Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our business, website, technology, or applicable legal requirements.
        Any updated version will be published on this page with a revised
        "Last Updated" date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <CommonBanner
        label="LEGAL"
        headingParts={[{text:"Privacy Policy"}]}
        description="Your privacy matters to us. Learn how Strap World collects, uses, protects, and manages your information."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy" },
        ]}
      />

      {/* Content */}
      <MaxWidth className="py-12 lg:py-16">
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

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-[#0B1E2D] md:text-2xl">
              13. Contact Us
            </h2>

            <div className="mt-4 space-y-3 text-[15px] leading-7 text-gray-600 md:text-base">
              <p>
                If you have questions about this Privacy Policy, your personal
                information, or our privacy practices, please contact us.
              </p>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <p className="font-semibold text-[#0B1E2D]">Strap World</p>

                <p className="mt-3">
                  <span className="font-medium text-[#0B1E2D]">Email:</span>{" "}
                  enquiry@strapworld.com
                </p>

                <p>
                  <span className="font-medium text-[#0B1E2D]">Phone:</span>{" "}
                  +91 997 873 5708
                </p>

                <p>
                  <span className="font-medium text-[#0B1E2D]">Location:</span>{" "}
                  Gujarat, India
                </p>
              </div>
            </div>
          </section>
        </div>
      </MaxWidth>
    </main>
  );
}