import styled from 'styled-components';

import { Header } from '../components/layout/Header';

import cover from '../assets/cover.png';
import { MintSummary } from '../components/MintSummary';
import { ReactNode } from 'react';

const Section = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const Cover = styled.div`
  @media screen and (max-width: 480px) {
    min-width: calc(100vw - 40px);
  }
  width: 450px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export function MintSection({
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
  return (
    <>
      <Header />
      <Section>
        <Cover>
          <img src={cover} alt="You Warriors" />
        </Cover>
        <MintSummary
          totalAvailable={totalAvailable}
          walletAddress={walletAddress}
          redeemed={redeemed}
        >
          {children}
        </MintSummary>
      </Section>
    </>
  );
}
