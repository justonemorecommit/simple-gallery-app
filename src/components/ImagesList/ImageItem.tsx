import React from "react";

import { Image } from "../../services/fileUpload";

type ImageItemProps = {
  image: Image;
  onDelete: () => void;
};

export function ImageItem({ image, onDelete }: ImageItemProps) {
  return (
    <div
      className="w-full group relative"
      style={{
        minWidth: image.width,
        minHeight: image.height,
      }}
    >
      <img className="w-full" src={image.url} alt={image.name} />

      <caption className="absolute left-1 top-1 z-10 bg-pink-500 border-rounded text-white p-1 text-xs rounded-md">
        {image.name}
      </caption>

      <div className="bg-grey w-full h-0 p-0 group-hover:h-[40px] group-hover:p-1 transition-all ease-in-out delay-800 flex absolute bottom-0 flex justify-center bg-[rgba(10,10,10,0.2)]">
        <button
          className="text-white m-0 p-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 text-center"
          onClick={() => onDelete()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
