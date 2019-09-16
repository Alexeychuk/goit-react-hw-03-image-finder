import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';

import styles from './Gallery.module.css';

const Gallery = ({ images, onModalOpen }) => (
  <ul className={styles.gallery}>
    {images.map(image => (
      <li key={image.id} className="galleryItem">
        <PhotoCard image={image} onModalOpen={onModalOpen} />{' '}
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

export default Gallery;
