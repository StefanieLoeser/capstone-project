import styled from 'styled-components';
import Image from 'next/image';
import searchIcon from '../public/assets/icons8-suche.svg';
import { useState } from 'react';

export default function Searchbar({ collection }) {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const searchTerm = event.target.searchRecord.value.trim();
    console.log(searchTerm);
    // setQuery(searchTerm);
    // const filteredCollection = collection.filter((query) => {
    //   return query.toLowerCase().includes(searchTerm.toLowerCase());
    // });
    // if (searchTerm === '') {
    //   setResults([]);
    // } else {
    //   setResults(filteredCollection);
    // }
  }

  return (
    <SearchFormWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <input
          className="searchInput"
          id="searchRecord"
          name="searchRecord"
          maxLength="100"
          type="text"
          aria-label="search"
          placeholder="search for a record"
        />
        <button
          className="searchSubmit"
          aria-label="submit search"
          type="submit"
          id="searchRecord"
        >
          {' '}
          <Image alt="search-button" src={searchIcon} width="12" height="12" />
        </button>
      </SearchForm>
      {/* <ErrorMessage>{errors.youtubeURL?.message}</ErrorMessage> */}
    </SearchFormWrapper>
  );
}

const ErrorMessage = styled.p`
  font-style: italic;
  width: 70%;
  color: white;
`;

const SearchFormWrapper = styled.div`
  background: transparent;
  width: 45vw;
  padding: 0.3em;
  position: relative;
`;

const SearchForm = styled.form`
  --size: 1.5rem;
  border: 1px solid white;
  display: flex;
  border-radius: 100px;
  overflow: hidden;
  font-size: 0.6em;
  position: relative;
  left: -1rem;

  width: var(--size);
  height: var(--size);
  transition: width 450ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  padding: 4px;

  .searchInput {
    border: 0;
    padding: 0.25rem 0.25rem;
    flex-grow: 1;
    outline: 0;
    z-index: 2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: transparent;
    opacity: 0;
    color: white;
    cursor: pointer;
  }

  .searchSubmit {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    margin-left: auto;
    background: 0;
    border: 0;
    cursor: pointer;
    border-radius: 50%;
    transition: background 200ms ease-out;
    width: calc(var(--size) - 10px);
    height: calc(var(--size) - 10px);
  }

  &:focus-within {
    width: 100%;

    .searchInput {
      opacity: 1;
      z-index: initial;
      cursor: initial;
      width: calc(100% - var(--size));
    }

    .searchSubmit {
      color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

      transition: transform 500ms ease-out;

      :hover,
      :focus {
        outline: 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
      }
    }
  }
`;
