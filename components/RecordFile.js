import { useState } from 'react';
import styled from 'styled-components';
import YouTubeURLForm from './YouTubeURLForm';
import YoutubeEmbed from './YoutubeEmbed';
import Image from 'next/image';
import iconOpenList from '../public/assets/icon_open_list.png';
import iconCloseList from '../public/assets/icon_close_list.png';
import iconShowVideos from '../public/assets/icon-video-player-red.png';
import iconVideoSection from '../public/assets/icon-video-player-grey.png';
import Bookmark from './Bookmark';

export default function RecordFile({
  record,
  collection,
  onSetCollection,
  onToggleBookmark,
}) {
  const releaseApiUrl = record.basic_information?.resource_url;
  const musicVideos = record.videos;
  const [tracklist, setTracklist] = useState([]);

  const [showTracks, setShowTracks] = useState(false);

  function toggleTracks() {
    setShowTracks(!showTracks);
    fetch(releaseApiUrl)
      .then((response) => response.json())
      .then((data) => setTracklist(data.tracklist))
      .catch((error) => console.error(error));
  }

  const [showVideos, setShowVideos] = useState(false);

  function toggleVideos() {
    setShowVideos(!showVideos);
  }

  return (
    <Record>
      <CoverAndButtons>
        <Cover src={record.basic_information?.thumb} />
        <ButtonToggleTracks onClick={toggleTracks}>
          <Icon showTracks={showTracks}>
            <Image
              alt={showTracks ? 'hide tracks' : 'show tracks'}
              src={showTracks ? iconCloseList : iconOpenList}
              layout="responsive"
              width={30}
              height={30}
            />
          </Icon>
        </ButtonToggleTracks>
        <ButtonToggleVideos onClick={toggleVideos}>
          <Icon showVideos={showVideos}>
            {record.videos.length === 0 ? (
              <Image
                alt={showVideos ? 'hide videos' : 'show videos'}
                src={showVideos ? iconCloseList : iconVideoSection}
                layout="responsive"
                width={24}
                height={24}
              />
            ) : (
              <Image
                alt={showVideos ? 'hide videos' : 'show videos'}
                src={showVideos ? iconCloseList : iconShowVideos}
                layout="responsive"
                width={24}
                height={24}
              />
            )}
          </Icon>
        </ButtonToggleVideos>
      </CoverAndButtons>
      <div>
        <BookmarkIcon
          type="checkbox"
          checked={record.isChecked}
          onChange={() =>
            onToggleBookmark(record.id, collection, onSetCollection)
          }
          id={record.id}
          collection={collection}
          onSetCollection={onSetCollection}
          toggleBookmark={onToggleBookmark}
        />
        <RecordDetails>
          <li key={`#${record.id}`}>
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
        <TrackContainer>
          <TrackInformation
            showTracks={showTracks}
            style={{ display: showTracks ? 'block' : 'none' }}
          >
            {tracklist.map((track) => {
              return (
                <Track key={track.position + track.title}>
                  {track.position}-
                  <strong>
                    {track.artists ? `${track.artists[0].name}  -` : ''}
                  </strong>
                  <em>{track.title}</em>{' '}
                  {track.duration ? `(${track.duration} min)` : ''}
                </Track>
              );
            })}
          </TrackInformation>
        </TrackContainer>
      </div>
      <VideoContainer
        showVideos={showVideos}
        style={{ display: showVideos ? 'block' : 'none' }}
      >
        <YouTubeURLForm
          recordID={record.id}
          collection={collection}
          onSetCollection={onSetCollection}
        />
        {musicVideos.map((video) => {
          return (
            <YoutubeEmbed
              recordID={record.id}
              key={video}
              embedId={video}
              collection={collection}
              onSetCollection={onSetCollection}
            />
          );
        })}
      </VideoContainer>
    </Record>
  );
}

const CoverAndButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Icon = styled.div`
  height: 1rem;
  width: 1rem;
`;

const Record = styled.li`
  display: grid;
  position: relative;
  grid-template-columns: 25% 75%;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 1rem;
  width: 300px;
  box-shadow: 0px 0px 30px 10px rgba(51, 51, 51, 0.1);
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.7rem;
`;

const Cover = styled.img`
  width: 60px;
  height: 60px;
  position: relative;
  top: 1px;
  left: 1px;
`;

const RecordDetails = styled.ul`
  list-style: none;
  width: 85%;
`;

const BookmarkIcon = styled(Bookmark)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const TrackInformation = styled(RecordDetails)`
  position: relative;
  min-width: 00px;
  margin-top: 2rem;
  font-size: 11px;
`;

const Track = styled.li`
  margin: 0.2rem 0;
`;

const ButtonToggleTracks = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 2.3rem;
  right: 0.7rem;
  border: none;
  border-radius: 50%;
  padding: 0.2rem;
  background: none;
  color: #333333;
`;

const ButtonToggleVideos = styled(ButtonToggleTracks)`
  top: 3.8rem;
  background: none;
`;

const TrackContainer = styled.div`
  width: 100%;
`;

const VideoContainer = styled(TrackContainer)``;
