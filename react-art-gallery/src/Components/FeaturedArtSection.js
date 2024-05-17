import React from 'react';
import MainGalleryPage from './MainGalleryPage';
import ArtList from './ArtList';

const FeaturedArtSection = ({ featuredArtworks, moveArtworkToFeatured }) => {

  

  
  return (
    <div>
      <h2 style={{ height: '400px', fontSize: '1.8rem', paddingLeft: "20px", borderBottom: 'solid #b70132 10px' }}>Featured Art</h2>
      <div>
        {featuredArtworks.map((items) => (
          <ArtList key={items.id} featuredArtworks={featuredArtworks} moveArtworkToFeatured={moveArtworkToFeatured}/>
          
         
        ))}
      </div>
    </div>
  );
};

export default FeaturedArtSection;



{/* <div key={artwork.id}>
<h3>{artwork.name}</h3>
<p>Artist: {artwork.artist}</p>
<button onClick={() =>  moveArtworkToFeatured(artwork)}>Move to Featured</button>
</div> */}




