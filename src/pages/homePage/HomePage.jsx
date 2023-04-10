import telephone from '../../images/telephone.png';

import { Container } from '../homePage/HomePage.styled';

export const HomePage = () => {
  return (
    <Container>
      <img src={`${telephone}`} alt="telephone" width="700" />
    </Container>
  );
};
