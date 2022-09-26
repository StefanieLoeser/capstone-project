import path from 'path';
import fsPromises from 'fs/promises';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), './json/data-dummy.json');
  const jsonData = await fsPromises.readFile(filePath);
  const collectionData = JSON.parse(jsonData);

  return {
    props: collectionData,
  };
}
