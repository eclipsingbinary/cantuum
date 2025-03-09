export interface WalletInfo {
  id: string;
  name: string;
  type: 'extension' | 'mobile' | 'both';
  logo: string;
  downloadUrl: string;
  isInstalled?: () => boolean;
}

export interface DOTWalletConfig {
  network: 'polkadot';
  wallets: WalletInfo[];
}

export const DOT_WALLETS: WalletInfo[] = [
  {
    id: 'polkadot-js',
    name: 'Polkadot.js',
    type: 'extension',
    logo: '/path-to-logo/polkadot-js.svg',
    downloadUrl: 'https://polkadot.js.org/extension/',
    isInstalled: () => {
      return typeof window !== 'undefined' && 
             window.injectedWeb3 !== undefined && 
             'polkadot-js' in window.injectedWeb3;
    }
  },
  {
    id: 'subwallet',
    name: 'SubWallet',
    type: 'both',
    logo: '/path-to-logo/subwallet.svg',
    downloadUrl: 'https://subwallet.app/',
    isInstalled: () => {
      return typeof window !== 'undefined' && 
             window.injectedWeb3 !== undefined && 
             'subwallet-js' in window.injectedWeb3;
    }
  },
  {
    id: 'talisman',
    name: 'Talisman',
    type: 'extension',
    logo: '/path-to-logo/talisman.svg',
    downloadUrl: 'https://talisman.xyz/',
    isInstalled: () => {
      return typeof window !== 'undefined' && 
             window.injectedWeb3 !== undefined && 
             'talisman' in window.injectedWeb3;
    }
  },
  {
    id: 'nova',
    name: 'Nova Wallet',
    type: 'mobile',
    logo: '/path-to-logo/nova.svg',
    downloadUrl: 'https://novawallet.io/',
  }
]; 