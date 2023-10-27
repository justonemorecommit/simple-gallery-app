import React from "react";

type FileUploadProps = {
  label: string;
  id: string;
  helperText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FileUpload({
  label,
  id,
  helperText,
  onChange,
}: FileUploadProps) {
  return (
    <>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id={id}
        type="file"
        onChange={onChange}
      />
      {helperText && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
      )}
    </>
  );
}
