import Modal from 'react-modal';
import { LargeImage } from './Modal.styled';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.53)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: '0',
  },
};

Modal.setAppElement('#root');

export const ModalGallery = ({ isOpen, toggleModal, largeImageUrl, tags }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      style={customStyles}
      contentLabel="Gallery Modal"
    >
      <LargeImage
        src={largeImageUrl}
        alt={tags}
        width="800"
        onClick={toggleModal}
      />
    </Modal>
  );
};
