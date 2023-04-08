import React from 'react';
import Def from '../default';

function Index({ data }) {
  let galleryFormatted = data.gallery.map((gallery) => {
    return (
      <div className="col-sm-4">
        <img src={gallery.pic} alt={gallery.name}/>
      </div>
    );
  });

  return (
    <Def>
      <main>
        <div className="row">
          {galleryFormatted}
        </div>
      </main>
    </Def>
  );
}

export default Index;
