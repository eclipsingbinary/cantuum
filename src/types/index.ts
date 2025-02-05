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
  jukeboxFee: number;
}

export interface Artist {
  id: string;
  name: string;
}

export interface Song {
  id: string;
  title: string;
  artistId: string;
  price: number;
}

// Mock data
export const mockArtists: Artist[] = [
  { id: '1', name: 'Artist 1' },
  { id: '2', name: 'Artist 2' },
  { id: '3', name: 'Artist 3' },
];

export const mockSongs: Song[] = [
  { id: '1', title: 'Song 1', artistId: '1', price: 0.001 },
  { id: '2', title: 'Song 2', artistId: '1', price: 0.001 },
  { id: '3', title: 'Song 3', artistId: '2', price: 0.001 },
];