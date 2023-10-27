import React from "react";
import { ImageItem } from "./ImageItem";
import { Image } from "../../services/fileUpload";

type ImagesListProps = {
  images: Image[];
  onDelete: (image: Image) => void;
};

export function ImagesList({ images, onDelete }: ImagesListProps) {
  return (
    <div className="grid lg:grid-cols-[repeat(3,1fr)] md:grid-cols-[repeat(2,1fr)] xs:grid-cols-[repeat(1,1fr)]">
      {images.map((image) => (
        <ImageItem
          key={image.id}
          image={image}
          onDelete={() => onDelete(image)}
        />
      ))}
    </div>
  );
}
