import { web3Enable, web3Accounts } from '@polkadot/extension-dapp';
import { NetworkType } from '../../types/networks';

interface DOTWalletConnectProps {
  onConnect: (address: string, network: NetworkType) => void;
  onError: (error: Error) => void;
  network: NetworkType;
}

export const useDOTWalletConnect = ({ onConnect, onError, network }: DOTWalletConnectProps) => {
  const connectWallet = async () => {
    try {
      // Validate network type
      if (network !== 'dot' && network !== 'ksm') {
        throw new Error('Unsupported network. Please select either DOT or KSM.');
      }

      const injectedExtensions = await web3Enable('Cantuum');
      if (!injectedExtensions.length) {
        throw new Error('Please install a Polkadot wallet extension (Polkadot.js, SubWallet, or Talisman)');
      }

      const allAccounts = await web3Accounts();
      if (!allAccounts.length) {
        throw new Error('No accounts found. Please create an account in your wallet');
      }

      // For now, we'll just use the first account
      onConnect(allAccounts[0].address, network);
    } catch (error) {
      onError(error instanceof Error ? error : new Error(String(error)));
    }
  };

  return { connectWallet };
}; 