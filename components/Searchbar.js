import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import searchIcon from '../public/assets/icons8-suche-sf-ultralight/icon-search-white-25.png';

export default function Searchbar({ recordID, collection, onSetCollection }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      youtubeURL: '',
    },
    recordID,
  });

  return (
    <SearchBar>
      <form
        onSubmit={handleSubmit((data) =>
          onSubmit(data, recordID, collection, onSetCollection)
        )}
      >
        <SearchInput
          {...register('searchQuery', {
            required: 'This field is required!',
            // pattern: {
            //   value: ,
            //   message: "",
            // },
            minLength: {
              value: 4,
              message: 'I need a longer word...',
            },
            maxLength: {
              value: 200,
              message: 'This is too long!',
            },
          })}
          type="text"
          placeholder="search a record..."
        />
        <SubmitSearch type="submit" value="find" />
        <ErrorMessage>{errors.searchQuery?.message}</ErrorMessage>
      </form>
    </SearchBar>
  );
}

const SearchBar = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-top: 0.5rem;
  z-index: 1;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.1rem 0.1rem;
  border: none;
  border-radius: 3px;
  margin: 0.5rem;
`;

const SubmitSearch = styled.input`
  background: none;
  color: white;
  border: none;
  border-radius: 1px;
  padding: 0.1rem 0.4rem;
  cursor: pointer;
  :hover: 
  background-color: ;
`;

const ErrorMessage = styled.p`
  font-style: italic;
  width: 70%;
  color: grey;
`;
