/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useState } from 'react'
import { NetworkType, Network } from '../types/networks'
import { 
  DOTIcon, 
  ETHIcon,
  ADAIcon,
  KSMIcon,
  ALGOIcon,
  XTZIcon,
  SOLIcon,
  BTCIcon,
  AVAXIcon
} from './NetworkIcons'
import { useDOTWalletConnect } from './WalletConnect/DOTWalletConnect'
import { RegistrationOptions } from './RegistrationOptions'

const NetworkContainer = styled.div`
  margin-top: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NetworkButton = styled.button<{ isOpen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  width: 100%;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const NetworkList = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 12px;
  z-index: 1000;
  flex-direction: row;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  width: max-content;
  max-width: 600px;
`

const NetworkOption = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  min-width: 80px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }

  ${props => props.isSelected && `
    background: ${props.theme.colors.primary}20;
  `}
`

const ConnectedWallet = styled.div<{ isAnimating: boolean }>`
  position: ${props => props.isAnimating ? 'fixed' : 'relative'};
  top: ${props => props.isAnimating ? '20px' : 'auto'};
  right: ${props => props.isAnimating ? '-800px' : 'auto'};
  transition: all 1.0s ease-in-out;
  background: #000;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid #fff;
  color: #fff;
  z-index: 1000;
`

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface NetworkSelectorProps {
  networks?: Network[];
  selectedNetwork?: Network;
  onSelect: (network: Network) => void;
  isConnecting?: boolean;
}

const EXAMPLE_NETWORKS: Network[] = [
  {
    id: 'btc' as NetworkType,
    name: 'BTC',
    token: 'BTC',
    chainName: 'Bitcoin',
    icon: BTCIcon,
    walletName: 'Bitcoin Core',
    walletUrl: 'https://bitcoin.org/',
    explorerUrl: 'https://blockstream.info/',
  },
  {
    id: 'dot' as NetworkType,
    name: 'DOT',
    token: 'DOT',
    chainName: 'Polkadot',
    icon: DOTIcon,
    walletName: 'Polkadot.js',
    walletUrl: 'https://polkadot.js.org/extension/',
    explorerUrl: 'https://polkadot.subscan.io/',
  },
  {
    id: 'eth' as NetworkType,
    name: 'ETH',
    token: 'ETH',
    chainName: 'Ethereum',
    icon: ETHIcon,
    walletName: 'MetaMask',
    walletUrl: 'https://metamask.io/',
    explorerUrl: 'https://etherscan.io/',
  },
  {
    id: 'ada' as NetworkType,
    name: 'ADA',
    token: 'ADA',
    chainName: 'Cardano',
    icon: ADAIcon,
    walletName: 'Nami',
    walletUrl: 'https://namiwallet.io/',
    explorerUrl: 'https://cardanoscan.io/',
  },
  {
    id: 'ksm' as NetworkType,
    name: 'KSM',
    token: 'KSM',
    chainName: 'Kusama',
    icon: KSMIcon,
    walletName: 'Polkadot.js',
    walletUrl: 'https://polkadot.js.org/extension/',
    explorerUrl: 'https://kusama.subscan.io/',
  },
  {
    id: 'algo' as NetworkType,
    name: 'ALGO',
    token: 'ALGO',
    chainName: 'Algorand',
    icon: ALGOIcon,
    walletName: 'MyAlgo',
    walletUrl: 'https://wallet.myalgo.com/',
    explorerUrl: 'https://algoexplorer.io/',
  },
  {
    id: 'xtz' as NetworkType,
    name: 'XTZ',
    token: 'XTZ',
    chainName: 'Tezos',
    icon: XTZIcon,
    walletName: 'Temple',
    walletUrl: 'https://templewallet.com/',
    explorerUrl: 'https://tzstats.com/',
  },
  {
    id: 'sol' as NetworkType,
    name: 'SOL',
    token: 'SOL',
    chainName: 'Solana',
    icon: SOLIcon,
    walletName: 'Phantom',
    walletUrl: 'https://phantom.app/',
    explorerUrl: 'https://explorer.solana.com/',
  },
  {
    id: 'avax' as NetworkType,
    name: 'AVAX',
    token: 'AVAX',
    chainName: 'Avalanche',
    icon: AVAXIcon,
    walletName: 'Core',
    walletUrl: 'https://core.app/',
    explorerUrl: 'https://snowtrace.io/',
  }
];

export const NetworkSelector: React.FC<NetworkSelectorProps> = ({ 
  selectedNetwork, 
  onSelect,
  isConnecting = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const dotWallet = useDOTWalletConnect({
    onConnect: (address) => {
      setConnectedAddress(address);
      setIsAnimating(true);
      setTimeout(() => {
        setShowRegistration(true);
      }, 1000);
    },
    onError: (error) => {
      console.error('DOT wallet connection error:', error.message);
    }
  });

  const handleNetworkSelect = async (network: Network) => {
    if (network.id === 'dot') {
      await dotWallet.connectWallet();
    }
    onSelect(network);
  };

  const handleRegistrationOption = (option: 'artist' | 'user' | 'listener') => {
    console.log('Selected registration option:', option);
    // Handle registration flow
  };

  return (
    <>
      {connectedAddress ? (
        <ContentContainer>
          <ConnectedWallet isAnimating={isAnimating}>
            {connectedAddress.slice(0, 6)}...{connectedAddress.slice(-4)}
          </ConnectedWallet>
          {showRegistration && (
            <RegistrationOptions onSelectOption={handleRegistrationOption} />
          )}
        </ContentContainer>
      ) : (
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
              'Connect Wallet'
            )}
          </NetworkButton>

          <NetworkList isOpen={isOpen}>
            {EXAMPLE_NETWORKS.map(network => (
              <NetworkOption
                key={network.id}
                isSelected={selectedNetwork?.id === network.id}
                onClick={() => handleNetworkSelect(network)}
              >
                <network.icon width={20} height={20} />
                {network.name}
              </NetworkOption>
            ))}
          </NetworkList>
        </NetworkContainer>
      )}
    </>
  );
}; 