import ReactPlayer from 'react-player';
import { Text } from '@mantine/core';

export default function VideoBackground() {
  const { canPlay } = ReactPlayer;
  return (
  canPlay('https://www.youtube.com/watch?v=lAd3LYIZMjs&ab_channel=NewtLobete')
    ? (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=lAd3LYIZMjs&ab_channel=NewtLobete"
        playing
        loop
        muted
        autoPlay
      />
      )
    : (
      <Text>
        Video could not load
      </Text>
      )
  );
}
