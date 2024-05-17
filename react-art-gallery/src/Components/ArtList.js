// Not in Use
import React from "react";
import ArtItem from "./ArtItem";
import { Link } from 'react-router-dom';
import { Grid, Box, Image, Text, Button } from '@chakra-ui/react';

const ArtList = ({items, addToCollection}) => {
    return (
        <div className="art-gallery">
            {items.map(item => (
                <Box key={item.id}>
                    <ArtItem 
                        item={item} 
                        addToCollection={addToCollection}
                    />
                    <Button as={Link} to={`/artwork/${item.id}`} size="xs" fontSize={'smaller'}>
                        View Details
                    </Button>    
                </Box> 
            ))}
        </div>
    );
};

export default ArtList;
