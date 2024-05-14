import React from "react";
import ArtItem from "./ArtItem";

const ArtList = ({items, toggleFeature, addToCollection}) => {
    return(
       
        <div>
            
            <div className="art-gallery">
                {items.map(item => (
                    <ArtItem key={item.id} item={item} toggleFeature={toggleFeature} addToCollection={addToCollection}/>
                ))}

            </div>
        </div>
       
    );
};

export default ArtList;