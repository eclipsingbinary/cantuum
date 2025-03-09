/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { Modal, ModalButton } from './components/Modal'
import { NetworkSelector } from './components/NetworkSelector'
import { WalletStatus } from './components/WalletStatus'
import { SUPPORTED_NETWORKS, Network } from './types/networks'
import { WalletService } from './services/wallet'
import { RegisterArtistForm } from './components/RegisterArtistForm'

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

const TitleCantuum = styled.span`
  font-family: 'spincycle', monospace;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
`

const RegisterButton = styled(ModalButton)`
  margin-right: 10px;
  width: auto;
  padding: 8px 16px;
`

const WalletContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  text-align: center;
`

interface WalletState {
  isConnected: boolean;
  address: string | null;
  network: Network | null;
  isConnecting: boolean;
  isRegisteredArtist: boolean;
}

function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
    network: null,
    isConnecting: false,
    isRegisteredArtist: false
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
        isConnecting: false,
        isRegisteredArtist: false
      });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      setWalletState({
        isConnected: false,
        address: null,
        network: null,
        isConnecting: false,
        isRegisteredArtist: false
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
        isConnecting: false,
        isRegisteredArtist: false
      });
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
      // TODO: Show error notification
    }
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
        <source src="/assets/videos/CantaumLoop.mp4" type="video/mp4" />
      </BackgroundVideo>
      
      <Header>
        <Title>
          <TitleCantuum>Cantuum</TitleCantuum>
        </Title>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {walletState.isConnected && !walletState.isRegisteredArtist && (
            <RegisterButton onClick={() => setIsRegisterModalOpen(true)}>
              Register As Artist
            </RegisterButton>
          )}
          {walletState.isConnected && walletState.address && walletState.network && (
            <WalletStatus
              network={walletState.network}
              address={walletState.address}
              onDisconnect={handleDisconnect}
            />
          )}
        </div>
      </Header>

      {!walletState.isConnected && (
        <WalletContainer>
          <NetworkSelector
            networks={SUPPORTED_NETWORKS}
            onSelect={handleNetworkSelect}
            isConnecting={walletState.isConnecting}
          />
        </WalletContainer>
      )}

      <Modal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        title="Register As Artist"
      >
        <RegisterArtistForm 
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            setIsRegisterModalOpen(false);
          }}
          walletAddress={walletState.address || ''}
          network={walletState.network || SUPPORTED_NETWORKS[0]}
        />
      </Modal>
    </AppContainer>
  );
}

export default App;