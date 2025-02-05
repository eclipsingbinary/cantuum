import { BTCIcon, DOTIcon, ETHIcon } from '../components/NetworkIcons'

export type NetworkType = 'lightning' | 'assethub' | 'optimism'

export interface Network {
  id: NetworkType;
  name: string;
  token: string;
  chainName: string; // Adding chain name for clarity
  icon: React.FC<{ width?: number; height?: number; color?: string }>;
  // Adding connection details
  walletName?: string; // e.g., "Alby", "Polkadot.js", "MetaMask"
  walletUrl?: string; // URL to wallet website/extension
}

export const SUPPORTED_NETWORKS: Network[] = [
  {
    id: 'lightning',
    name: 'Lightning Network',
    token: 'BTC',
    chainName: 'Bitcoin Lightning',
    icon: BTCIcon,
    walletName: 'Alby',
    walletUrl: 'https://getalby.com/'
  },
  {
    id: 'assethub',
    name: 'Asset Hub',
    token: 'DOT',
    chainName: 'Polkadot Asset Hub',
    icon: DOTIcon,
    walletName: 'Polkadot.js',
    walletUrl: 'https://polkadot.js.org/extension/'
  },
  {
    id: 'optimism',
    name: 'Optimism',
    token: 'ETH',
    chainName: 'Optimism L2',
    icon: ETHIcon,
    walletName: 'MetaMask',
    walletUrl: 'https://metamask.io/'
  }
]; 