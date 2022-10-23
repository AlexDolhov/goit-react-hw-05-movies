import { fetchImages } from '../api';
import { Container } from 'components/App.styled';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    gallary: [],
    largeImageURL: null,
    isLoadingGallary: false,
    isLoadingImage: false,
    error: null,
  };

  handleSubmit() {
    this.setState();
  }

  async componentDidMount() {
    try {
      // const response = await axios.get('/gallary');
      // console.log(response.data);
      // this.setState({ gallary: response.data });
      this.setState({ isLoadingGallary: true });
      const gallary = await fetchImages('cat', this.page);
      console.log(gallary);
      this.setState({ gallary });
    } catch {
      // console.log(error);
      this.setState({ error: 'Failed to load gallary :(' });
      // toast.error('Failed to load gallary :(');
    } finally {
      this.setState({ isLoadingGallary: false });
    }
  }

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery />
        <Button />
        {/* <Modal /> */}
      </Container>
    );
  }
}
