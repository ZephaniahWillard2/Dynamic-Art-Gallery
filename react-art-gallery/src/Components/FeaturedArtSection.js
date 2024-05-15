import React from 'react';

const FeaturedArtSection = ({ featuredArtworks, moveArtworkToFeatured }) => {

  
  return (
    <div>
      <h2 style={{ height: '400px', fontSize: '1.8rem', paddingLeft: "20px", borderBottom: 'solid #b70132 10px' }}>Featured Art</h2>
      <div>
        {featuredArtworks.map((artwork) => (
          <div key={artwork.id}>
            <h3>{artwork.name}</h3>
            <p>Artist: {artwork.artist}</p>
            <button onClick={() => moveArtworkToFeatured(artwork)}>Move to Featured</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArtSection;


// <Grid templateColumns="repeat(4, 1fr)" gap={6}>
// {artworksData.map((artwork) => (
//   <Box 
//       key={artwork.id} 
//       borderWidth="1px" 
//       borderRadius="lg" 
//       overflow="hidden"
//       backgroundColor={'#ffd2d0'}
//       boxShadow="md" 
//       transition="transform 0.2s ease-in-out"
//       _hover={{transform: 'scale(1.03)'}}>
//     <Image src={artwork.imageUrl} alt={artwork.name} height={'250px'}/>
//     <Box p="4">
//       <Text fontSize="md" fontWeight="bold">
//         {artwork.name}
//       </Text>
//       <Text fontSize="md" color={'black'}>
//         {artwork.artist}
//       </Text>
//       <Box mt="2" display="flex" justifyContent="space-between" marginTop='10px'>
//           <Button as={Link} to={`/artwork/${artwork.id}`} size="xs" fontSize={'smaller'}>
//               View Details
//           </Button>
//           <Button size="xs" fontSize={'smaller'}>Feature</Button>
//           <Button size="xs" fontSize={'smaller'}>Collection</Button>
//       </Box>
//     </Box>
//   </Box>