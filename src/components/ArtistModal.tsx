import styled from '@emotion/styled';
import { Artist } from '../types';

const ArtistList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const ArtistButton = styled.button`
  width: 100%;
  padding: 10px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

interface ArtistModalProps {
  artists: Artist[];
  onSelect: (artist: Artist) => void;
  onClose: () => void;
}

export function ArtistModal({ artists, onSelect, onClose }: ArtistModalProps) {
  return (
    <ArtistList>
      {artists.map((artist) => (
        <ArtistButton
          key={artist.id}
          onClick={() => {
            onSelect(artist);
            onClose();
          }}
        >
          {artist.name}
        </ArtistButton>
      ))}
    </ArtistList>
  );
} 