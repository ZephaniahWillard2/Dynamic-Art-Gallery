// first attempt

import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import ArtList from './Components/ArtList';
import ArtItem from './Components/ArtItem';

//this is the branch


const App = () => {
  const [items, setItems] = useState([
    {id: 1, title: "Lady With Apple", name: "Francis Bacon", isFeatured: false},
    {id: 2, title: "Man With Apple", name: "Francis Bacon", isFeatured: false},
    {id: 3, title: "Boy With Apple", name: "Francis Bacon", isFeatured: false},
    {id: 4, title: "Girl With Apple", name: "Francis Bacon", isFeatured: false},
    {id: 5, title: "Non-Binary Queen With Apple", name: "Francis Bacon", isFeatured: false}
  ]);

  const [collection, setCollection] = useState([]);

  const addToCollection = (item) =>{
    setCollection(...collection, item);
    console.log(`added to collection`)
  };

  const toggleFeature = (item) =>{
    const updatedItems = items.map(artItem =>
      artItem.id === item.id ? {...artItem, isFeatured: !artItem.isFeatured} : artItem
      );
      setItems(updatedItems);
  };




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
                    <Route exact path="/" element={<ArtList items={items} addToCollection={addToCollection} toggleFeature={toggleFeature}/>} />
                    <Route path="/artwork/:id" element={<ArtItem items={items} addToCollection={addToCollection} toggleFeature={toggleFeature}/>} />
                  </Routes>
                </Box>
              </Router>
            </ChakraProvider>
          </div>
        </div>



    // <div className="App">
    //   <header className="App-header">
    //     <h1>Welcome To Your Art Gallery</h1>
    //     <nav>Nav</nav>
    //   </header>
    //   <div className='App-body'>
    //     <h2>Featured Art Work</h2>
    //     <div className='feature-art'>
          
    //     </div>
    //     <h2>Gallery</h2>

    //     <div className='container'>
    //       <ArtList items={items} addToCollection={addToCollection} toggleFeature={toggleFeature}/>
    //     </div>
    //   <footer>
    //   </footer>
    //   </div>
    // </div>
  );
};

export default App; 










// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ChakraProvider, Box } from '@chakra-ui/react';
// import MainGalleryPage from './Components/MainGalleryPage';
// import IndividualArtworkPage from './Components/IndividualArtworkPage';

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

// export default App;















