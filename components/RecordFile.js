import styled from 'styled-components';

export default function RecordFile({ record, onHandleChange }) {
  return (
    <Record>
      <Cover src={record.basic_information.cover_image} />
      <div>
        <BookmarkIcon
          type="checkbox"
          checked={record.isChecked}
          onChange={() => onHandleChange(record.id)}
        />
        <p>
          <strong>{record.basic_information.artists.name}</strong>
        </p>
        <p>
          <em>
            <strong>{record.basic_information.title}</strong>
          </em>
          , {record.basic_information.year}
        </p>
        {/* <p>{record.labels}</p>
        <p>{record.Format}</p>
        <p>{record['Collection Media Condition']}</p> */}
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

const BookmarkIcon = styled.input`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
