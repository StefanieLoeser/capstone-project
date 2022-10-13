import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import searchIcon from '../public/assets/icons8-suche.svg';

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
    <SearchFormWrapper>
      <SearchForm>
        <input
          className="searchInput"
          type="text"
          aria-label="search"
          placeholder="search for a record"
        />
        <button
          className="searchSubmit"
          onSubmit={handleSubmit((data) =>
            onSubmit(data, recordID, collection, onSetCollection)
          )}
          aria-label="submit search"
          type="submit"
        >
          {' '}
          <Image alt="search-button" src={searchIcon} width="12" height="12" />
        </button>
      </SearchForm>
    </SearchFormWrapper>
  );
}

const SearchFormWrapper = styled.div`
  background: transparent;
  width: 30vw;
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
  /* // margin-left: auto; */
  transition: width 450ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  padding: 4px;

  .searchInput {
    border: 0;
    padding: 0.25rem 0.25rem;
    flex-grow: 1;
    outline: 0;
    z-index: 0;
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
    /* color: var(--clr-body); */
  }

  &:focus-within {
    // box-shadow: 0 0 5px var(--clr-primary);
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
        // transform: rotate(1turn);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
      }
    }
  }
`;

// .search:focus-within {
//   // box-shadow: 0 0 5px var(--clr-primary);
//   width: 100%;

//   .search__input {
//     opacity: 1;
//     z-index: initial;
//     cursor: initial;
//     width: calc(100% - var(--size));
//   }

//   .search__submit {
//     background: var(--clr-primary);
//     color: white;
//     box-shadow: 0 0 10px rgba(0,0,0,.15);
//     // transition: transform 500ms ease-out;

//     &:hover,
//     &:focus {
//       outline: 0;
//       // transform: rotate(1turn);
//       box-shadow: 0 0 10px rgba(0,0,0,.65);
//     }
//   }
// }

// const SearchBar = styled.div`
//   display: flex;
//   gap: 0.7rem;
//   margin-top: 0.5rem;
//   z-index: 1;
// `;

// const SearchInput = styled.input`
//   flex-grow: 1;
//   padding: 0.1rem 0.1rem;
//   border: none;
//   border-radius: 3px;
//   margin: 0.5rem;
// `;

// const SubmitSearch = styled.button`
//   background: none;
//   color: white;
//   border: none;
//   border-radius: 1px;
//   padding: 0.1rem 0.1rem;
//   cursor: pointer;
// `;

// const ErrorMessage = styled.p`
//   font-style: italic;
//   width: 70%;
//   color: white;
// `;

{
  /* 
:root {
  --clr-primary: #ee6352;
  --clr-body: #333;
  --clr-bg: #ddd;
}

body {
  font-family: basic-sans, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125em;
  line-height: 1.6;
  color: var(--clr-body);
  background: var(--clr-bg);
} */
}
