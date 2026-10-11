"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function ImageUpload({
  onUpload,
  existingImage,
}: {
  onUpload: (file: File) => void;
  existingImage?: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(
    existingImage || null
  );

  // Prefill image in edit mode
  useEffect(() => {
    setPreview(existingImage || null);
  }, [existingImage]);

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview((previousPreview) => {
      if (previousPreview?.startsWith("blob:")) {
        URL.revokeObjectURL(previousPreview);
      }

      return imageUrl;
    });

    onUpload(file);
  };

  // Clean up temporary image URLs
  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  // Cloudinary URL is already complete; don't prepend a base URL.
  const imageSrc = preview;

  return (
    <div className="relative rounded-xl bg-[#F8F8F8] p-4">
      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        onChange={handleChange}
        className="hidden"
      />

      <div
        onClick={handleClick}
        className="relative flex h-40 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-400 transition hover:border-black"
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Blog image preview"
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <span className="text-sm text-gray-500">Upload</span>
        )}
      </div>
    </div>
  );
}