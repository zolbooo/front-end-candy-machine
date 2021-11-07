import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { InferProps } from '../utils/types';

const ButtonContent = styled.div`
  padding: 0 0.5rem;
`;

export function MintButton({ children, ...props }: InferProps<typeof Button>) {
  return (
    <Button {...props}>
      <ButtonContent>{children}</ButtonContent>
    </Button>
  );
}
