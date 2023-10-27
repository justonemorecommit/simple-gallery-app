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
      <input className="hidden" id={id} type="file" onChange={onChange} />
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById(id).click()}
      >
        Upload
      </button>
    </>
  );
}
