interface WebLN {
  enable: () => Promise<void>;
  getInfo: () => Promise<{ node: { pubkey: string } }>;
}

interface InjectedWeb3 {
  'polkadot-js': {
    enable: () => Promise<{
      accounts: {
        get: () => Promise<Array<{ address: string }>>;
      };
    }>;
  };
}

interface Ethereum {
  request: (args: { method: string; params?: any[] }) => Promise<any>;
  on: (eventName: string, handler: (params: any) => void) => void;
  removeListener: (eventName: string, handler: (params: any) => void) => void;
}

interface Window {
  webln?: WebLN;
  injectedWeb3?: InjectedWeb3;
  ethereum?: Ethereum;
}

declare module '*.svg' {
  const content: string;
  export default content;
} 