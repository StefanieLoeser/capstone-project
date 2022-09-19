import styled from 'styled-components';

export default function Header() {
  return (
    <Head>
      <h1>RecordCollection</h1>
    </Head>
  );
}

const Head = styled.header`
  background-color: #333333;
  width: 100%;
  height: 48px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
