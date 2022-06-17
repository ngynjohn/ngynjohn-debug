const video = require('../../../public/Untitled.mp4');

export default function VideoPlayer() {
  return (
    <video
      width="600px"
      height="300px"
      controls
      loop
      autoPlay
      muted
    >
      <source src={video} type="video/webm" />
    </video>
  );
}
