import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/SearchBar/Searchbar';
import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
    imageName: '',
  };
  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
      </>
    );
  }
}

export default App;
