import { DOTIcon, ETHIcon } from '../components/NetworkIcons'

export type NetworkType = 
  // Polkadot ecosystem
  | 'assethub'    // Asset Hub (formerly Statemint)
  | 'hydradx'     // HydraDX
  | 'astar'       // Astar Network
  // Ethereum L2s
  | 'optimism'    // Optimism
  | 'arbitrum'    // Arbitrum One
  | 'base'        // Base

export interface Network {
  id: NetworkType;
  name: string;
  token: string;
  chainName: string;
  icon: React.FC<{ width?: number; height?: number; color?: string }>;
  walletName: string;
  walletUrl: string;
  chainId?: string;      // For EVM networks
  parachainId?: number;  // For Polkadot networks
  explorerUrl: string;
}

export const SUPPORTED_NETWORKS: Network[] = [
  // Polkadot Ecosystem
  {
    id: 'assethub',
    name: 'Asset Hub',
    token: 'DOT',
    chainName: 'Polkadot Asset Hub',
    icon: DOTIcon,
    walletName: 'Polkadot.js',
    walletUrl: 'https://polkadot.js.org/extension/',
    parachainId: 1000,
    explorerUrl: 'https://statescan.io/',
  },
  {
    id: 'hydradx',
    name: 'HydraDX',
    token: 'DOT',
    chainName: 'HydraDX',
    icon: DOTIcon,
    walletName: 'Polkadot.js',
    walletUrl: 'https://polkadot.js.org/extension/',
    parachainId: 2034,
    explorerUrl: 'https://hydradx.subscan.io/',
  },
  {
    id: 'astar',
    name: 'Astar',
    token: 'DOT',
    chainName: 'Astar Network',
    icon: DOTIcon,
    walletName: 'Polkadot.js',
    walletUrl: 'https://polkadot.js.org/extension/',
    parachainId: 2006,
    explorerUrl: 'https://astar.subscan.io/',
  },
  // Ethereum L2s
  {
    id: 'optimism',
    name: 'Optimism',
    token: 'ETH',
    chainName: 'Optimism',
    icon: ETHIcon,
    walletName: 'MetaMask',
    walletUrl: 'https://metamask.io/',
    chainId: '0xa',
    explorerUrl: 'https://optimistic.etherscan.io/',
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum',
    token: 'ETH',
    chainName: 'Arbitrum One',
    icon: ETHIcon,
    walletName: 'MetaMask',
    walletUrl: 'https://metamask.io/',
    chainId: '0xa4b1',
    explorerUrl: 'https://arbiscan.io/',
  },
  {
    id: 'base',
    name: 'Base',
    token: 'ETH',
    chainName: 'Base',
    icon: ETHIcon,
    walletName: 'MetaMask',
    walletUrl: 'https://metamask.io/',
    chainId: '0x2105',
    explorerUrl: 'https://basescan.org/',
  }
]; 