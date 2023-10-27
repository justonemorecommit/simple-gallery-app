import React, { useRef } from "react";

type FileUploadProps = {
  id: string;
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FileUpload({ id, name, onChange }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        className="hidden"
        id={id}
        accept="image/jpeg, image/png"
        type="file"
        name={name}
        ref={inputRef}
        onChange={onChange}
      />
      <button
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        Upload
      </button>
    </>
  );
}
