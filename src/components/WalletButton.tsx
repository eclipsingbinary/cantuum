/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export function WalletButton() {
  const handleClick = () => {
    // Wallet connection logic will go here
    console.log('Connect wallet clicked');
  };

  return (
    <Button onClick={handleClick}>
      Connect Wallet
    </Button>
  );
} 