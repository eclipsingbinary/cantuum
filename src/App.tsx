/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { Modal, ModalButton } from './components/Modal'
import { PlayerModal } from './components/PlayerModal'
import { Artist, Song, mockArtists, mockSongs } from './types'
import { NetworkSelector } from './components/NetworkSelector'
import { WalletStatus } from './components/WalletStatus'
import { SUPPORTED_NETWORKS, Network } from './types/networks'
import { WalletService } from './services/wallet'
import { ArtistModal } from './components/ArtistModal'

const BackgroundVideo = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(.8);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  object-fit: cover;
  opacity: 0.4;
  background-color: #000;
`;

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  box-sizing: border-box;
  background: transparent;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`

const TitleEclipse = styled.span`
  font-family: 'spincycle', monospace;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
`

const TitleJukeBox = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`

const ButtonContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 30%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 250px;
`

interface WalletState {
  isConnected: boolean;
  address: string | null;
  network: Network | null;
  isConnecting: boolean;
}

function App() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [isArtistModalOpen, setIsArtistModalOpen] = useState(false);
  const [isSongModalOpen, setIsSongModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
  
  // Add wallet state
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
    network: null,
    isConnecting: false
  });

  const walletService = new WalletService();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const handleNetworkSelect = async (network: Network) => {
    try {
      setWalletState(prev => ({ ...prev, isConnecting: true }));
      
      const connection = await walletService.connectWallet(network.id);
      
      setWalletState({
        isConnected: true,
        address: connection.address,
        network: network,
        isConnecting: false
      });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      setWalletState({
        isConnected: false,
        address: null,
        network: null,
        isConnecting: false
      });
      // TODO: Show error notification
    }
  };

  const handleDisconnect = async () => {
    try {
      await walletService.disconnect();
      setWalletState({
        isConnected: false,
        address: null,
        network: null,
        isConnecting: false
      });
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
      // TODO: Show error notification
    }
  };

  const handleArtistSelect = (artist: Artist) => {
    setSelectedArtist(artist);
    setSelectedSong(null);
    setIsArtistModalOpen(false);
  };

  const handleSongSelect = (song: Song) => {
    setSelectedSong(song);
    setIsSongModalOpen(false);
  };

  const handlePayment = () => {
    setIsPaymentModalOpen(false);
    setIsPlayerModalOpen(true);
  };

  return (
    <AppContainer>
      <BackgroundVideo
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/EclipsingBinaryLoop.mp4" type="video/mp4" />
      </BackgroundVideo>
      
      <Header>
        <Title>
          <TitleEclipse>eclipse</TitleEclipse>
          <TitleJukeBox>JukeBox</TitleJukeBox>
        </Title>
        {walletState.isConnected && walletState.address && walletState.network ? (
          <WalletStatus
            network={walletState.network}
            address={walletState.address}
            onDisconnect={handleDisconnect}
          />
        ) : (
          <NetworkSelector
            networks={SUPPORTED_NETWORKS}
            onSelect={handleNetworkSelect}
            isConnecting={walletState.isConnecting}
          />
        )}
      </Header>
      <ButtonContainer>
        <ModalButton onClick={() => setIsArtistModalOpen(true)}>
          {selectedArtist ? selectedArtist.name : 'Artist'}
        </ModalButton>
        
        <ModalButton 
          onClick={() => setIsSongModalOpen(true)}
          disabled={!selectedArtist}
        >
          {selectedSong ? selectedSong.title : 'Song'}
        </ModalButton>
        
        <ModalButton 
          onClick={() => setIsPaymentModalOpen(true)}
          disabled={!selectedArtist || !selectedSong}
        >
          Insert Coin
        </ModalButton>
      </ButtonContainer>
      
      <Modal
        isOpen={isArtistModalOpen}
        onClose={() => setIsArtistModalOpen(false)}
        title="Select Artist"
      >
        <ArtistModal
          artists={mockArtists}
          onSelect={handleArtistSelect}
          onClose={() => setIsArtistModalOpen(false)}
        />
      </Modal>
      
      <Modal
        isOpen={isSongModalOpen}
        onClose={() => setIsSongModalOpen(false)}
        title="Select Song"
      >
        {mockSongs
          .filter(song => song.artistId === selectedArtist?.id)
          .map(song => (
            <ModalButton
              key={song.id}
              onClick={() => handleSongSelect(song)}
            >
              {song.title}
            </ModalButton>
          ))}
      </Modal>
      
      <Modal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        title="Insert Coin"
      >
        <div style={{ textAlign: 'center' }}>
          <p>{selectedArtist?.name}</p>
          <p>{selectedSong?.title}</p>
          <p>{selectedSong?.price} JOY</p>
          <ModalButton onClick={handlePayment}>Pay Now</ModalButton>
        </div>
      </Modal>

      <PlayerModal
        isOpen={isPlayerModalOpen}
        onClose={() => setIsPlayerModalOpen(false)}
        artist={selectedArtist}
        song={selectedSong}
      />
    </AppContainer>
  );
}

export default App;