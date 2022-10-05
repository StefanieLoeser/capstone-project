import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

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
          onToggleBookmark={toggleBookmark}
          fetcher={fetcher}
        />
      </Layout>
    </>
  );
}

export default MyApp;
