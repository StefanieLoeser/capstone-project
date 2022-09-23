import styled from 'styled-components';
import RecordFile from '../components/RecordFile';

export default function RecordBag({ selection }) {
  return (
    <>
      <Section>
        <p>Here you will see all your selected records</p>
        <Selection>
          {selection.map((file) => {
            <RecordFile
              key={file.CatalogId}
              record={file}
              onHandleChange={handleChange}
            />;
          })}
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
