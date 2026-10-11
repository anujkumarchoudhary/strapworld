import MaxWidth from "@/src/components/layout/MaxWidth";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    Clock3,
    UserRound,
} from "lucide-react";
import { BaseUrl } from "@/src/app/baseurl";


interface BlogItem {
    _id: string;
    title: string;
    slug: string;
    excerpt?: string;
    description: string;
    image?: string;
    category?: string;
    author?: string;
    tags?: string[];
    status?: "draft" | "published";
    createdAt?: string;
    publishedAt?: string;
}

async function getBlog(slug: string): Promise<BlogItem | null> {
    try {
        if (!BaseUrl) {
            console.error("NEXT_PUBLIC_API_URL is not configured.");
            return null;
        }

        const blogUrl = `${BaseUrl}/blogs/slug/${slug}`;

        const response = await fetch(blogUrl, {
            cache: "no-store",
        });
        if (!response.ok) return null;

        const result = await response.json();

        // Supports either { success: true, data: {...} }
        // or a direct blog object.
        const blog = result?.data ?? result;

        if (
            !blog ||
            typeof blog !== "object" ||
            !blog.title ||
            blog.status === "draft"
        ) {
            return null;
        }

        return blog as BlogItem;
    } catch (error) {
        console.error("Failed to fetch blog:", error);
        return null;
    }
}

async function getRecentBlogs(slug: string): Promise<BlogItem[]> {
    try {
        if (!BaseUrl) return [];

        const response = await fetch(
            `${BaseUrl.replace(/\/$/, "")}/blogs`,
            { cache: "no-store" }
        );

        if (!response.ok) return [];

        const result = await response.json();
        const blogs: BlogItem[] = Array.isArray(result?.data)
            ? result.data
            : [];

        return blogs
            .filter(
                (blog) => blog.slug !== slug && blog.status !== "draft"
            )
            .sort(
                (a, b) =>
                    new Date(b.publishedAt || b.createdAt || 0).getTime() -
                    new Date(a.publishedAt || a.createdAt || 0).getTime()
            )
            .slice(0, 4);
    } catch {
        return [];
    }
}

function formatDate(date?: string) {
    if (!date) return "";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) return "";

    return parsedDate.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

// Convert HTML content to readable text for estimating reading time.
function getReadingTime(content: string) {
    const plainText = content.replace(/<[^>]*>/g, " ");
    const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;

    return Math.max(1, Math.ceil(wordCount / 200));
}

