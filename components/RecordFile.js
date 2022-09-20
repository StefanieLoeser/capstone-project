import styled from 'styled-components';

export default function RecordFile({
  artist,
  title,
  label,
  released,
  format,
  condition,
  cover,
}) {
  return (
    <Record>
      <Cover src={cover} />
      <div>
        <p>
          <strong>{artist}</strong>
        </p>
        <p>
          <em>
            <strong>{title}</strong>
          </em>
          , {released}
        </p>
        <p>{label}</p>
        <p>{format}</p>
        <p>{condition}</p>
      </div>
    </Record>
  );
}

const Record = styled.li`
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0px 0px 30px 10px rgba(51, 51, 51, 0.1);
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.7rem;
`;

const Cover = styled.img`
  width: 70px;
`;
