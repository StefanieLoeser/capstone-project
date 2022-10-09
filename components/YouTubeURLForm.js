import React from 'react';
import getVideoId from 'get-video-id';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import YoutubeEmbed from './YoutubeEmbed';

export default function YouTubeURLForm({
  recordID,
  collection,
  onSetCollection,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      youtubeURL: '',
    },
    recordID,
  });

  const onSubmit = (data, recordID) => {
    const videoID = getVideoId(data.youtubeURL);
    // if (videoID.id && videoID.service === 'youtube') {
    // }
    console.log(recordID, 'recordID');
    console.log(collection, 'collection');
    const collectionWithVideos = collection.map((record) => {
      if (record.id === recordID) {
        record.videos.push(videoID);
      }
      return file;
    });
    onSetCollection(collectionWithVideos);
    console.log(collectionWithVideos);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit, recordID, collection, onSetCollection)}
      >
        <InputURL
          {...register('youtubeURL', {
            required: 'This field is required!',
            minLength: {
              value: 11,
              message: 'A Video-ID has 11 characters, a URL is even longer.',
            },
            maxLength: {
              value: 200,
              message: 'Your URL is too long!',
            },
          })}
          type="text"
          placeholder="YouTube-URL or Video-ID"
        />
        <Submit type="submit" value="add" />
        <ErrorMessage>{errors.youtubeURL?.message}</ErrorMessage>
      </form>
      {/* {record.videos.length !== 0 ?
      {videos.map((video) => {
        return <YoutubeEmbed embedId={getVideoId(video)} />
 })} : null } */}
      {/* <YoutubeEmbed embedID="oMhs8e12z_Q" /> */}
    </>
  );
}

const Submit = styled.input`
  background-color: red;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
  margin: 0.5rem 0.7rem;
`;

const InputURL = styled.input`
  padding: 0.2rem;
  border: none;
  box-shadow: 0px 0px 5px 1px rgba(51, 51, 51, 0.3);
  font-family: 'Open Sans', sans-serif;
  font-size: 0.7rem;
`;

const ErrorMessage = styled.p`
  font-style: italic;
  width: 70%;
  color: grey;
`;
