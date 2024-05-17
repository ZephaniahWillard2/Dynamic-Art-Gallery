import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import MainGalleryPage from './Components/MainGalleryPage';
import IndividualArtworkPage from './Components/IndividualArtworkPage';
import FeaturedArtSection from './Components/FeaturedArtSection';



const App = () => {
  


  return (
    <div>
      <header className="App-header" 
        style={{
          display: 'flex', 
          flexDirection: 'row', 
          backgroundColor: 'black',
          padding: '20px'
        }}>
        <h2 style={{ fontSize: '2rem', flex: '1', color:'white'}}>Welcome To The Art Gallery</h2>
        <nav style={{flex: '2', textAlign: 'right', color:'white', marginTop:'auto', marginBottom:'auto'}}>
            Your Collection
        </nav>
      </header>
      <div style={{height:'400px', borderBottom:'solid #b70132 10px'}}>
        <h2 style={{ fontSize: '1.8rem', paddingLeft:"20px", borderBottom:'solid #b70132 10px'}}>Featured Art</h2>
      </div>
      
      <h2 style={{ 
        fontSize: '1.8rem', 
        paddingBottom: '10px', 
        paddingLeft:'20px'
        }}>Gallery
      </h2>
      <div className='Art-gallery' 
      style={{
        backgroundColor:'#c9fdff', 
        height:'900px', 
        overflowY:'auto'
        }}>
        <ChakraProvider>
          <Router>
            <Box p="4">
              <Routes>
                <Route exact path="/" element={<MainGalleryPage />} />
                <Route path="/artwork/:id" element={<IndividualArtworkPage />} />
              </Routes>
            </Box>
          </Router>
        </ChakraProvider>
      </div>
    </div>
  );
}
export default App;





//import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ChakraProvider, Box } from '@chakra-ui/react';
// import MainGalleryPage from './Components/MainGalleryPage';
// import IndividualArtworkPage from './Components/IndividualArtworkPage';
// import FeaturedArtSection from './Components/FeaturedArtSection';

// function App() {

  
  



//   return (
//     <div>
//       <header className="App-header" 
//         style={{
//           display: 'flex', 
//           flexDirection: 'row', 
//           backgroundColor: 'black',
//           padding: '20px'
//         }}>
//         <h2 style={{ fontSize: '2rem', flex: '1', color:'white'}}>Welcome To The Art Gallery</h2>
//         <nav style={{flex: '2', textAlign: 'right', color:'white', marginTop:'auto', marginBottom:'auto'}}>
//             Your Collection
//         </nav>
//       </header>
//       <div style={{height:'400px', borderBottom:'solid #b70132 10px'}}>
//         <h2 style={{ fontSize: '1.8rem', paddingLeft:"20px", borderBottom:'solid #b70132 10px'}}>Featured Art</h2>
//       </div>
      
//       <h2 style={{ 
//         fontSize: '1.8rem', 
//         paddingBottom: '10px', 
//         paddingLeft:'20px'
//         }}>Gallery
//       </h2>
//       <div className='Art-gallery' 
//       style={{
//         backgroundColor:'#c9fdff', 
//         height:'900px', 
//         overflowY:'auto'
//         }}>
//         <ChakraProvider>
//           <Router>
//             <Box p="4">
//               <Routes>
//                 <Route exact path="/" element={<MainGalleryPage />} />
//                 <Route path="/artwork/:id" element={<IndividualArtworkPage />} />
//               </Routes>
//             </Box>
//           </Router>
//         </ChakraProvider>
//       </div>
//     </div>
//   );
// }
//export default App;