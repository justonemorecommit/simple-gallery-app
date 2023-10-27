import React, { useState, useEffect } from "react";
import "./App.css";
import { FileUpload } from "./components/FileInput/FileUpload";
import { uploadFile, Image, searchImages } from "./services/fileUpload";
import { ImagesList } from "./components/ImagesList";

function App() {
  const [images, setImages] = useState<Image[]>([]);

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

  return (
    <div className="p-3">
      <header className="flex">
        <div></div>
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
        <ImagesList images={images} />
      </main>
    </div>
  );
}

export default App;
