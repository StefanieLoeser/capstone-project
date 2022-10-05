import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
// import { MdOutlineExpandMore } from 'react-icons';
// import { MdExpandLess } from 'react-icons';

export default function RecordFile({ record, onToggleBookmark }) {
  const releaseApiUrl = record.basic_information?.resource_url;
  const [tracklist, setTracklist] = useState([]);

  useEffect(() => {
    fetch(releaseApiUrl)
      .then((response) => response.json())
      .then((data) => setTracklist(data.tracklist))
      .catch((error) => console.error(error));
  }, []);

  const [showTracks, setShowTracks] = useState(false);
  function toggleTracks() {
    setShowTracks(!showTracks);
  }

  return (
    <Record>
      <Cover src={record.basic_information?.thumb} />
      <div>
        <BookmarkIcon
          type="checkbox"
          checked={record.isChecked}
          onChange={onToggleBookmark}
        />
        <RecordDetails>
          <li key={record.id}>
            <strong>{record.basic_information?.artists[0].name}</strong>
          </li>
          <li key={record.instance_id}>
            <em>
              <strong>{record.basic_information?.title}</strong>
            </em>
            , {record.basic_information?.year}
          </li>
          <li key={record.id}>{record.basic_information?.labels[0].name}</li>
        </RecordDetails>
        <TrackInformation
          showTracks={showTracks}
          style={{ display: showTracks ? 'block' : 'none' }}
        >
          {tracklist.map((track) => {
            return (
              <Tracks key={track.position + track.title}>
                {track.position}-
                <strong>
                  {track.artists ? `${track.artists[0].name} -` : ''}
                </strong>
                <em>{track.title}</em>{' '}
                {track.duration ? `(${track.duration} min)` : ''}
              </Tracks>
            );
          })}
        </TrackInformation>
        <ButtonIcon onClick={toggleTracks}>{showTracks ? '+' : 'x'}</ButtonIcon>
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

const TrackInformation = styled(RecordDetails)`
  margin-top: 2rem;
`;

const Tracks = styled.li`
  margin: 0.2rem 0;
`;

const ButtonIcon = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;
