/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Modal } from './Modal';
import { Song } from '../types';

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 3px;
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: white;
    background: rgba(255, 255, 255, 0.05);
  }
`;

const Title = styled.div`
  color: white;
  font-size: 16px;
  text-align: center;
`;

interface SongModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (song: Song) => void;
}

export function SongModal({ isOpen, onClose, onSelect }: SongModalProps) {
  const songs: Song[] = [
    { id: '1', artistId: '1', title: 'Song 1', price: '0.1', audioUrl: '', thumbnailUrl: '' },
    { id: '2', artistId: '1', title: 'Song 2', price: '0.2', audioUrl: '', thumbnailUrl: '' },
    { id: '3', artistId: '2', title: 'Song 3', price: '0.3', audioUrl: '', thumbnailUrl: '' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Select Song">
      <List>
        {songs.map((song) => (
          <ListItem key={song.id} onClick={() => onSelect(song)}>
            <Title>{song.title}</Title>
          </ListItem>
        ))}
      </List>
    </Modal>
  );
} 