import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  function toggleBookmark(id, collectionState, setCollectionState) {
    console.log(collectionState);
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
        <Component {...pageProps} onToggleBookmark={toggleBookmark} />
      </Layout>
    </>
  );
}

export default MyApp;
