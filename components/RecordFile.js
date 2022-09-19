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
      <p>{artist}</p>
      <p>{title}</p>
      <p>{label}</p>
      <p>{released}</p>
      <p>{format}</p>
      <p>{condition}</p>
    </Record>
  );
}

const Record = styled.li`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 4px 0;
`;

const Cover = styled.img`
  width: 50px;
`;
