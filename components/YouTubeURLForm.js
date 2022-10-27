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
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      youtubeLink: '',
    },
    recordID,
  });

  const onSubmit = (data) => {
    const videoID = getVideoId(data.youtubeVideoUrl);
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
      resetField('youtubeVideoUrl');
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit((data) =>
          onSubmit(data, recordID, collection, onSetCollection)
        )}
      >
        <InputAndErrorMessageWrapper>
          <InputURL
            {...register('youtubeVideoUrl', {
              required: 'This field is required!',
              pattern: {
                value: /^\S+youtu.\S+$/,
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
          <ErrorMessage>{errors.youtubeVideoUrl?.message}</ErrorMessage>
        </InputAndErrorMessageWrapper>
        <Submit type="submit" value="add" />
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  margin-top: 0.6rem;
`;

const InputAndErrorMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const InputURL = styled.input`
  padding: 0.1rem 0.2rem;
  border: none;
  border: 1px solid #c7c7c7;
  border-radius: 2px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.6rem;
`;

const Submit = styled.input`
  font-size: 0.6rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.2rem 0.4rem;
  margin-left: 0.7rem;
  align-self: flex-start;
`;

const ErrorMessage = styled.p`
  font-style: italic;
  color: grey;
  margin-top: 0.3rem;
  font-size: 0.6rem;
`;
