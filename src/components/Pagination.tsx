type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages: (number | "...")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else if (currentPage <= 3) {
    pages.push(1, 2, 3, 4, "...", totalPages);
  } else if (currentPage >= totalPages - 2) {
    pages.push(
      1,
      "...",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages
    );
  } else {
    pages.push(
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages
    );
  }

  return (
    <nav
      aria-label="Pagination"
      className="mt-16 flex items-center justify-center gap-2"
    >
      {/* Previous */}
      {currentPage > 1 && (
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-2 text-sm bg-white font-medium text-black/60 transition-colors hover:text-black"
        >
          « Previous
        </button>
      )}

      {/* Pages */}
      {pages.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`dots-${index}`}
              className="px-2 text-sm text-black/40"
            >
              …
            </span>
          );
        }

        const isActive = page === currentPage;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={isActive ? "page" : undefined}
            className={`
              flex h-9 min-w-9 items-center justify-center
              rounded-md px-3
              text-sm font-medium
              transition-all duration-200
              ${
                isActive
                  ? "bg-black text-white"
                  : "text-black/60 bg-white hover:bg-black hover:text-white"
              }
            `}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      {currentPage < totalPages && (
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-2 text-sm bg-white font-medium text-black/60 transition-colors hover:text-black"
        >
          Next »
        </button>
      )}
    </nav>
  );
};

export default Pagination;