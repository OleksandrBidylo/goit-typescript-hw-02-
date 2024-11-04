import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchPhotos } from "./services/Api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErorrMessage";

interface Photo {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string | null;
}

const App: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPhoto(null);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchPhotos(page, query);
        setPhotos((prev) => [...prev, ...data.results]);
        setTotalResults(data.total);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (page && query) {
      getData();
    }
  }, [page, query]);

  const handleSetQuery = (newQuery: string) => {
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="App">
      <SearchBar setQuery={handleSetQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ImageGallery photos={photos} openModal={openModal} />
      {photos.length < totalResults && !isLoading && (
        <LoadMoreBtn handleChangePage={handleChangePage} />
      )}
      {selectedPhoto && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          photo={selectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
