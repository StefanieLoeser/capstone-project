import styled from 'styled-components';
import RecordFile from '../components/RecordFile';
import useLocalStorage from '../hooks/useLocalStorage';

export default function RecordBag({ onToggleBookmark }) {
  const [collectionState, setCollectionState] = useLocalStorage('_collection');

  return (
    <>
      <Heading>
        <h1>RecordBag</h1>
      </Heading>
      <Section>
        <Text>Your selected records:</Text>
        <Selection>
          {collectionState &&
            collectionState
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
        </Selection>
      </Section>
    </>
  );
}

const Selection = styled.ul`
  list-style: none;
  position: absolute;
  padding: 3rem 1rem;
`;

const Section = styled.section`
  position: relative;
  display: flexbox;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
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
