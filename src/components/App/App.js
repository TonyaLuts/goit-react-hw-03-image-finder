import { fetchGallery } from 'components/utils/api';
import { Component } from 'react';
import { SearchBar } from '../Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    loadMore: false,
    modal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    try {
      if (
        prevState.query !== this.state.query ||
        prevState.page !== this.state.page
      ) {
        this.setState({ isLoading: true }); // images: []

        const initialGallery = await fetchGallery(query, page);
        if (initialGallery.totalHits === 0) {
          toast.error(`Nothing was found for the request "${query}"`);
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...initialGallery.hits],
          loadMore: page < Math.ceil(initialGallery.totalHits / 12),
        }));
        this.setState({ isLoading: false });
        // console.log(initialGallery);
        // console.log(initialGallery.hits);
      }
    } catch (error) {
      toast.error('Something went wrong. Try the request again');
      this.setState({ isLoading: false });
    }
  }

  handleFormSubmit = query => {
    this.setState({ query, page: 1, images: [], loadMore: false });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, query, isLoading, loadMore } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit}></SearchBar>
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery query={query} images={images}></ImageGallery>
        )}
        {loadMore && <Button onClick={this.handleLoadMore}></Button>}
        <GlobalStyle />
        <Toaster />
      </Container>
    );
  }
}
