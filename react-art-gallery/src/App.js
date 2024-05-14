import './App.css';
import React, {useState} from 'react';
import ArtList from './Components/ArtList';
// import { ThemeProvider, ColorModeProvider, Th } from "@chakra-ui/react";
// import { ChakraProvider } from '@chakra-ui/react';
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
    
    <div className="App">
      <header className="App-header">
        <h1>Welcome To Your Art Gallery</h1>
        <nav>Nav</nav>
      </header>
      <div className='App-body'>
        <h2>Featured Art Work</h2>
        <div className='feature-art'>
          
        </div>
        <h2>Gallery</h2>

        <div className='container'>
          <ArtList items={items} addToCollection={addToCollection} toggleFeature={toggleFeature}/>


        </div>




      <footer>

      </footer>
      </div>
    </div>
    
  );
};

export default App; 
