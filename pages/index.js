import styled from 'styled-components';
import Head from 'next/head';
import RecordFile from '../components/RecordFile';

export default function Home({ collectionState, onHandleChange }) {
  return (
    <>
      <Head>
        <title>RecordBag</title>
      </Head>
      <Heading>
        <h1>RecordCollection</h1>
      </Heading>
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

const Heading = styled.header`
  background-color: #333333;
  width: 100%;
  height: 48px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  margin: 0;
  z-index: 1;
`;
