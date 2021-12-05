import ImageGallery from 'components/ImageGallery/ImageGallery';
// import Searchbar from 'components/SearchBar/Searchbar';
import React from 'react';
// import { useState } from 'react';


import './App.css';

function App() {
   
//   const [imageName, setImageName] = useState('')

//  const handleFormSubmit = imageName => {
//     setImageName(imageName)
//   };

  
    return (
      <>
        {/* <Searchbar onSubmit={handleFormSubmit} /> */}
        <ImageGallery />
      </>
    );
  
}

export default App;
