import styled from 'styled-components';
import Head from 'next/head';
import RecordFile from '../components/RecordFile';
import useLocalStorage from '../hooks/useLocalStorage';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';

export async function getServerSideProps({ query }) {
  const userToken = process.env.DISCOGS_USER_TOKEN;
  const userID = process.env.DISCOGS_USER_ID;
  const folderID = process.env.DISCOGS_FOLDER_ID;

  const sort = query.sort ? query.sort : 'added';
  const order = query.order ? query.order : 'desc';

  const collectionItemsByFolderURL =
    'https://api.discogs.com/users/' +
    userID +
    '/collection/folders/' +
    folderID +
    '/releases?sort=' +
    sort +
    '&sort_order=' +
    order;

  const init = {
    headers: {
      'User-Agent': 'MyRecordsPlaylistApp/1.0.0 +http://localhost:3000/',
      Authorization: 'Discogs token=' + userToken,
    },
  };
  const res = await fetch(collectionItemsByFolderURL, init);
  const data = await res.json();

  const myDiscogsCollection = data.releases.map((file) => {
    return { ...file, isChecked: false, videos: [] };
  });

  return { props: { myDiscogsCollection, query } };
}

export default function Collection({
  onToggleBookmark,
  myDiscogsCollection,
  results,
  onSetResults,
}) {
  const [collectionState, setCollectionState] = useLocalStorage(
    '_collection',
    myDiscogsCollection
  );

  return (
    <>
      <Head>
        <title>RekordBag</title>
      </Head>
      <Heading>
        <HeaderWrapper>
          <Searchbar collection={collectionState} onSetResults={onSetResults} />
          <h1>
            <em>collection</em>
          </h1>
        </HeaderWrapper>
      </Heading>
      <CollectionWrapper>
        <CollectionList>
          {results.length !== 0
            ? results.map((file) => (
                <RecordFile
                  key={file.id}
                  record={file}
                  collection={collectionState}
                  onSetCollection={setCollectionState}
                  onToggleBookmark={() =>
                    onToggleBookmark(
                      file.id,
                      collectionState,
                      setCollectionState
                    )
                  }
                />
              ))
            : collectionState.map((file) => (
                <RecordFile
                  key={file.id}
                  record={file}
                  collection={collectionState}
                  onSetCollection={setCollectionState}
                  onToggleBookmark={() =>
                    onToggleBookmark(
                      file.id,
                      collectionState,
                      setCollectionState
                    )
                  }
                />
              ))}
        </CollectionList>
      </CollectionWrapper>
      <Footer />
    </>
  );
}

const CollectionList = styled.ul`
  list-style: none;
  position: absolute;
  padding: 3rem 1rem;
`;

const CollectionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 300px;
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
