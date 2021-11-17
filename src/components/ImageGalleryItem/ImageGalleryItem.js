import React from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
export default function ImageGalleryItem({
  key,
  url,
  alt,
  onGetImg,
  largeImageURL,
}) {
  return (
    <li
      key={key}
      className={s.ImageGalleryItem}
      onClick={() => {
        onGetImg(largeImageURL, alt);
      }}
    >
      <img
        src={url}
        alt={alt}
        width="200"
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  key: PropTypes.number,
  url: PropTypes.string,
  alt: PropTypes.string,
  onGetImg: PropTypes.func,
  largeImageURL: PropTypes.string,
};
