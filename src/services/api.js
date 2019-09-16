import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
// `/?image_type=photo&orientation=horizontal&q=cat&page=${this.state.pageNumber}&per_page=12&key=${process.env.API_KEY}`;

export default (pageNumber, query = '') => {
  return axios
    .get(
      `/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=13633512-2e4920fb59ca05e5eb038b80e`,
    )
    .then(response => response.data.hits)
    .catch(err => console.log(err));
};
