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
  console.log(collectionState[0], 'myApp');

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          collectionState={collectionState}
          onSetCollectionState={setCollectionState}
        />
      </Layout>
    </>
  );
}

export default MyApp;
