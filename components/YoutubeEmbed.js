import React from 'react';
import styled from 'styled-components';

const YoutubeEmbed = ({ embedId }) => (
  <VideoWrapper className="video-responsive">
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
);

export default YoutubeEmbed;

const VideoWrapper = styled.div`
  margin-top: 0.7rem;
`;
