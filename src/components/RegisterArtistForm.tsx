/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useState } from 'react'
import { ModalButton } from './Modal'
import { Network } from '../types/networks'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  min-width: 500px;
  color: ${({ theme }) => theme.colors.primary};
`

const Input = styled.input`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 4px;
  width: 90%;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SectionTitle = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9rem;
  margin-top: 10px;
`

const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const VerificationSection = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
`

const ValidationMessage = styled.span<{ status?: 'error' | 'success' | 'info' }>`
  font-size: 0.8rem;
  margin-left: 10px;
  color: ${({ theme, status }) => {
    switch (status) {
      case 'error':
        return '#ff4444';
      case 'success':
        return '#00ff00';
      default:
        return theme.colors.secondary;
    }
  }};
`

// Test data - will be replaced with blockchain check
const TAKEN_USERNAMES = [
  'admin', 'test', 'user', 'cantuum', 
  'spotify', 'soundcloud', 'artist',
  'music', 'official', 'verified'
];

interface RegisterArtistFormProps {
  onSubmit: (data: {
    username: string;
    socialLinks: string[];
    musicLinks: string[];
    paymentAddresses: {
      network: Network;
      address: string;
    }[];
    contentStorage: {
      type: 'IPFS' | 'Arweave' | 'Nostr';
      address: string;
    };
    collaborators?: {
      address: string;
      share: number;
    }[];
  }) => void;
  walletAddress: string;  // Connected wallet address
  network: Network;       // Current network
}

export function RegisterArtistForm({ onSubmit, walletAddress, network }: RegisterArtistFormProps) {
  const [usernameInput, setUsernameInput] = useState('');
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const checkUsernameAvailability = async (username: string) => {
    if (username.length < 3) return;
    
    setIsCheckingUsername(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const isAvailable = !TAKEN_USERNAMES.includes(username.toLowerCase());
      setIsUsernameAvailable(isAvailable);
    } catch (error) {
      console.error('Error checking username:', error);
    } finally {
      setIsCheckingUsername(false);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value;
    setUsernameInput(newUsername);
    if (newUsername.length >= 3) {
      checkUsernameAvailability(newUsername);
    } else {
      setIsUsernameAvailable(null);
    }
  };

  const checkFormValidity = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    setIsFormValid(form.checkValidity());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const socialLinks = [
      formData.get('socialLink1'),
      formData.get('socialLink2'),
      formData.get('socialLink3'),
    ].filter(Boolean) as string[];

    const musicLinks = [
      formData.get('musicLink1'),
      formData.get('musicLink2'),
      formData.get('musicLink3'),
    ].filter(Boolean) as string[];

    onSubmit({
      username: usernameInput,
      socialLinks,
      musicLinks,
      paymentAddresses: [{
        network: network,
        address: walletAddress
      }],
      contentStorage: {
        type: 'IPFS',
        address: ''
      },
      collaborators: []
    });
  };

  return (
    <Form onSubmit={handleSubmit} onChange={checkFormValidity}>
      <Section>
        <Input 
          type="text"
          name="username"
          placeholder="Username"
          required
          value={usernameInput}
          onChange={handleUsernameChange}
          minLength={3}
        />
        {usernameInput.length > 0 && (
          <ValidationMessage 
            status={
              usernameInput.length < 3 ? 'info' :
              isCheckingUsername ? 'info' :
              isUsernameAvailable ? 'success' : 'error'
            }
          >
            {usernameInput.length < 3 ? '3 characters or more' :
             isCheckingUsername ? 'Checking availability...' :
             isUsernameAvailable ? 'Username available' : 'Username taken'}
          </ValidationMessage>
        )}
      </Section>

      <VerificationSection>
        <ValidationMessage status="info">
          Connected Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </ValidationMessage>
        <ValidationMessage status="info">
          Network: {network.name}
        </ValidationMessage>
      </VerificationSection>

      <Section>
        <SectionTitle>Social Links</SectionTitle>
        <Input 
          type="url"
          name="socialLink1"
          placeholder="Social Media Link 1 (Required)"
          required
        />
        <Input 
          type="url"
          name="socialLink2"
          placeholder="Social Media Link 2 (Required)"
          required
        />
        <Input 
          type="url"
          name="socialLink3"
          placeholder="Social Media Link 3 (Optional)"
        />
      </Section>

      <Section>
        <SectionTitle>Music Platform Links</SectionTitle>
        <Input 
          type="url"
          name="musicLink1"
          placeholder="Music Platform Link 1 (Required)"
          required
        />
        <Input 
          type="url"
          name="musicLink2"
          placeholder="Music Platform Link 2 (Optional)"
        />
        <Input 
          type="url"
          name="musicLink3"
          placeholder="Music Platform Link 3 (Optional)"
        />
      </Section>

      <SubmitContainer>
        <ModalButton 
          type="submit"
          disabled={!isFormValid || !isUsernameAvailable || isCheckingUsername}
        >
          Submit & Sign Transaction
        </ModalButton>
      </SubmitContainer>
    </Form>
  );
} 