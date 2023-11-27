import { ModalGallery } from 'components/Modal/Modal';
import { Image } from './ImageGalleryItem.styled';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      image: { webformatURL, largeImageURL, tags, id },
    } = this.props;
    return (
      <>
        <li id={id} className="gallery-item" onClick={this.toggleModal}>
          <Image src={webformatURL} alt={tags} width="300" />
        </li>

        <ModalGallery
          isOpen={isModalOpen}
          toggleModal={this.toggleModal}
          largeImageUrl={largeImageURL}
          tags={tags}
        />
      </>
    );
  }
}
