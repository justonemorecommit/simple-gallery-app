export type Image = {
  id: number;
  name: string;
  url: string;
  width: number;
  height: number;
};

const getNextId = (() => {
  let nextId = 1;

  return () => {
    return nextId++;
  };
})();

function generateRandomImage() {
  const id = getNextId();
  return {
    id,
    url: "https://picsum.photos/id/" + id + "/200/300",
    name: "Random image " + id,
    width: 200,
    height: 300,
  };
}

const mockImagesDB: Image[] = [...Array(12)].map(() => generateRandomImage());

export async function uploadFile(file: File) {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const image: Image = {
    id: getNextId(),
    url: "https://picsum.photos/200/120",
    name: file.name,
    width: 200,
    height: 300,
  };

  mockImagesDB.push(image);

  return image;
}

export async function deleteImage(imageId: number) {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const imageIndex = mockImagesDB.findIndex((image) => image.id === imageId);

  if (imageIndex === -1) {
    throw new Error("Image not found");
  }

  mockImagesDB.splice(imageIndex, 1);

  return true;
}

export async function searchImages(keyword: string = "") {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (!keyword) return [...mockImagesDB];

  const images = mockImagesDB.filter((image) =>
    image.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return images;
}
