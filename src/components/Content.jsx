import React, { useEffect, useState } from "react";
import { fetchPhotos } from "../Api";
import Gallery from "./Gallery";

function Content() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos().then((photos) => setPhotos(photos));
  }, []);

  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
}

export default Content;
