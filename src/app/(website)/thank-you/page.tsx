import Link from "next/link";
import MaxWidth from "@/src/components/layout/MaxWidth";
import {
    CheckCircle2,
    ArrowRight,
    Headset,
} from "lucide-react";
import Heading from "@/src/components/common/Heading";

export const metadata = {
    title: "Thank You for Your Enquiry | Strap World",
    description:
        "Thank you for contacting Strap World. Our team will review your enquiry and get back to you soon.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function ThankYouPage() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-white py-16 md:py-20">
            <MaxWidth>
                <div className="mx-auto w-full lg:w-180 text-center">
                    {/* Success Icon */}
                    <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#2E9B4F]/10">
                        <CheckCircle2
                            size={46}
                            strokeWidth={1.7}
                            className="text-[#2E9B4F]"
                        />
                    </div>

                    <Heading
                        isCenter={true}
                        isAccentLine={true}
                        accentColor="#2E9B4F"
                        labelColor="#2E9B4F"
                        label="Enquiry Submitted"
                        headingParts={[{ text: "Thank You for ", color: "#101820" }, { text: "Contacting Us!", color: "#2E9B4F" }]}
                        description="Your enquiry has been received successfully. We appreciate your interest in Strap World. Our team will review your requirements and get back to you as soon as possible."
                    />

                    {/* Information Card */}
                    <div className="mt-9 rounded-2xl border border-[#647077]/15 bg-[#F7FAF8] p-6 text-left sm:p-7">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2E9B4F]/10">
                                <Headset
                                    size={24}
                                    className="text-[#2E9B4F]"
                                />
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold text-[#101820]">
                                    What happens next?
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-[#647077]">
                                    Our team will review your enquiry and contact you
                                    using the details you provided to discuss your
                                    requirements.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#063F3D] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#052F2D]"
                        >
                            Back to Home
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center rounded-full border border-[#647077]/25 px-7 py-3.5 text-sm font-semibold text-[#101820] transition hover:border-[#2E9B4F] hover:text-[#2E9B4F]"
                        >
                            Explore Our Products
                        </Link>
                    </div>

                    {/* Footer Note */}
                    <p className="mt-9 text-sm text-[#647077]">
                        Need assistance?{" "}
                        <Link
                            href="/contact"
                            className="font-semibold text-[#2E9B4F] underline underline-offset-4 hover:text-[#063F3D]"
                        >
                            Contact our team
                        </Link>
                    </p>
                </div>
            </MaxWidth>
        </main>
    );
}