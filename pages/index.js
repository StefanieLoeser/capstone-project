import styled from 'styled-components';

import fsPromises from 'fs/promises';
import path from 'path';
import Head from 'next/head';
import RecordFile from '../components/RecordFile';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data-dummy.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

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

      <main>
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
      </main>
    </>
  );
}

const RecordList = styled.ul`
  list-style: none;
`;
