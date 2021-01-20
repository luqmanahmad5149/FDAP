import React from "react";
import "../../App.css";
import Iframe from "react-iframe";

export default function Products() {
  return (
    <>
      <div className="products">
        <h1 className="products_title">Product Demonstration </h1>
        <Iframe
          url="https://www.youtube.com/embed/z-iK6ax5Rj4"
          display="initial"
          position="relative"
          width="80%"
          id="myId"
          height="80%"
          className="youtube_link"
        />
      </div>
    </>
  );
}
