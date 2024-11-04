import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

interface Photo {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string | null;
}

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  photo: Photo | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  photo,
}) => {
  if (!photo) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modalContent}
      overlayClassName={s.modalOverlay}
    >
      <div>
        <img
          src={photo.urls.regular}
          alt={photo.alt_description ?? "Image"}
          width={700}
          height={800}
          className={s.modalImage}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
