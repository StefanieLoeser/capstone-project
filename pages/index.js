import styled from 'styled-components';
import Head from 'next/head';
import RecordFile from '../components/RecordFile';

export default function Home({ collectionState, onHandleChange }) {
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
            onHandleChange={onHandleChange}
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
