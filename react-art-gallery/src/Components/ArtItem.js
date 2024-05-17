//Not in Use
import React from "react";
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ArtItem = ({ items }) => {
    const { id } = useParams();
    const item = items.find(item => item.id.toString() === id);

    if (!item) {
        return <div>Artwork not found</div>;
    }

    return (
        <Box className="card" border={'solid'}>
            <Image src={item.imageUrl} alt={item.name} height={'250px'}/>
            <p>{item.title}</p>
            <p>{item.name}</p>
            <Button>Add to Collection</Button>
        </Box>
    );
};


export default ArtItem;

