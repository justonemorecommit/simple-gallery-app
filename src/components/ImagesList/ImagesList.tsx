import React from "react";

import { Image } from "../../services/fileUpload";

type ImagesListProps = {
  images: Image[];
};

export function ImagesList({ images }: ImagesListProps) {
  return (
    <div className="grid lg:grid-cols-[repeat(3,1fr)] md:grid-cols-[repeat(2,1fr)] xs:grid-cols-[repeat(1,1fr)]">
      {images.map((image) => (
        <img
          className="w-full"
          key={image.id}
          src={image.url}
          alt={image.name}
        />
      ))}
    </div>
  );
}
