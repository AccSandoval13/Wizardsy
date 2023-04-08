import React, { useEffect, useState } from "react";
import { fetchPhotos } from "../Api";
import Gallery from "./Gallery";

function Content() {
  const [photos, setPhotos] = useState([]);
  const accessKey = `jBT1siUEvaObaNq9XGu2WZNPssmEY8z0zjkdaCk61bA`
  ;

  useEffect(() => {
    fetchPhotos(accessKey).then((photos) => setPhotos(photos));
  }, []);

  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
}

export default Content;
