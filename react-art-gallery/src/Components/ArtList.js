// ArtList component
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






// <Grid templateColumns="repeat(4, 1fr)" gap={6}>
// {items.map((item) => (
//   <Box 
//       key={item.id} 
//       borderWidth="1px" 
//       borderRadius="lg" 
//       overflow="hidden"
//       backgroundColor={'#ffd2d0'}
//       boxShadow="md" 
//       transition="transform 0.2s ease-in-out"
//       _hover={{transform: 'scale(1.03)'}}>
//     <Image src={item.imageUrl} alt={item.name} height={'250px'}/>
//     <Box p="4">
//       <Text fontSize="md" fontWeight="bold">
//         {item.name}
//       </Text>
//       <Text fontSize="md" color={'black'}>
//         {item.artist}
//       </Text>
//       <Box mt="2" display="flex" justifyContent="space-between" marginTop='10px'>
          
//           <Button size="xs" fontSize={'smaller'}>Feature</Button>
//           <Button size="xs" fontSize={'smaller'}>Collection</Button>
//       </Box>
//     </Box>
//   </Box>
// ))}
// </Grid>