import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ImageModal, Overlay } from './Modal.styled';

export const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, []);

  const handleClose = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleClose}>
      <ImageModal>
        <img src={largeImageURL} alt="" />
      </ImageModal>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
