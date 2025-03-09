/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  object-fit: cover;
`;

export function BackgroundVideo() {
  return (
    <Video autoPlay muted loop playsInline>
      <source src="/cantuum-bg.mp4" type="video/mp4" />
    </Video>
  );
} 