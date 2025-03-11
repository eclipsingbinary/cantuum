/** @jsxImportSource @emotion/react */
import { useState, useCallback } from 'react';

interface SOLWalletConnectProps {
  onConnect: (address: string) => void;
  onError: (error: Error) => void;
}

declare global {
  interface Window {
    phantom?: {
      solana?: {
        isPhantom?: boolean;
        connect: () => Promise<{ publicKey: { toString: () => string } }>;
        disconnect: () => Promise<void>;
      };
    };
  }
}

export const useSOLWalletConnect = ({ onConnect, onError }: SOLWalletConnectProps) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = useCallback(async () => {
    if (!window.phantom?.solana || !window.phantom.solana.isPhantom) {
      onError(new Error('Phantom wallet not detected. Please install Phantom wallet extension.'));
      return;
    }

    setIsConnecting(true);
    try {
      // Connect wallet and get public key
      const resp = await window.phantom.solana.connect();
      const address = resp.publicKey.toString();
      
      if (!address) {
        throw new Error('No address found');
      }

      onConnect(address);
    } catch (error) {
      console.error('Phantom wallet error:', error);
      onError(error instanceof Error ? error : new Error('Failed to connect to Phantom wallet'));
    } finally {
      setIsConnecting(false);
    }
  }, [onConnect, onError]);

  return {
    connectWallet,
    isConnecting
  };
}; 