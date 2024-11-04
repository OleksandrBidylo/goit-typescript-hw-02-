import React from "react";
import s from "./ImageCard.module.css";
import { Photo } from "../../services/Api";

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
        height="179"
        onClick={() => openModal(photo)}
      />
    </div>
  );
};

export default ImageCard;
