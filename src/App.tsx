import React, { useState, useEffect } from "react";
import { FileUpload } from "./components/FileInput/FileUpload";
import {
  uploadFile,
  Image,
  searchImages,
  deleteImage,
} from "./services/fileUpload";
import { ImagesList } from "./components/ImagesList";
import { TextInput } from "./components/TextInput";

import "./App.css";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    (async () => {
      const images = await searchImages();
      setImages(images);
    })();
  }, []);

  async function handleUploadChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files[0];

    const nextImage = await uploadFile(file);
    setImages((images) => [...images, nextImage]);
  }

  async function handleKeywordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
    const images = await searchImages(e.target.value);

    setImages(images);
  }

  const imagesCountText = `${images.length} image${
    images.length === 1 ? "" : "s"
  }`;

  async function handleDeleteImage(imageToDelete: Image) {
    await deleteImage(imageToDelete.id);
    setImages(images.filter((image) => image.id !== imageToDelete.id));
  }

  return (
    <div className="p-3">
      <header className="flex items-center">
        <div>
          <TextInput
            name="keyword"
            value={keyword}
            onChange={handleKeywordChange}
          />
        </div>

        <div className="ml-auto">
          <FileUpload
            label="Upload"
            id="inputImageUpload"
            helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
            onChange={handleUploadChange}
          />
        </div>
      </header>
      <main>
        <div className="mb-3">{imagesCountText}</div>

        <ImagesList images={images} onDelete={handleDeleteImage} />
      </main>
    </div>
  );
}

export default App;
