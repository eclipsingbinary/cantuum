interface InjectedWindow {
  injectedWeb3: {
    'polkadot-js'?: unknown;
    'subwallet-js'?: unknown;
    'talisman'?: unknown;
    [key: string]: unknown;
  };
}

declare global {
  interface Window {
    injectedWeb3?: {
      ['polkadot-js']?: unknown;
      ['subwallet-js']?: unknown;
      ['talisman']?: unknown;
      [key: string]: unknown;
    };
  }
}

export {}; 