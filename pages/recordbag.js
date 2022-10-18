import styled from 'styled-components';
import RecordFile from '../components/RecordFile';
import useLocalStorage from '../hooks/useLocalStorage';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';

export default function RecordBag({ onToggleBookmark, results, onSetResults }) {
  const [collectionState, setCollectionState] = useLocalStorage('_collection');

  const numberSelected = collectionState?.filter(
    (record) => record.isChecked
  ).length;

  return (
    <>
      <Heading>
        <HeaderWrapper>
          <Searchbar collection={collectionState} onSetResults={onSetResults} />
          <h1>
            <em>rekordbag</em>
          </h1>
        </HeaderWrapper>
      </Heading>
      <Text>
        You have selected <strong>{numberSelected}</strong> records:
      </Text>
      <SelectionWrapper>
        <SelectionList>
          {results?.length !== 0
            ? results
                .filter((record) => record.isChecked)
                .map((file) => (
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
            : collectionState
                .filter((record) => record.isChecked)
                .map((file) => (
                  <RecordFile
                    key={file.id}
                    record={file}
                    onToggleBookmark={() =>
                      onToggleBookmark(
                        file.id,
                        collectionState,
                        setCollectionState
                      )
                    }
                  />
                ))}
        </SelectionList>
      </SelectionWrapper>
      <Footer />
    </>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 300px;
`;

const SelectionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
`;

const SelectionList = styled.ul`
  list-style: none;
  position: absolute;
  padding: 3rem 1rem;
`;

const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  /* font-weight: bold; */
  font-size: 0.9rem;
  text-align: center;
  position: relative;
  top: 3rem;
  margin-top: 1rem;
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
