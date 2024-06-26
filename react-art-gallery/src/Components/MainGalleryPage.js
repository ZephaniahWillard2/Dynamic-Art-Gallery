import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Image, Text, Button } from '@chakra-ui/react';

const artworksData = [
  { id: 1, name: 'Artwork 1', artist: 'Artist A', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg' },
  { id: 2, name: 'Artwork 2', artist: 'Artist B', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg/2560px-The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg' },
  { id: 3, name: 'Artwork 3', artist: 'Artist C', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Claude_Monet_-_Graystaks_I.JPG/1920px-Claude_Monet_-_Graystaks_I.JPG' },
  { id: 4, name: 'Artwork 4', artist: 'Artist D', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Claude_Monet%2C_Le_Grand_Canal.jpg/1920px-Claude_Monet%2C_Le_Grand_Canal.jpg' },
  { id: 5, name: 'Artwork 5', artist: 'Artist E', imageUrl: 'https://via.placeholder.com/300' },
  { id: 6, name: 'Artwork 6', artist: 'Artist F', imageUrl: 'https://via.placeholder.com/300' },
  { id: 7, name: 'Artwork 7', artist: 'Artist G', imageUrl: 'https://via.placeholder.com/300' },
  { id: 8, name: 'Artwork 8', artist: 'Artist H', imageUrl: 'https://via.placeholder.com/300' }
];

const MainGalleryPage = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {artworksData.map((artwork) => (
        <Box 
            key={artwork.id} 
            borderWidth="1px" 
            borderRadius="lg" 
            border="solid thin #cdc4c4"
            overflow="hidden"
            backgroundColor={'#ffd2d0'}
            boxShadow="md" 
            transition="transform 0.2s ease-in-out"
            _hover={{transform: 'scale(1.03)'}}>
          <Image src={artwork.imageUrl} alt={artwork.name} height={'250px'} width={'300px'}/>
          <Box p="4">
            <Text fontSize="md" fontWeight="bold">
              {artwork.name}
            </Text>
            <Text fontSize="md" color={'black'}>
              {artwork.artist}
            </Text>
            <Box mt="2" display="flex" justifyContent="space-between" marginTop='10px'>
                <Button as={Link} to={`/artwork/${artwork.id}`} size="xs" fontSize={'smaller'}>View Details</Button>
                <Button size="xs" fontSize={'smaller'}>Feature</Button>
                <Button size="xs" fontSize={'smaller'}>Collection</Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default MainGalleryPage;
