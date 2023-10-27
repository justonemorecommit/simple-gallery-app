import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const locationKeyword = searchParams.get("keyword");

  const [keyword, setKeyword] = useState(locationKeyword);
  const [debouncedKeyword, setDebouncedKeyword] = useState(locationKeyword);

  useEffect(() => {
    (async () => {
      const images = await searchImages();
      setImages(images);
    })();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedKeyword(keyword);
      navigate(`?keyword=${keyword}`);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [keyword]);

  useEffect(() => {
    (async () => {
      const images = await searchImages(debouncedKeyword);
      setImages(images);
    })();
  }, [debouncedKeyword]);

  async function handleUploadChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files[0];

    const nextImage = await uploadFile(file);
    setImages((images) => [...images, nextImage]);
  }

  async function handleKeywordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);

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
      <header className="flex items-center mb-5">
        <div>
          <TextInput
            name="keyword"
            value={keyword}
            placeholder="Search images"
            onChange={handleKeywordChange}
          />
        </div>

        <div className="ml-auto">
          <FileUpload id="inputImageUpload" onChange={handleUploadChange} />
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
