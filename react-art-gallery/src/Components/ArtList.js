import React from "react";
import ArtItem from "./ArtItem";
import { Link } from 'react-router-dom';
import { Grid, Box, Image, Text, Button } from '@chakra-ui/react';

const ArtList = ({items, toggleFeature, addToCollection}) => {
    return(
        <div>
            <div className="art-gallery">
                {items.map(item => (
                <Box>
                    <Box>
                        <ArtItem key={item.id} item={item} toggleFeature={toggleFeature} addToCollection={addToCollection}/>
                    </Box>
                </Box>
                ))}
    
            </div>
        </div> 
       
       
    );
};

export default ArtList;







{/* <Grid templateColumns="repeat(4, 1fr)" gap={6}>
{items.map((item) => (
  <Box 
      key={item.id} 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden"
      backgroundColor={'#ffd2d0'}
      boxShadow="md" 
      transition="transform 0.2s ease-in-out"
      _hover={{transform: 'scale(1.03)'}}>
    <Image src={item.imageUrl} alt={item.name} height={'250px'}/>
    <Box p="4">
      <Text fontSize="md" fontWeight="bold">
        {item.name}
      </Text>
      <Text fontSize="md" color={'black'}>
        {item.artist}
      </Text>
      <Box mt="2" display="flex" justifyContent="space-between" marginTop='10px'>
          <Button as={Link} to={`/item/${item.id}`} size="xs" fontSize={'smaller'}>
              View Details
          </Button>
          <Button size="xs" fontSize={'smaller'}>Feature</Button>
          <Button size="xs" fontSize={'smaller'}>Collection</Button>
      </Box>
    </Box>
  </Box>
))}
</Grid> */}