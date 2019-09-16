export default item => {
  const {
    id,
    webformatURL,
    largeImageURL,
    likes,
    views,
    comments,
    downloads,
  } = item;
  return { id, webformatURL, largeImageURL, likes, views, comments, downloads };
};
