"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { transformDate } from "@/@core/hooks/transformDate";


import axios from "axios";
import { socket } from "@/@core/lib/socket";

import { Column, IBlogColumn } from "@/@core/types/table.type";
import { BaseUrl } from "@/src/app/baseurl";
import Loading from "@/src/components/Loading";
import DynamicTable from "@/src/components/table/DynamicTable";

const Page = () => {
  const router = useRouter();
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState<IBlogColumn[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(10);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const filteredData = data.filter((blog: any) => {
    return (
      blog.postTitle?.toLowerCase().includes(search.toLowerCase()) ||
      blog.slug?.toLowerCase().includes(search.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredData.length / blogsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredData, totalPages]);

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

  const getBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BaseUrl}/blogs`);

      if (res?.status === 200) {
        const blogsArray = Array.isArray(res.data)
          ? res.data
          : res.data?.data || [];

        setData(blogsArray);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, [refresh]);

  // useEffect(() => {
  //   socket.on("new_blog", (data) => {
  //     console.log("🔥 NEW REALTIME BLOG:", data);
  //     setRefresh((prev) => !prev);
  //   });

  //   return () => {
  //     socket.off("new_blog");
  //   };
  // }, []);

  const deleteBlog = async (id: string) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };
      const res = await axios.delete(`${BaseUrl}/blogs/${id}`, config);

      if (res?.status === 200) {
        setData((prev: any) => prev.filter((blog: any) => blog._id !== id));
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const columns: Column<IBlogColumn>[] = [
    { key: "title", label: "Title", width: "55%" },
    {
      key: "category",
      label: "Category",
      render: (item) => item?.category?.name || "-",
      width: "20%",
    },
    {
      key: "createdAt",
      label: "Date",
      render: (item) => transformDate(item?.createdAt) || "-",
    },
  ];

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <DynamicTable<IBlogColumn>
          isAdd={true}
          columns={columns}
          data={filteredData}
          loading={loading}
          emptyMessage="No blogs found."
          pagination
          itemsPerPage={10}
          headingText="Blogs"
          searchPlaceholder="Search By Title or Slug..."
          handleClick={() => router.push("/admin/blog/create")}
          isAction
          isEdit
          isDelete
          onEdit={(item) => {
            router.push(`/admin/blog/${item.slug}`);
          }}
          onDelete={(item) => {
            deleteBlog(item._id);
          }}
        />
      )}
    </div>
  );
};

export default Page;
