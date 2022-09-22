import styled from 'styled-components';
import Head from 'next/head';
import RecordFile from '../components/RecordFile';
import path from 'path';
import fsPromises from 'fs/promises';
import { useState } from 'react';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), './json/data-dummy.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}

export default function Home(props) {
  const collection = props.collection;

  const myCollection = collection.map((file) => {
    return { ...file, isChecked: false };
  });

  const [collectionState, setCollectionState] = useState(myCollection);

  function handleChange(id) {
    const updatedCollection = collectionState.map((file) => {
      if (file.CatalogId === id) {
        file.isChecked = !file.isChecked;
      }
      return file;
    });
    setCollectionState(updatedCollection);
    console.log(collectionState);
  }

  return (
    <>
      <Head>
        <title>RecordBag</title>
      </Head>

      <Main>
        <RecordList>
          {collectionState.map((file) => (
            <RecordFile
              key={file.CatalogId}
              id={file.CatalogId}
              artist={file.Artist}
              title={file.Title}
              label={file.Label}
              format={file.Format}
              released={file.Released}
              condition={file['Collection Media Condition']}
              cover={file.Cover}
              checked={file.isChecked}
              onHandleChange={handleChange}
            />
          ))}
        </RecordList>
      </Main>
    </>
  );
}

const RecordList = styled.ul`
  list-style: none;
`;

const Main = styled.main`
  position: absolute;
  top: 3rem;
`;
