import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';
import useLocalStorage from '../hooks/useLocalStorage';

function MyApp({ Component, pageProps }) {
  const [collectionState, setCollectionState] = useLocalStorage(
    '_collection',
    []
  );

  const [selectionState, setSelectionState] = useLocalStorage('_selection', []);

  function handleChange(id) {
    const updatedCollection = collectionState.map((file) => {
      if (file.id === id) {
        file.isChecked = !file.isChecked;
      }
      return file;
    });
    setCollectionState(updatedCollection);
    setSelectionState(updatedCollection.filter((record) => record.isChecked));
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          collectionState={collectionState}
          onSetCollectionState={setCollectionState}
          selection={selectionState}
          onSetSelection={setSelectionState}
          onChange={handleChange}
        />
      </Layout>
    </>
  );
}

export default MyApp;
