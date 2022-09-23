import styled from 'styled-components';
import Head from 'next/head';
import RecordFile from '../components/RecordFile';
// import { useState } from 'react';
// import path from 'path';
// import fsPromises from 'fs/promises';

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), './json/data-dummy.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const collectionData = JSON.parse(jsonData);

//   return {
//     props: collectionData,
//   };
// }

export default function Home({
  setCollectionState,
  setSelection,
  collectionState,
}) {
  // const collection = props.collection;

  // const myCollection = collection.map((file) => {
  //   return { ...file, isChecked: false };
  // });

  // const [collectionState, setCollectionState] = useState(myCollection);
  // const [selection, setSelection] = useState([]);

  // console.log(selection);

  function handleChange(id) {
    const updatedCollection = collectionState.map((file) => {
      if (file.CatalogId === id) {
        file.isChecked = !file.isChecked;
      }
      return file;
    });
    setCollectionState(updatedCollection);
    setSelection(collectionState.filter((record) => record.isChecked));
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