export default async function BlogDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const [blog, recentBlogs] = await Promise.all([
        getBlog(slug),
        getRecentBlogs(slug),
    ]);

    if (!blog) {
        return (
            <section className="py-16 md:py-24">
                <MaxWidth>
                    <div className="mx-auto max-w-xl text-center">
                        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#218B55]">
                            Blog not found
                        </p>

                        <h1 className="text-3xl font-bold text-[#101820] md:text-4xl">
                            This article is unavailable
                        </h1>

                        <p className="mt-4 leading-7 text-[#647077]">
                            The article may have been removed or the URL may be incorrect.
                        </p>

                        <Link
                            href="/blogs"
                            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#218B55] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#176D41]"
                        >
                            <ArrowLeft size={17} />
                            Back to Blogs
                        </Link>
                    </div>
                </MaxWidth>
            </section>
        );
    }

    const publishedDate = formatDate(
        blog.publishedAt || blog.createdAt
    );

    return (
        <main className="bg-white py-10 md:py-12 lg:py-20">
            <MaxWidth>
                {/* Breadcrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#647077]"
                >
                    <Link href="/" className="transition hover:text-[#218B55]">
                        Home
                    </Link>

                    <span>/</span>

                    <Link
                        href="/blogs"
                        className="transition hover:text-[#218B55]"
                    >
                        Blogs
                    </Link>

                    <span>/</span>

                    <span className="max-w-[220px] truncate text-[#218B55]">
                        {blog.title}
                    </span>
                </nav>

                {/* 70/30 Layout */}
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[7fr_3fr] lg:gap-12">
                    {/* Left: Blog Details */}
                    <article className="min-w-0">
                        {/* Article Header */}
                        <header className="mb-8">
                            <div className="mb-5 flex flex-wrap items-center gap-3">
                                <span className="rounded-lg bg-[#218B55]/10 px-3 py-2 text-xs font-bold uppercase tracking-wide text-[#218B55]">
                                    {blog.category || "Uncategorized"}
                                </span>

                                {publishedDate && (
                                    <span className="flex items-center gap-2 text-sm text-[#647077]">
                                        <CalendarDays size={16} />
                                        {publishedDate}
                                    </span>
                                )}

                                <span className="flex items-center gap-2 text-sm text-[#647077]">
                                    <Clock3 size={16} />
                                    {getReadingTime(blog.description || "")} min read
                                </span>
                            </div>

                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#101820] md:text-4xl lg:text-5xl">
                                {blog.title}
                            </h1>

                            {blog.excerpt && (
                                <p className="mt-5 text-base leading-7 text-[#647077] md:text-lg md:leading-8">
                                    {blog.excerpt}
                                </p>
                            )}

                            <div className="mt-6 flex items-center gap-3 border-b border-[#647077]/15 pb-6">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#218B55]/10 text-[#218B55]">
                                    <UserRound size={21} />
                                </div>

                                <div>
                                    <p className="text-xs text-[#647077]">Written by</p>
                                    <p className="mt-1 text-sm font-semibold text-[#101820]">
                                        {blog.author || "Editorial Team"}
                                    </p>
                                </div>
                            </div>
                        </header>

                        {/* Featured Image */}
                        {blog.image && (
                            <div className="relative mb-9 aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 70vw"
                                    className="object-cover"
                                />
                            </div>
                        )}

                        {/* Article Content */}
                        <div
                            className="blog-content min-w-0 break-words text-base leading-8 text-[#46515A]"
                            dangerouslySetInnerHTML={{
                                __html: blog.description || "",
                            }}
                        />

                        {/* Tags */}
                        {blog.tags && blog.tags.length > 0 && (
                            <div className="mt-10 border-t border-[#647077]/15 pt-6">
                                <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#101820]">
                                    Article Tags
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-lg border border-[#647077]/20 px-3 py-2 text-sm text-[#647077]"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Back Link */}
                        <div className="mt-10 border-t border-[#647077]/15 pt-6">
                            <Link
                                href="/blogs"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#218B55] transition hover:gap-3"
                            >
                                <ArrowLeft size={17} />
                                Back to all blogs
                            </Link>
                        </div>
                    </article>

                    {/* Right: Sidebar */}
                    <aside className="min-w-0 space-y-6 lg:sticky lg:top-24">
                        {/* Back to Blogs */}
                        <div className="rounded-xl bg-[#218B55] p-6 text-white">
                            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                                Our Blog
                            </p>

                            <h2 className="mt-3 text-2xl font-bold text-[#FFFFFF] leading-snug">
                                Explore more insights
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-white/85">
                                Discover more articles, helpful guides, and the latest
                                industry updates.
                            </p>

                            <Link
                                href="/blogs"
                                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#218B55] transition hover:bg-gray-100"
                            >
                                View All Blogs
                                <ArrowRight size={17} />
                            </Link>
                        </div>

                        {/* Recent Blogs */}
                        <div className="rounded-xl border border-[#647077]/15 bg-white p-5">
                            <h2 className="mb-5 border-b border-[#647077]/15 pb-3 text-lg font-semibold text-[#101820]">
                                Recent Blogs
                            </h2>

                            {recentBlogs.length > 0 ? (
                                <div className="space-y-5">
                                    {recentBlogs.map((item) => (
                                        <Link
                                            key={item._id}
                                            href={`/blogs/${item.slug}`}
                                            className="group flex gap-3"
                                        >
                                            <div className="relative h-[68px] w-[76px] shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                                {item.image && (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        sizes="76px"
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                )}
                                            </div>

                                            <div className="min-w-0">
                                                <p className="mb-1 text-[10px] font-bold uppercase text-[#218B55]">
                                                    {item.category || "Uncategorized"}
                                                </p>

                                                <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-[#101820] transition-colors group-hover:text-[#218B55]">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-1 text-xs text-[#647077]">
                                                    {formatDate(
                                                        item.publishedAt || item.createdAt
                                                    )}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-[#647077]">
                                    No other articles are available yet.
                                </p>
                            )}
                        </div>
                    </aside>
                </div>
            </MaxWidth>

            {/* Article Content Styles */}
            <style>{`
        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4 {
          color: #101820;
          font-weight: 700;
          line-height: 1.35;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .blog-content h1 {
          font-size: 2rem;
        }

        .blog-content h2 {
          font-size: 1.65rem;
        }

        .blog-content h3 {
          font-size: 1.35rem;
        }

        .blog-content p {
          margin-bottom: 1.25rem;
        }

        .blog-content ul,
        .blog-content ol {
          margin: 1.25rem 0;
          padding-left: 1.5rem;
        }

        .blog-content ul {
          list-style-type: disc;
        }

        .blog-content ol {
          list-style-type: decimal;
        }

        .blog-content li {
          margin-bottom: 0.5rem;
          padding-left: 0.25rem;
        }

        .blog-content a {
          color: #218B55;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .blog-content blockquote {
          margin: 1.5rem 0;
          border-left: 4px solid #218B55;
          background: #f5faf7;
          padding: 1rem 1.25rem;
          color: #46515A;
        }

        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.75rem;
          margin: 1.5rem auto;
        }

        .blog-content pre {
          max-width: 100%;
          overflow-x: auto;
          border-radius: 0.75rem;
          background: #101820;
          padding: 1rem;
          color: white;
        }

        .blog-content table {
          display: block;
          width: 100%;
          overflow-x: auto;
          border-collapse: collapse;
          margin: 1.5rem 0;
        }

        .blog-content th,
        .blog-content td {
          border: 1px solid #e5e7eb;
          padding: 0.75rem;
          text-align: left;
        }

        .blog-content th {
          background: #f5faf7;
          color: #101820;
          font-weight: 600;
        }
      `}</style>
        </main>
    );
}