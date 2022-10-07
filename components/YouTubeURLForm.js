import getVideoId from 'get-video-id';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import YoutubeEmbed from './YoutubeEmbed';
import useLocalStorage from '../hooks/useLocalStorage';

export default function YouTubeURLForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      youtubeURL: '',
    },
  });

  const [video, setVideo] = useLocalStorage('_videos', []);

  const onSubmit = (data) => {
    const videoID = getVideoId(data.youtubeURL);
    setVideo(videoID.id);
    // console.log(videoID.id);
    // if (videoID.id && videoID.service === 'youtube') {
    //   setVideos(...videoID.id, videoID);
    //   console.log(videos);
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      {/* {videos.length !== 0 ?
      {videos.map((video) => {
        return <YoutubeEmbed embedId={getVideoId(video)} />
 })} : null } */}
      {/* <YoutubeEmbed embedID={video} /> */}
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
