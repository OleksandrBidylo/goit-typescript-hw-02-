import React from "react";
import s from "./ImageCard.module.css";

interface Photo {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string | null;
}

interface ImageCardProps {
  photo: Photo;
  openModal: (photo: Photo) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, openModal }) => {
  return (
    <div>
      <img
        className={s.image}
        src={photo.urls.small}
        alt={photo.alt_description ?? "Image"}
        width="220"
        height="180"
        onClick={() => openModal(photo)}
      />
    </div>
  );
};

export default ImageCard;
