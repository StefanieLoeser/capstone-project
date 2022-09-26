import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';
import { useState } from 'react';
import collection from '../json/data-dummy.json';

function MyApp({ Component, pageProps }) {
  const [collectionState, setCollectionState] = useState(() =>
    collection.map((file) => {
      return { ...file, isChecked: false };
    })
  );
  const [selectionState, setSelectionState] = useState([]);

  function handleChange(id) {
    const updatedCollection = collectionState.map((file) => {
      if (file.CatalogId === id) {
        file.isChecked = !file.isChecked;
      }
      return file;
    });
    setCollectionState(updatedCollection);
    setSelectionState(() =>
      collectionState.filter((record) => record.isChecked)
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          collectionState={collectionState}
          onSetCollectionState={setCollectionState}
          selectionState={selectionState}
          onSetSelectionState={setSelectionState}
          onHandleChange={handleChange}
        />
      </Layout>
    </>
  );
}

export default MyApp;
