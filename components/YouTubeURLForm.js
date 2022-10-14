import React from 'react';
import getVideoId from 'get-video-id';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

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
      youtubeLink: '',
    },
    recordID,
  });

  const onSubmit = (data) => {
    const videoID = getVideoId(data.youtubeLink);
    if (videoID.id && videoID.service === 'youtube') {
      const collectionWithVideos = collection.map((record) => {
        if (
          record.id === recordID &&
          record.videos.includes(videoID.id) === false
        ) {
          record.videos.push(videoID.id);
        }
        return record;
      });
      onSetCollection(collectionWithVideos);
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit((data) =>
          onSubmit(data, recordID, collection, onSetCollection)
        )}
      >
        <InputURL
          {...register('youtubeLink', {
            required: 'This field is required!',
            pattern: {
              value: /^\S+youtube.\S+$/,
              message: "This doesn't seem to be a YouTube-URL.",
            },
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
          placeholder="Enter YouTube-URL"
        />
        <ErrorMessage>{errors.youtubeLink?.message}</ErrorMessage>
        <Submit type="submit" value="add" />
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  gap: 0.7rem;
  margin-top: 0.5rem;
`;

const InputURL = styled.input`
  padding: 0.1rem 0.2rem;
  border: none;
  /* box-shadow: 0px 0px 5px 1px rgba(51, 51, 51, 0.3); */
  border: 1px solid #c7c7c7;
  border-radius: 2px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.6rem;
  /* width: 200px; */
`;

const Submit = styled.input`
  background-color: red;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.2rem 0.4rem;
`;

const ErrorMessage = styled.p`
  font-style: italic;
  width: 50%;
  color: grey;
`;
