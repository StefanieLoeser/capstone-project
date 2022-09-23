import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';
import path from 'path';
import fsPromises from 'fs/promises';
import { useState } from 'react';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), './json/data-dummy.json');
  const jsonData = await fsPromises.readFile(filePath);
  const collectionData = JSON.parse(jsonData);

  return {
    props: collectionData,
  };
}

function MyApp({ Component, pageProps, props }) {
  const collection = props.collection;

  const myCollection = collection.map((file) => {
    return { ...file, isChecked: false };
  });

  const [collectionState, setCollectionState] = useState(myCollection);
  const [selection, setSelection] = useState(selectedRecords);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          collectionState={collectionState}
          setCollectionState={setCollectionState}
          selection={selection}
          setSelection={setSelection}
        />
      </Layout>
    </>
  );
}

export default MyApp;
