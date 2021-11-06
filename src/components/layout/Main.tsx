import styled from 'styled-components';
import { ReactNode } from 'react';

import background from '../../assets/background.png';

const BackgroundContainer = styled.div<{ background: string }>`
  width: 100vw;
  height: 100vh;
  background-image: url(${({ background }) => background});
  background-size: cover;
`;

export function Main({ children }: { children: ReactNode }) {
  return (
    <BackgroundContainer background={background}>
      {children}
    </BackgroundContainer>
  );
}
