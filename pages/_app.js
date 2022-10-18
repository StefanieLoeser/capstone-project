import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';
import useLocalStorage from '../hooks/useLocalStorage';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [collectionState, setCollectionState] = useLocalStorage(
    '_collection',
    []
  );

  const [results, setResults] = useState([]);

  function toggleBookmark(id, collectionState, setCollectionState) {
    const updatedCollection = collectionState.map((file) => {
      if (file.id === id) {
        file.isChecked = !file.isChecked;
      }
      return file;
    });
    setCollectionState(updatedCollection);
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          collection={collectionState}
          onSetCollection={setCollectionState}
          onToggleBookmark={toggleBookmark}
          results={results}
          onSetResults={setResults}
        />
      </Layout>
    </>
  );
}

export default MyApp;
