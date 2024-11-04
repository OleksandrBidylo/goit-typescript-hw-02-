import React from "react";
import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Photo } from "../../services/Api";

interface ImageGalleryProps {
  photos: Photo[];
  openModal: (photo: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal }) => {
  return (
    <div className={s.wrapper}>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <ImageCard photo={photo} openModal={() => openModal(photo)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
