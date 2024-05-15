import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const artworksData = [
  { id: 1, name: 'Artwork 1', artist: 'Artist A', deets: 'deets', imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Artwork 2', artist: 'Artist B', deets: 'deets', imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Artwork 3', artist: 'Artist C', deets: 'deets', imageUrl: 'https://via.placeholder.com/300' },
  { id: 4, name: 'Artwork 4', artist: 'Artist D', deets: 'deets', imageUrl: 'https://via.placeholder.com/300' },
  { id: 5, name: 'Artwork 5', artist: 'Artist E', deets: 'deets', imageUrl: 'https://via.placeholder.com/300' },
  { id: 6, name: 'Artwork 6', artist: 'Artist F', deets: 'deets', imageUrl: 'https://via.placeholder.com/300' },
  { id: 7, name: 'Artwork 7', artist: 'Artist G', deets: 'deets', imageUrl: 'https://via.placeholder.com/300' },
  { id: 8, name: 'Artwork 8', artist: 'Artist H', deets: 'deets', imageUrl: 'https://via.placeholder.com/300' }

  // Add more artworks as needed
];

const IndividualArtworkPage = () => {
  const { id } = useParams();
  const artwork = artworksData.find((artwork) => artwork.id === parseInt(id));

  if (!artwork) {
    return <Box>Artwork not found</Box>;
  }

  return (
    <Box backgroundColor="#ffd2d0" borderRadius='10px'>
        <Button as={Link} to="/" mb="4" color='white' backgroundColor='#b70132' _hover={{backgroundColor:'#c9073b'}}>
            Back to Gallery
        </Button>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" display="flex">
            <Image src={artwork.imageUrl} alt={artwork.name} />
            <Box p="4" >
                <Text fontSize="lg" fontWeight="bold">
                    {artwork.name}
                </Text>
                <Text fontSize="md" color={'black'} mt="2">
                    Artist: {artwork.artist}
                </Text>
                {/* Add more details about the artwork */}
                <Box display="flex" flexDirection="row">
                    <Text fontSize="md" color={'black'} mt="2">
                        {artwork.deets}
                    </Text>
                </Box>
            </Box>
        </Box>
    </Box>

  );
};

export default IndividualArtworkPage;
