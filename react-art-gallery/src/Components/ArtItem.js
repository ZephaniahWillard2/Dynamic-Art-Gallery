//ArtItem
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


//   <Box backgroundColor="#ffd2d0" borderRadius='10px'>
//         <Button as={Link} to="/" mb="4" color='white' backgroundColor='#b70132' _hover={{backgroundColor:'#c9073b'}}>
//             Back to Gallery
//         </Button>
//         <Box borderWidth="1px" borderRadius="lg" overflow="hidden" display="flex">
//             <Image src={item.imageUrl} alt={item.name} />
//             <Box p="4" >
//                 <Text fontSize="lg" fontWeight="bold">
//                     {item.name}
//                 </Text>
//                 <Text fontSize="md" color={'black'} mt="2">
//                     Artist: {item.artist}
//                 </Text>
//                 {/* Add more details about the artwork */}
//                 <Box display="flex" flexDirection="row">
//                     <Text fontSize="md" color={'black'} mt="2">
//                         {item.deets}
//                     </Text>
//                 </Box>
//             </Box>
//         </Box>
//     </Box>