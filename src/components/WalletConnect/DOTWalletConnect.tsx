import { web3Enable, web3Accounts } from '@polkadot/extension-dapp';

interface DOTWalletConnectProps {
  onConnect: (address: string) => void;
  onError: (error: Error) => void;
}

export const useDOTWalletConnect = ({ onConnect, onError }: DOTWalletConnectProps) => {
  const connectWallet = async () => {
    try {
      const injectedExtensions = await web3Enable('Cantuum');
      if (!injectedExtensions.length) {
        throw new Error('Please install a Polkadot wallet extension (Polkadot.js, SubWallet, or Talisman)');
      }

      const allAccounts = await web3Accounts();
      if (!allAccounts.length) {
        throw new Error('No accounts found. Please create an account in your wallet');
      }

      // For now, we'll just use the first account
      onConnect(allAccounts[0].address);
    } catch (error) {
      onError(error as Error);
    }
  };

  return { connectWallet };
}; 