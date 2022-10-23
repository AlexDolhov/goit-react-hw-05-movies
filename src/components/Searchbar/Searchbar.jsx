import { GrSearch } from 'react-icons/gr';

import { Button, Header, SearchForm, SearchInput } from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <Header>
      <SearchForm>
        <Button type="submit">
          <GrSearch size="18" />
          {/* <Label>Search</Label> */}
        </Button>

        <SearchInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
