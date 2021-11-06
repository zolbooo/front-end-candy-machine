import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ReactNode } from 'react';

const Text = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Card = styled.div`
  @media screen and (max-width: 480px) {
    margin-top: 1rem;
    min-width: calc(100vw - 40px);
  }
  width: 450px;
  height: 100%;

  padding: 2rem 1.5rem;

  background-color: #151515;
  border-radius: 1.5rem;

  color: white;
`;

const WalletAddress = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  border-radius: 0.75rem;
  background-color: #b7b7b7;
`;
const WalletLabel = styled(Text)`
  height: 100%;
  padding: 5px 1.5rem;

  border-radius: 0.75rem;
  background-color: #353535;

  text-transform: uppercase;
`;
const Address = styled(Text)`
  margin: 0 1rem;
  // Ellipsize text overflow showing start and the end of the text
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TotalAvailable = styled.div`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;

  width: 100%;
`;
const ProgressContainer = styled.div`
  margin-top: 0.5rem;
  height: 1.5rem;
  width: 100%;
`;
const CurrentProgress = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Stats = styled.div`
  margin-top: 3rem;
`;

const Content = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
`;

export function MintSummary({
  walletAddress,
  totalAvailable,
  redeemed,
  children,
}: {
  walletAddress: string | null;
  totalAvailable: number;
  redeemed: number;
  children: ReactNode;
}) {
  const progress =
    totalAvailable === 0 ? 0 : Math.floor((redeemed / totalAvailable) * 100);
  return (
    <Card>
      <WalletAddress>
        <WalletLabel>Wallet</WalletLabel>
        <Address>{walletAddress ?? null}</Address>
      </WalletAddress>
      <TotalAvailable>
        <Text>Total available</Text>
        <ProgressContainer>
          <ProgressBar animated now={progress} />
        </ProgressContainer>
        <CurrentProgress>
          <Text>{`${progress}%`}</Text>
          <Text>100%</Text>
        </CurrentProgress>
      </TotalAvailable>
      <Stats>
        <Text>{`Redeemed: ${redeemed}`}</Text>
      </Stats>
      <Content>{children}</Content>
    </Card>
  );
}
