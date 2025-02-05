import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Modal, ModalButton } from './Modal'
import { Artist, Song } from '../types'

const PlayerContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const PlayerText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`

interface PlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  artist: Artist | null;
  song: Song | null;
}

export function PlayerModal({ isOpen, onClose, artist, song }: PlayerModalProps) {
  const [isPlaying, setIsPlaying] = useState(true); // Start playing automatically

  // Auto-play when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
    }
  }, [isOpen]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Here you would also handle the actual audio playback
    // For now, we're just toggling the state
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Now Playing"
    >
      <PlayerContent>
        <PlayerText>{artist?.name}</PlayerText>
        <PlayerText>{song?.title}</PlayerText>
        <ModalButton onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </ModalButton>
      </PlayerContent>
    </Modal>
  );
} 