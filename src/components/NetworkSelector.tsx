import styled from '@emotion/styled'
import { Network } from '../types/networks'
import { useState } from 'react'

const DropdownContainer = styled.div`
  position: relative;
`

const DropdownButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  min-width: 120px;
  z-index: 1000;
`

const TokenItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`

interface NetworkSelectorProps {
  networks: Network[];
  onSelect: (network: Network) => void;
  isConnecting?: boolean;
}

export function NetworkSelector({ networks, onSelect, isConnecting }: NetworkSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (network: Network) => {
    onSelect(network);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton 
        onClick={() => setIsOpen(!isOpen)}
        disabled={isConnecting}
      >
        {isConnecting ? 'Connecting...' : 'Connect Wallet'}
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {networks.map((network) => (
          <TokenItem
            key={network.id}
            onClick={() => handleSelect(network)}
          >
            <IconWrapper>
              <network.icon />
            </IconWrapper>
            {network.token}
          </TokenItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
} 