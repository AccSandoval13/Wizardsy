import React from "react";

function Gallery(props) {
  const { photos } = props;

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.urls.regular}
          alt={photo.alt_description}
          className="gallery__image"
        />
      ))}
    </div>
  );
}

export default Gallery;
