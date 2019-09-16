import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

class Modal extends Component {
  overlayRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = e => {
    const { onModalClose } = this.props;

    if (e.keyCode === 27) onModalClose();
  };

  handleClick = e => {
    const { onModalClose } = this.props;
    if (e.target === this.overlayRef.current) onModalClose();
  };

  render() {
    const { modalImage } = this.props;
    return (
      <div
        className={styles.overlay}
        onClick={this.handleClick}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
        ref={this.overlayRef}
      >
        <div className={styles.modal}>
          <img src={modalImage} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default Modal;
