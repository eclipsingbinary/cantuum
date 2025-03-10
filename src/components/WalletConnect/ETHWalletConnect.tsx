/** @jsxImportSource @emotion/react */
import { useState, useCallback } from 'react';

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (eventName: string, handler: (params: any) => void) => void;
      removeListener: (eventName: string, handler: (params: any) => void) => void;
    };
  }
}

interface ETHWalletConnectProps {
  onConnect: (address: string) => void;
  onError: (error: Error) => void;
}

export const useETHWalletConnect = ({ onConnect, onError }: ETHWalletConnectProps) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = useCallback(async () => {
    if (typeof window.ethereum === 'undefined') {
      onError(new Error('No Ethereum wallet detected. Please install MetaMask or another web3 wallet.'));
      return;
    }

    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });

      if (accounts && accounts[0]) {
        onConnect(accounts[0]);
      } else {
        throw new Error('No accounts found');
      }
    } catch (error) {
      onError(error instanceof Error ? error : new Error('Failed to connect to Ethereum wallet'));
    } finally {
      setIsConnecting(false);
    }
  }, [onConnect, onError]);

  return {
    connectWallet,
    isConnecting
  };
}; 