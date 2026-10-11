import Link from "next/link";
import { footerColumns } from "@/src/data/menu";
import CommonBanner from "@/src/components/CommonBanner";
import MaxWidth from "@/src/components/layout/MaxWidth";

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white">
      <CommonBanner
        headingParts={[{text:"Site Map"}]}
        description="Explore all important pages of Strap World, including our products, industries, manufacturing information, company details, and contact information."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Site Map" },
        ]}
      />

      <MaxWidth className="py-12 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => {
            const validLinks = column.links.filter(
              (link) => link.path !== "#"
            );

            if (!validLinks.length) return null;

            return (
              <div
                key={column.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-[#39B972]/40"
              >
                <h2 className="text-lg font-semibold tracking-tight text-[#0B1E2D]">
                  {column.title}
                </h2>

                <ul className="mt-6 space-y-4">
                  {validLinks.map((link) => (
                    <li key={`${column.title}-${link.name}`}>
                      <Link
                        href={link.path}
                        className="group flex items-center gap-3 text-sm text-gray-600 transition-colors duration-200 hover:text-[#39B972]"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#39B972]" />

                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </MaxWidth>
    </main>
  );
}