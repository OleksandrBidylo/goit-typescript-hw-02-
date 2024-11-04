import React from "react";
import toast, { Toaster } from "react-hot-toast";
import s from "./Header.module.css";

interface SearchBarProps {
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.query.value;
    setQuery(query);
    form.reset();

    if (query === "") {
      toast.error("Type something!");
      return;
    }
  };

  return (
    <div className={s.wrapper}>
      <header>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <Toaster />
    </div>
  );
};

export default SearchBar;
