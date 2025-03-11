/** @jsxImportSource @emotion/react */
import { useState, useCallback } from 'react';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';

interface XTZWalletConnectProps {
  onConnect: (address: string) => void;
  onError: (error: Error) => void;
}

export const useXTZWalletConnect = ({ onConnect, onError }: XTZWalletConnectProps) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = useCallback(async () => {
    setIsConnecting(true);
    try {
      const Tezos = new TezosToolkit('https://mainnet.tezos.marigold.dev');
      const wallet = new BeaconWallet({
        name: 'Cantuum',
        preferredNetwork: 'mainnet'
      });

      Tezos.setWalletProvider(wallet);

      // Request permissions
      await wallet.requestPermissions({
        network: {
          type: 'mainnet'
        }
      });

      const userAddress = await wallet.getPKH();
      if (!userAddress) {
        throw new Error('No address found');
      }

      onConnect(userAddress);
    } catch (error) {
      console.error('Temple wallet error:', error);
      onError(error instanceof Error ? error : new Error('Failed to connect to Temple wallet'));
    } finally {
      setIsConnecting(false);
    }
  }, [onConnect, onError]);

  return {
    connectWallet,
    isConnecting
  };
}; 