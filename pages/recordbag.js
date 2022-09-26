import styled from 'styled-components';
import RecordFile from '../components/RecordFile';

export default function RecordBag({
  collectionState,
  // onSetCollectionState,
  // handleChange,
}) {
  console.log(collectionState[0], 'recordbag');
  const selection = collectionState.filter((record) => record.isChecked);
  console.log(selection, 'SELECTION');
  const handleChange = () => {
    console.log('implement me');
  };

  return (
    <>
      <Section>
        <p>Your selected records:</p>
        <Selection>
          {selection.map((file) => (
            <RecordFile
              key={file.CatalogId}
              record={file}
              onHandleChange={handleChange}
            />
          ))}
        </Selection>
      </Section>
    </>
  );
}

const Selection = styled.ul`
  list-style: none;
  position: relative;
  top: 3rem;
  bottom: 3rem;
`;

const Section = styled.section`
  position: relative;
  top: 4rem;
`;
