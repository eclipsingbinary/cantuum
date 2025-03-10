/** @jsxImportSource @emotion/react */
import { useState, useCallback } from 'react';

interface AddressResponse {
  status: boolean;
  data: string;
}

interface TyphonWallet {
  enable: () => Promise<any>;
  getAddress: () => Promise<AddressResponse>;
  getNetworkId: () => Promise<number>;
}

declare global {
  interface Window {
    cardano?: {
      typhon?: TyphonWallet;
    };
  }
}

interface ADAWalletConnectProps {
  onConnect: (address: string) => void;
  onError: (error: Error) => void;
}

export const useADAWalletConnect = ({ onConnect, onError }: ADAWalletConnectProps) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [networkId, setNetworkId] = useState<number | null>(null);

  const connectWallet = useCallback(async () => {
    try {
      setIsConnecting(true);
      
      const typhon = window.cardano?.typhon;
      if (!typhon) {
        throw new Error('Please install Typhon wallet');
      }

      // Enable wallet first
      const api = await typhon.enable();
      console.log('Wallet enabled');

      // Get address
      try {
        const addressResponse = await typhon.getAddress();
        console.log('Got address response:', addressResponse);
        
        if (!addressResponse.status || !addressResponse.data) {
          throw new Error('Failed to get wallet address');
        }

        const address = addressResponse.data;
        console.log('Extracted address:', address);
        
        if (!address.startsWith('addr')) {
          throw new Error('Invalid address format');
        }

        onConnect(address);
      } catch (addressError) {
        console.error('Address retrieval failed:', addressError);
        throw new Error('Failed to get valid wallet address');
      }

    } catch (error) {
      console.error('Wallet connection error:', error);
      onError(error instanceof Error ? error : new Error('Failed to connect wallet'));
    } finally {
      setIsConnecting(false);
    }
  }, [onConnect, onError]);

  return {
    connectWallet,
    isConnecting,
    networkId
  };
}; 