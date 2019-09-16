import React, { Component } from 'react';
import styles from './App.module.css';
import getImages from '../../services/api';
import mapper from '../../helpers/mapper';

import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';

export default class App extends Component {
  state = {
    images: [],
    query: null,
    pageNumber: 1,
    modalImage: false,
  };

  componentDidMount() {
    const { pageNumber } = this.state;
    getImages(pageNumber)
      .then(data => {
        this.setState({ images: data.map(mapper) });
      })
      .catch(err => console.log(err));
  }

  onSubmit = query => {
    const { pageNumber } = this.state;

    this.setState({ query, pageNumber: 1 }, () => {
      getImages(pageNumber, query)
        .then(data => {
          this.setState({ images: data.map(mapper) });
          window.scrollTo();
        })
        .catch(err => console.log(err));
    });
  };

  onModalOpen = image => {
    this.setState({ modalImage: image });
  };

  onModalClose = () => {
    this.setState({ modalImage: null });
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({ pageNumber: prevState.pageNumber + 1 }),
      () => {
        const { pageNumber, query, images } = this.state;
        getImages(pageNumber, query)
          .then(data => {
            this.setState({
              images: [...images, ...data.map(mapper)],
            });
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            });
          })
          .catch(err => console.log(err));
      },
    );
  };

  render() {
    const { images, modalImage } = this.state;

    return (
      <div className={styles.app}>
        <SearchForm onSubmit={this.onSubmit} />
        <Gallery images={images} onModalOpen={this.onModalOpen} />
        {modalImage && (
          <Modal modalImage={modalImage} onModalClose={this.onModalClose} />
        )}

        <button
          type="button"
          className={styles.button}
          onClick={this.handleLoadMore}
        >
          Load more
        </button>
      </div>
    );
  }
}
