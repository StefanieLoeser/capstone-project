import styled from 'styled-components';
import Head from 'next/head';
import RecordFile from '../components/RecordFile';

import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data-dummy.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  // export const getStaticProps = async () => {
  //   return {
  //     props: {
  //       playlistLists: playlist,
  //     },
  //   };
  // };

  return {
    props: objectData,
  };
}

export default function Home(props) {
  const dummyFiles = props.dummyFiles;

  return (
    <>
      <Head>
        <title>RecordBag</title>
      </Head>

      <Main>
        <RecordList>
          {dummyFiles.map((file) => (
            <RecordFile
              key={file.CatalogId}
              artist={file.Artist}
              title={file.Title}
              label={file.Label}
              format={file.Format}
              released={file.Released}
              condition={file['Collection Media Condition']}
              cover={file.Cover}
            />
          ))}
        </RecordList>
      </Main>
    </>
  );
}

const RecordList = styled.ul`
  list-style: none;
`;

const Main = styled.main`
  position: absolute;
  top: 3rem;
`;
