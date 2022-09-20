import styled from 'styled-components';

export default function Header() {
  return (
    <Heading>
      <h1>RecordCollection</h1>
    </Heading>
  );
}

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
`;
