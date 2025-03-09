// Network and Token Enums
export enum SupportedNetwork {
  JOYSTREAM = 'JOYSTREAM',
  POLYGON = 'POLYGON',
  POLKADOT = 'POLKADOT'
}

export enum SupportedToken {
  JOY = 'JOY',
  POL = 'POL',
  DOT = 'DOT'
}

// Artist Profile Types
export interface WalletAddress {
  network: SupportedNetwork;
  address: string;
  token: SupportedToken;
}

export interface ArtistProfile {
  id: string;
  name: string;
  walletAddresses: WalletAddress[];
  preferredPaymentNetwork?: SupportedNetwork;
}

// Payment Types
export interface Payment {
  amount: number;
  token: SupportedToken;
  network: SupportedNetwork;
  fromAddress: string;
  toAddress: string;
  platformFee: number;
}

export interface Artist {
  id: string;
  name: string;
}

export interface Song {
  id: string;
  artistId: string;
  title: string;
  price: string;
  audioUrl: string;
  thumbnailUrl: string;
}

// Mock data
export const mockArtists: Artist[] = [
  { id: '1', name: 'Artist 1' },
  { id: '2', name: 'Artist 2' },
];

export const mockSongs: Song[] = [
  {
    id: '1',
    artistId: '1',
    title: 'Song 1',
    price: '0.1',
    audioUrl: 'https://example.com/song1.mp3',
    thumbnailUrl: 'https://example.com/thumb1.jpg'
  },
  {
    id: '2',
    artistId: '2',
    title: 'Song 2',
    price: '0.1',
    audioUrl: 'https://example.com/song2.mp3',
    thumbnailUrl: 'https://example.com/thumb2.jpg'
  },
];