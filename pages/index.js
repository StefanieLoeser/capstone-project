import styled from 'styled-components';
import Head from 'next/head';
import RecordFile from '../components/RecordFile';

export default function Home({ collectionState, onSetCollectionState }) {
  function handleChange(id) {
    console.log(id);
    const updatedCollection = collectionState.map((file) => {
      if (file.CatalogId === id) {
        file.isChecked = !file.isChecked;
      }
      return file;
    });
    onSetCollectionState(updatedCollection);
  }

  return (
    <>
      <Head>
        <title>RecordBag</title>
      </Head>
      <Collection>
        {collectionState.map((file) => (
          <RecordFile
            key={file.CatalogId}
            record={file}
            onHandleChange={handleChange}
          />
        ))}
      </Collection>
    </>
  );
}

const Collection = styled.ul`
  list-style: none;
  position: absolute;
  top: 3rem;
  bottom: 3rem;
`;
