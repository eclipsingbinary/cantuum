import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderText = styled.h1`
  color: #fff;
  font-size: 54px;
  margin-bottom: 48px;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.1s;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin-top: 20px;
  animation: ${fadeIn} 0.8s ease-out;
`;

const MainButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
`;

const OptionButton = styled.button<{ isLarge?: boolean; isHorizontal?: boolean; extraWidth?: boolean }>`
  padding: ${props => {
    if (props.isLarge) return '96px';
    if (props.isHorizontal) return '12px 48px';
    return '16px 24px';
  }};
  font-size: ${props => props.isLarge ? '54px' : '18px'};
  font-weight: 600;
  border: ${props => props.isLarge ? '3px' : '2px'} solid #fff;
  border-radius: ${props => props.isLarge ? '12px' : '8px'};
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-width: ${props => props.isHorizontal ? '300px' : 'auto'};
  aspect-ratio: ${props => props.isLarge ? (props.extraWidth ? '1.7' : '1') : 'auto'};
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.isLarge ? '0.2s' : '0.4s'};

  &:hover {
    background: #fff;
    color: #000;
    transform: translateY(-2px);
  }
`;

interface Props {
  onSelectOption: (option: 'artist' | 'user' | 'listener') => void;
}

export const RegistrationOptions: React.FC<Props> = ({ onSelectOption }) => {
  return (
    <OptionsContainer>
      <HeaderText>Register</HeaderText>
      <MainButtonsContainer>
        <OptionButton isLarge onClick={() => onSelectOption('artist')}>
          Artist
        </OptionButton>
        <OptionButton isLarge extraWidth onClick={() => onSelectOption('user')}>
          User
        </OptionButton>
      </MainButtonsContainer>
      <OptionButton isHorizontal onClick={() => onSelectOption('listener')}>
        I Just Want to Listen
      </OptionButton>
    </OptionsContainer>
  );
}; 