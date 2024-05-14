import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Text, Button, SimpleGrid, Heading } from '@chakra-ui/react'


const ArtItem = ({item, toggleFeature, addToCollection}) => {
    return(
        <SimpleGrid spacing={40} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
            <Card border={"solid"} >
                <CardHeader>
                    <Heading size='md' ></Heading> 
                    {/* replace heading with image */}
                </CardHeader>
                <CardBody>
                    <Text>{item.title}</Text>
                    <Text>{item.name}</Text>
                </CardBody>
                <CardFooter>
                    <Button onClick={() => toggleFeature(item)}>{item.isFeatured ? "Remove" : "Add to Feature"}</Button>
                    <Button onClick={() => addToCollection(item)}>collection</Button>
                </CardFooter>
            </Card>

           
        </SimpleGrid>
       
    )
}


export default ArtItem;







{/* <div className="card">
<p>{item.title}</p>
<p>{item.name}</p>
<button onClick={() => toggleFeature(item)}>{item.isFeatured ? "Remove" : "Add to Feature"}</button>
<button onClick={() => addToCollection(item)}>Add to Collection</button>


</div> */}