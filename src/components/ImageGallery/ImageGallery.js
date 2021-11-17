import Button from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import React from 'react';
import Loader from 'react-loader-spinner';
import s from './ImageGallery.module.css';

class ImageGallery extends React.Component {
  state = {
    mainURL: 'https://pixabay.com/api/',
    secondaryURL: '&image_type=photo&orientation=horizontal&per_page=12',
    key: '23677072-ad1f1d27f5221362a9cf8bc21',
    imageList: [],
    query: '',
    page: 1,
    status: 'idle',
    error: null,

    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImage = prevProps.imageName;
    const nextImage = this.props.imageName;
    if (prevImage !== nextImage) {
      this.setState({ status: 'pending' });
      setTimeout(() => {
        this.setState({ status: 'pending' });
        const changedImageName = nextImage.split(' ').join('+');
        this.setState({ query: changedImageName });
        const { mainURL, secondaryURL, page, key } = this.state;
        fetch(
          `${mainURL}?key=${key}&q=${changedImageName}&${secondaryURL}&page=${page}`,
        )
          .then(res => res.json())
          .then(imageList =>
            this.setState(prev => ({
              imageList: imageList.hits,
              page: prev.page + 1,
              status: 'resolved',
            })),
          );
      }, 1000);
    }
    console.log(this.state.imageList);
  }

  loadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));

    const { mainURL, secondaryURL, query, page, key } = this.state;

    fetch(`${mainURL}?q=${query}&page=${page}&key=${key}${secondaryURL}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(new Error(` Can't find ${query}`));
      })
      .then(response =>
        this.setState(prev => ({
          imageList: [...prev.imageList, ...response.hits],
          status: 'resolved',
        })),
      )
      .catch(error => this.setState({ error }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  setModalImg = (img, alt) => {
    this.setState({ modalImage: { img: img, alt: alt }, showModal: true });
  };
  render() {
    return (
      <>
        <ul className={s.ImageGallery}>
          {this.state.imageList.map(image => {
            const { id, webformatURL, tags, largeImageURL } = image;
            return (
              <>
                <ImageGalleryItem
                  url={webformatURL}
                  key={id}
                  alt={tags}
                  largeImageURL={largeImageURL}
                  onGetImg={this.setModalImg}
                />
              </>
            );
          })}
        </ul>
        {this.state.imageList.length !== 0 && (
          <Button onClick={this.loadMore} />
        )}
        {this.state.status === 'pending' && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {this.state.showModal && (
          <Modal onGetImg={this.state.modalImage} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

export default ImageGallery;
