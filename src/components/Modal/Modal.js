import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('click', this.onCloseByClick);
    window.addEventListener('keydown', this.onCloseByKedown);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    window.removeEventListener('keydown', this.onCloseByKedown);
  }
  onCloseByClick = e => {
    if (e.target.nodeName === 'DIV') {
      this.props.onClose();
    }
  };
  onCloseByKedown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    const { onGetImg, onClose } = this.props;
    return createPortal(
      <div className={s.Overlay} onClose={onClose}>
        <div className={s.Modal}>
          <img src={onGetImg.img} alt={onGetImg.alt} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;

Modal.propTypes = {
  onGetImg: PropTypes.object,
  onClose: PropTypes.func,
};
