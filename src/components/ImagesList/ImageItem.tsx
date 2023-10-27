import React from "react";

import { Image } from "../../services/fileUpload";

type ImageItemProps = {
  image: Image;
  onDelete: () => void;
};

export function ImageItem({ image, onDelete }: ImageItemProps) {
  return (
    <div className="w-full group">
      <img className="w-full" src={image.url} alt={image.name} />

      <div className="bg-grey group-hover:block hidden">
        <button onClick={() => onDelete()}>Delete</button>
      </div>
    </div>
  );
}
