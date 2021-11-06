import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0.5rem 0;
  color: #efc046;
  font-size: 3rem;
  text-transform: uppercase;
`;

const Divider = styled.div`
  height: 3px;
  width: 80%;
  background-color: #efc046;
`;

export function Header() {
  return (
    <Container>
      <Title>Mint Your Warriors</Title>
      <Divider />
    </Container>
  );
}
