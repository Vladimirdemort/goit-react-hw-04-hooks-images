import Button from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/SearchBar/Searchbar';
import React from 'react';
import Loader from 'react-loader-spinner';

import { useState, useEffect } from 'react';

import s from './ImageGallery.module.css';

const MY_KEY = '23677072-ad1f1d27f5221362a9cf8bc21';

function ImageGallery( ) {

  const [imageList, setImageList] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

    setStatus('pending');

    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`Can not find ${query}!`));
      })
      .then(response => {
        setImageList(response.hits);
        setPage(prev => prev + 1);
        setStatus('resolved');
      })
      .catch(error => alert('Ой что-то пошло не так((('))
      .finally(() => setStatus('resolved'));
  }, [query]);

  useEffect(() => {
    window.addEventListener('click', e => {
      if (e.target.nodeName === 'IMG') {
        toggleModal();
      }
    });
  });

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`Can not find ${query}!`));
      })
      .then(response => {
        setImageList(prevState => [...prevState, ...response.hits]);
        setStatus('resolved');
      })
      .catch(error => alert('Ой что-то пошло не так((('))
      .finally(() => setStatus('resolved'));
  };

 
  const searchQuery = imageName => {
    setQuery(imageName);
    setPage(1);
    setImageList([]);
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };
  const setModalImg = (img, alt) => {
    setModalImage({ img: img, alt: alt });
  };

  const imageListComponent = imageList.map(image => {
    const { id, webformatURL, tags, largeImageURL } = image;
    return (
      <>
        
        <ImageGalleryItem
       key={id.toString()}
          url={webformatURL}
          alt={tags}
          largeImageURL={largeImageURL}
          onGetImg={setModalImg}
        />
      </>
    );
  });
  return (
    <>
      <Searchbar onSubmit={searchQuery} />
      <ul className={s.ImageGallery}>{imageListComponent}</ul>
      {imageList.length !== 0 && <Button onClick={loadMore} />}
      {status === 'pending' && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      {showModal && <Modal onGetImg={modalImage} onClose={toggleModal} />}
    </>
  );
}

export default ImageGallery;
