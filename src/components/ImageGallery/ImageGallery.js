// import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ListGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ListGallery className="gallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image}></ImageGalleryItem>
      ))}
    </ListGallery>
  );
};
