/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useState } from 'react'
import { Network } from '../types/networks'
import { DOTIcon, ETHIcon } from './NetworkIcons'

const NetworkContainer = styled.div`
  position: relative;
  display: inline-block;
`

const NetworkButton = styled.button<{ isOpen?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}10;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const NetworkList = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  min-width: 200px;
  z-index: 1000;
`

const TokenCategory = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}30;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}10;
  }

  ${props => props.isSelected && `
    background: ${props.theme.colors.primary}20;
  `}
`

const NetworkOption = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 12px 12px 32px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background};

  &:hover {
    background: ${({ theme }) => theme.colors.primary}10;
  }

  ${props => props.isSelected && `
    background: ${props.theme.colors.primary}20;
  `}
`

interface NetworkSelectorProps {
  networks: Network[];
  selectedNetwork?: Network;
  onSelect: (network: Network) => void;
  isConnecting?: boolean;
}

export function NetworkSelector({ 
  networks, 
  selectedNetwork, 
  onSelect,
  isConnecting = false 
}: NetworkSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<'DOT' | 'ETH' | null>(null);

  const handleSelect = (network: Network) => {
    onSelect(network);
    setIsOpen(false);
    setSelectedToken(null);
  };

  const dotNetworks = networks.filter(n => n.token === 'DOT');
  const ethNetworks = networks.filter(n => n.token === 'ETH');

  return (
    <NetworkContainer>
      <NetworkButton 
        onClick={() => setIsOpen(!isOpen)}
        disabled={isConnecting}
      >
        {isConnecting ? (
          'Connecting...'
        ) : selectedNetwork ? (
          <>
            <selectedNetwork.icon width={20} height={20} />
            {selectedNetwork.name}
          </>
        ) : (
          'Select Network'
        )}
      </NetworkButton>

      <NetworkList isOpen={isOpen}>
        <TokenCategory 
          onClick={() => setSelectedToken(selectedToken === 'DOT' ? null : 'DOT')}
          isSelected={selectedToken === 'DOT'}
        >
          <DOTIcon width={20} height={20} />
          <span>DOT</span>
        </TokenCategory>
        
        {selectedToken === 'DOT' && dotNetworks.map(network => (
          <NetworkOption
            key={network.id}
            isSelected={selectedNetwork?.id === network.id}
            onClick={() => handleSelect(network)}
          >
            {network.name}
          </NetworkOption>
        ))}

        <TokenCategory 
          onClick={() => setSelectedToken(selectedToken === 'ETH' ? null : 'ETH')}
          isSelected={selectedToken === 'ETH'}
        >
          <ETHIcon width={20} height={20} />
          <span>ETH</span>
        </TokenCategory>
        
        {selectedToken === 'ETH' && ethNetworks.map(network => (
          <NetworkOption
            key={network.id}
            isSelected={selectedNetwork?.id === network.id}
            onClick={() => handleSelect(network)}
          >
            {network.name}
          </NetworkOption>
        ))}
      </NetworkList>
    </NetworkContainer>
  );
} 