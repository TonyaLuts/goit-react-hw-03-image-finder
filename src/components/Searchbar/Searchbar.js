import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FormField, FormInput, Header, SearchBtn } from './Searchbar.styled';
import { MdOutlineImageSearch } from 'react-icons/md';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      return toast.error('Please enter your request');
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <FormField className="form" onSubmit={this.handleSubmit}>
          <FormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <SearchBtn type="submit" className="button">
            <span className="button-label">Search</span>
            <MdOutlineImageSearch />
          </SearchBtn>
        </FormField>
      </Header>
    );
  }
}
