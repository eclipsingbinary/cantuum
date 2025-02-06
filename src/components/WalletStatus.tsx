/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { Network } from '../types/networks'

interface WalletStatusProps {
  network: Network;
  address: string;
  onDisconnect: () => void;
}

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`

const NetworkIcon = styled.div`
  display: flex;
  align-items: center;
`

const Address = styled.span`
  font-family: monospace;
`

const DisconnectButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    opacity: 0.8;
  }
`

export function WalletStatus({ network, address, onDisconnect }: WalletStatusProps) {
  const shortenedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;
  const Icon = network.icon;

  return (
    <StatusContainer>
      <NetworkIcon>
        <Icon width={20} height={20} />
      </NetworkIcon>
      <Address>{shortenedAddress}</Address>
      <DisconnectButton onClick={onDisconnect}>×</DisconnectButton>
    </StatusContainer>
  );
} 