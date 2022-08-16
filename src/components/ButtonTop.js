import React, { useState } from "react";
import "../App.css";

const ButtonTop = () => {
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", () => {
    const { scrollTop } = document.documentElement;

    if (scrollTop >= 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  const goTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={goTop}
      className={show ? "btn-scrollToTop showArrowUp" : "btn-scrollToTop"}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  );
};

export default ButtonTop;
