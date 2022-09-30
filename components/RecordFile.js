import styled from 'styled-components';

export default function RecordFile({ record, onChange }) {
  return (
    <Record>
      <Cover src={record.basic_information?.cover_image} />
      <div>
        <BookmarkIcon
          type="checkbox"
          checked={record.isChecked}
          onChange={() => onChange(record.id)}
        />
        <RecordDetails>
          <li>
            <strong>{record.basic_information?.artists[0].name}</strong>
          </li>
          <li>
            <em>
              <strong>{record.basic_information?.title}</strong>
            </em>
            , {record.basic_information?.year}
          </li>
          <li>{record.basic_information?.labels[0].name}</li>
          {/* <li>{record.Format}</li> */}
          {/* <li>{record.notes[0].value}</li> */}
        </RecordDetails>
      </div>
      <div>
        <p></p>
      </div>
    </Record>
  );
}

const Record = styled.li`
  display: grid;
  position: relative;
  grid-template-columns: 25% 75%;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
  width: 95%;
  box-shadow: 0px 0px 30px 10px rgba(51, 51, 51, 0.1);
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.7rem;
`;

const Cover = styled.img`
  width: 70px;
`;

const RecordDetails = styled.ul`
  list-style: none;
  max-width: 85%;
`;

const BookmarkIcon = styled.input`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
