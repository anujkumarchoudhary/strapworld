"use client";

import { useState, useEffect } from "react";

import { IoIosArrowForward, IoIosArrowBack, IoIosSearch } from "react-icons/io";
import { HiMiniPlus, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { CiFilter } from "react-icons/ci";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

import { DynamicTableProps } from "@/@core/types/table.type";
import Loading from "../Loading";

function DynamicTable<T extends { _id: string }>({
  isAdd,
  columns,
  data,
  loading,
  headingText,
  searchPlaceholder,
  emptyMessage = "No data found",
  pagination = false,
  itemsPerPage = 5,
  handleClick,
  isAction = false,
  isEdit = false,
  isDelete = false,
  onEdit,
  onDelete,
}: DynamicTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const filteredData = data.filter((item) =>
    columns.some((col) => {
      const value = item[col.key as keyof T];

      if (value == null) return false;

      return String(value).toLowerCase().includes(search.toLowerCase());
    }),
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;

  const currentData = pagination
    ? filteredData.slice(indexOfFirstItem, indexOfLastItem)
    : filteredData;

  if (loading) return <Loading />;

  const finalColumns = isAction
    ? [...columns, { key: "actions", label: "Action" }]
    : columns;

  const gridTemplateColumns = finalColumns
    .map((col) => col.width || "minmax(120px, 1fr)")
    .join(" ");

  return (
    <div className="min-w-0 w-full rounded-xl bg-white px-3 pt-5 pb-5 shadow sm:px-5 lg:px-10 lg:pb-10">
      {/* TABLE TITLE AND CONTROLS */}
      <div className="mb-4 flex justify-between">
        <h2 className="text-lg font-semibold">{headingText}</h2>

        <div className="flex justify-end">
          <div className="flex w-fit flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            {/* SEARCH INPUT */}
            {showSearch && (
              <div className="flex w-full items-center overflow-hidden rounded-full border border-black/10 bg-[#f8f8f8] transition-all duration-300 sm:w-64 lg:w-80">
                <input
                  type="text"
                  placeholder={searchPlaceholder || "Search..."}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full min-w-0 bg-transparent px-4 py-2 text-sm outline-none"
                />
              </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                aria-label={showSearch ? "Hide search input" : "Show search input"}
                onClick={() => setShowSearch((prev) => !prev)}
                className="group flex cursor-pointer items-center rounded-full border border-black/10 bg-[#f8f8f8] p-2 transition hover:bg-primary"
              >
                <IoIosSearch
                  size={20}
                  className="text-black transition group-hover:text-white"
                />
              </button>

              <button
                type="button"
                aria-label="Filter table data"
                className="group flex cursor-pointer items-center rounded-full border border-black/10 bg-[#f8f8f8] p-2 transition hover:bg-primary"
              >
                <CiFilter
                  size={20}
                  className="text-black transition group-hover:text-white"
                />
              </button>

              <button
                type="button"
                aria-label="Adjust table columns"
                className="group flex cursor-pointer items-center rounded-full border border-black/10 bg-[#f8f8f8] p-2 transition hover:bg-primary"
              >
                <HiOutlineAdjustmentsHorizontal
                  size={20}
                  className="text-black transition group-hover:text-white"
                />
              </button>

              {isAdd && (
                <button
                  type="button"
                  aria-label={`Add new ${headingText}`}
                  onClick={handleClick}
                  className="group flex cursor-pointer items-center rounded-full border border-black/10 bg-[#f8f8f8] p-2 transition hover:bg-primary"
                >
                  <HiMiniPlus
                    size={20}
                    className="text-black transition group-hover:text-white"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div
        className={`min-w-0 w-full rounded-xl ${currentData.length > 0 ? "shadow-md" : "shadow-none"
          }`}
      >
        {currentData.length > 0 ? (
          <>
            {/* HORIZONTAL SCROLL CONTAINER: MOBILE */}
            <div
              className="w-full overflow-x-auto overscroll-x-contain rounded-xl"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {/* Minimum width enables horizontal swiping on mobile */}
              <div className="min-w-[600px]">
                {/* TABLE HEADER */}
                <div className="bg-[#f8f8f8] px-6 py-3.5 text-sm font-semibold uppercase text-black">
                  <div
                    className="grid w-full items-center gap-6"
                    style={{ gridTemplateColumns }}
                  >
                    {finalColumns.map((col, i) => (
                      <div
                        key={i}
                        className={
                          col.key === "actions" ? "text-right" : "min-w-0"
                        }
                      >
                        {col.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* TABLE BODY */}
                {currentData.map((item) => (
                  <div
                    key={item._id}
                    className="grid items-center gap-6 border-t border-t-[#000000]/10 px-6 py-3 hover:bg-blue-50"
                    style={{ gridTemplateColumns }}
                  >
                    {finalColumns.map((col, i) => {
                      if (col.key === "actions") {
                        return (
                          <div
                            key={i}
                            className="relative flex justify-end"
                          >
                            {/* THREE-DOT ACTION MENU */}
                            <button
                              type="button"
                              aria-label="Open action menu"
                              aria-expanded={openDropdown === item._id}
                              onClick={() =>
                                setOpenDropdown(
                                  openDropdown === item._id ? null : item._id,
                                )
                              }
                              className="mr-2.5 rounded-full p-2 hover:bg-gray-200"
                            >
                              <BsThreeDots size={18} />
                            </button>

                            {/* EDIT / DELETE DROPDOWN */}
                            {openDropdown === item._id && (
                              <div className="absolute right-0 top-10 z-50 w-28 rounded-lg border bg-white shadow-lg">
                                {isEdit && (
                                  <button
                                    type="button"
                                    aria-label={`Edit ${headingText} ${item._id}`}
                                    onClick={() => {
                                      onEdit?.(item);
                                      setOpenDropdown(null);
                                    }}
                                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
                                  >
                                    <FiEdit />
                                    Edit
                                  </button>
                                )}

                                {isDelete && (
                                  <button
                                    type="button"
                                    aria-label={`Delete ${headingText} ${item._id}`}
                                    onClick={() => {
                                      onDelete?.(item);
                                      setOpenDropdown(null);
                                    }}
                                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                  >
                                    <FiTrash2 />
                                    Delete
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      }

                      return (
                        <div key={i} className="min-w-0 truncate">
                          {col.render
                            ? col.render(item)
                            : String(item[col.key as keyof T] ?? "-")}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="px-4 py-16 text-center text-gray-500">
            {search ? "No matching results found" : emptyMessage}
          </div>
        )}

        {/* PAGINATION — OUTSIDE THE SCROLL CONTAINER */}
        {pagination && totalPages > 1 && (
          <div className="flex justify-between gap-3 border-t border-t-[#000000]/10 bg-[#f8f8f8] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-xs text-gray-600 sm:text-sm my-auto">
              Showing {indexOfFirstItem + 1} -{" "}
              {Math.min(indexOfLastItem, totalItems)} of {totalItems}
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous page"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-full bg-primary p-2 text-white disabled:opacity-50"
              >
                <IoIosArrowBack />
              </button>

              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>

              <button
                type="button"
                aria-label="Next page"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded-full bg-primary p-2 text-white disabled:opacity-50"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DynamicTable;