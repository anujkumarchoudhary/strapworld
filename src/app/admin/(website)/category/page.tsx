"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import toast from "react-hot-toast";

import { Category, Column } from "@/@core/types/table.type";
import { BaseUrl } from "@/src/app/baseurl";
import DynamicTable from "@/src/components/table/DynamicTable";

const QuillEditor = dynamic(
  () => import("@/src/components/QuillEditor"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[150px] rounded-md border p-3 text-gray-500">
        Loading editor...
      </div>
    ),
  },
);

const Page = () => {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  const getCategories = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${BaseUrl}/categories`);

      setData(res?.data?.data || []);
    } catch {
      toast.error("Failed to fetch categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void getCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createCategory = async () => {
    if (!formData.name.trim()) {
      toast.error("Category name required");
      return;
    }

    try {
      const res = await axios.post(`${BaseUrl}/category`, formData);

      if (res?.data?.success) {
        toast.success("Category created");

        setOpenModal(false);

        setFormData({
          name: "",
          description: "",
        });

        await getCategories();
      } else {
        toast.error(res?.data?.message || "Failed to create category");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "Something went wrong",
        );
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      const res = await axios.delete(`${BaseUrl}/category/delete/${id}`);

      if (res?.data?.success) {
        toast.success("Category deleted");
        await getCategories();
      } else {
        toast.error(res?.data?.message || "Delete failed");
      }
    } catch {
      toast.error("Delete failed");
    }
  };

  const columns: Column<Category>[] = [
    { key: "name", label: "Category" },
    { key: "description", label: "Description" },
  ];

  return (
    <div>
      <DynamicTable
        columns={columns}
        data={filteredData}
        loading={loading}
        emptyMessage="No categories found."
        pagination
        itemsPerPage={10}
        headingText="Category"
        searchPlaceholder="Search Category..."
        handleClick={() => setOpenModal((prev) => !prev)}
        isAction
        isEdit
        isDelete
        onEdit={() => {
          setOpenModal(true);
        }}
        onDelete={(item) => {
          void deleteCategory(item._id);
        }}
      />

      {/* Overlay */}
      {openModal && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpenModal(false)}
        />
      )}

      {/* Right drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-[420px] transform bg-white shadow-xl transition-transform duration-300 ${
          openModal ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full">
          <h4 className="rounded-t-[20px] bg-primary p-4 text-xl font-semibold text-white">
            Create Category
          </h4>

          <div className="flex flex-col gap-4 rounded-b-[20px] p-4">
            <label
              htmlFor="category-name"
              className="text-[16px] font-semibold"
            >
              Name
            </label>

            <input
              id="category-name"
              type="text"
              name="name"
              placeholder="Category Name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-md border p-3 outline-none focus:border-blue-900"
            />

            <label
              htmlFor="category-description"
              className="text-[16px] font-semibold"
            >
              Description
            </label>

            <div id="category-description">
              <QuillEditor
                value={formData.description}
                onChange={(val: string) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: val,
                  }))
                }
              />
            </div>
          </div>

          <div className="absolute bottom-8 flex w-full justify-center gap-3 px-4">
            <button
              type="button"
              aria-label="Cancel"
              onClick={() => setOpenModal(false)}
              className="cursor-pointer rounded-md border px-4 py-2 hover:border-red-600 hover:text-red-600"
            >
              Cancel
            </button>

            <button
              type="button"
              aria-label="Create category"
              onClick={() => void createCategory()}
              className="cursor-pointer rounded-md bg-blue-900 px-4 py-2 text-white hover:bg-[#FB9100]"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;