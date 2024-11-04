import React from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleChangePage: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleChangePage }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={handleChangePage}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
