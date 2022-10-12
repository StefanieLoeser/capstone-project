import styled from 'styled-components';

export default function YoutubeEmbed({
  embedId,
  collection,
  onSetCollection,
  recordID,
}) {
  function handleRemove(embedId) {
    const collectionCopy = [...collection];
    collectionCopy.forEach((record) => {
      record.videos = record.videos.filter((video) => {
        return video !== embedId;
      });
    });
    onSetCollection(collectionCopy);
  }

  return (
    <>
      <VideoWrapper className="video-responsive">
        <RemoveVideo
          onClick={() =>
            handleRemove(embedId, recordID, collection, onSetCollection)
          }
        >
          x
        </RemoveVideo>
        <iframe
          width="265"
          height="150"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </VideoWrapper>
    </>
  );
}

const VideoWrapper = styled.div`
  margin-top: 0.7rem;
  position: relative;
  width: 100%;
`;

const RemoveVideo = styled.button`
  font-size: 1rem;
  border: none;
  padding: 0.2rem 0.4rem;
  border-radius: 50%;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: white;
  background: none;
`;
