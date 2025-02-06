/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Song } from '../types';
import { Modal } from './Modal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  color: white;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const Price = styled.div`
  font-size: 24px;
  margin: 20px 0;
`;

const PayButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 15px 30px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.2s ease;

  &:hover {
    border-color: white;
    background: rgba(255, 255, 255, 0.05);
  }
`;

interface InsertCoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  song: Song | null;
  onPaymentComplete: () => void;
}

export function InsertCoinModal({ 
  isOpen, 
  onClose, 
  song, 
  onPaymentComplete 
}: InsertCoinModalProps) {
  if (!song) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Insert Coin">
      <Container>
        <Summary>
          <div>Artist: {song.artistId}</div>
          <div>Song: {song.title}</div>
        </Summary>
        <Price>{song.price} ETH</Price>
        <PayButton onClick={onPaymentComplete}>Pay Now</PayButton>
      </Container>
    </Modal>
  );
} 