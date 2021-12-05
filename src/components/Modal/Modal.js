import { useEffect } from 'react';
import React from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onGetImg, onClose }) {

 
  const onCloseByClick = e => {
    if (e.target.nodeName === 'DIV') {
      onClose();
    }
  };
  const onCloseByKedown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
 useEffect(() => {
    window.addEventListener('click', onCloseByClick);
    window.addEventListener('keydown', onCloseByKedown);
    return () => {
      window.removeEventListener('keydown', onCloseByKedown);
    };
  }, []);
  return createPortal(
    <div className={s.Overlay} onClose={onClose}>
      <div className={s.Modal}>
        <img src={onGetImg.img} alt={onGetImg.alt} />
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;

Modal.propTypes = {
  onGetImg: PropTypes.object,
  onClose: PropTypes.func,
};
