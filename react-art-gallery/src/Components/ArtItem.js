import React from "react";
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const ArtItem = ({item, toggleFeature, addToCollection}) => {
    return(
        <Box backgroundColor="#ffd2d0" borderRadius='10px'>
        <Button as={Link} to="/" mb="4" color='white' backgroundColor='#b70132' _hover={{backgroundColor:'#c9073b'}}>
            Back to Gallery
        </Button>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" display="flex">
            <Image src={item.imageUrl} alt={item.name} />
            <Box p="4" >
                <Text fontSize="lg" fontWeight="bold">
                    {item.name}
                </Text>
                <Text fontSize="md" color={'black'} mt="2">
                    Artist: {item.artist}
                </Text>
                {/* Add more details about the artwork */}
                <Box display="flex" flexDirection="row">
                    <Text fontSize="md" color={'black'} mt="2">
                        {item.deets}
                    </Text>
                </Box>
            </Box>
        </Box>
    </Box>
       
    )
}


export default ArtItem;







{/* <div className="card">
<p>{item.title}</p>
<p>{item.name}</p>
<button onClick={() => toggleFeature(item)}>{item.isFeatured ? "Remove" : "Add to Feature"}</button>
<button onClick={() => addToCollection(item)}>Add to Collection</button>


</div> */}