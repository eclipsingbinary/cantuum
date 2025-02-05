import { NetworkType } from '../types/networks';

interface WalletConnection {
  address: string;
  network: NetworkType;
  disconnect: () => Promise<void>;
}

export class WalletService {
  private currentConnection: WalletConnection | null = null;

  async connectWallet(networkType: NetworkType): Promise<WalletConnection> {
    try {
      let connection: WalletConnection;

      switch (networkType) {
        case 'lightning':
          connection = await this.connectLightning();
          break;
        case 'assethub':
          connection = await this.connectAssetHub();
          break;
        case 'optimism':
          connection = await this.connectOptimism();
          break;
        default:
          throw new Error('Unsupported network');
      }

      this.currentConnection = connection;
      return connection;
    } catch (error) {
      console.error('Wallet connection error:', error);
      throw error;
    }
  }

  async getCurrentConnection(): Promise<WalletConnection | null> {
    return this.currentConnection;
  }

  async disconnect(): Promise<void> {
    if (this.currentConnection) {
      await this.currentConnection.disconnect();
      this.currentConnection = null;
    }
  }

  private async connectLightning(): Promise<WalletConnection> {
    if (typeof window === 'undefined' || !window.webln) {
      throw new Error('Please install Alby wallet extension');
    }

    try {
      await window.webln.enable();
      const info = await window.webln.getInfo();
      
      return {
        address: info.node.pubkey,
        network: 'lightning',
        disconnect: async () => {
          // Lightning specific disconnect logic if needed
        }
      };
    } catch (error) {
      throw new Error('Failed to connect to Lightning wallet');
    }
  }

  private async connectAssetHub(): Promise<WalletConnection> {
    if (typeof window === 'undefined' || !window.injectedWeb3) {
      throw new Error('Please install Polkadot.js extension');
    }

    try {
      const injected = window.injectedWeb3['polkadot-js'];
      if (!injected) {
        throw new Error('Polkadot.js extension not found');
      }

      const extension = await injected.enable();
      const accounts = await extension.accounts.get();
      
      if (accounts.length === 0) {
        throw new Error('No accounts found in Polkadot.js');
      }

      return {
        address: accounts[0].address,
        network: 'assethub',
        disconnect: async () => {
          // Asset Hub specific disconnect logic if needed
        }
      };
    } catch (error) {
      throw new Error('Failed to connect to Asset Hub wallet');
    }
  }

  private async connectOptimism(): Promise<WalletConnection> {
    if (typeof window === 'undefined' || !window.ethereum) {
      throw new Error('Please install MetaMask');
    }

    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      const chainId = await window.ethereum.request({ 
        method: 'eth_chainId' 
      });
      
      // Optimism chain ID is 10
      if (chainId !== '0xa') {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xa' }]
        });
      }
      
      return {
        address: accounts[0],
        network: 'optimism',
        disconnect: async () => {
          // MetaMask specific disconnect logic if needed
        }
      };
    } catch (error) {
      throw new Error('Failed to connect to Optimism wallet');
    }
  }
} 