import styled from 'styled-components';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem;
`;

const WalletButton = styled(WalletDialogButton)`
  border-radius: 1rem;
  text-transform: uppercase;
`;

export function ConnectWallet() {
  return (
    <Container>
      <WalletButton>Connect Wallet</WalletButton>
    </Container>
  );
}
