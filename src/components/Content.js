import styled from 'styled-components';
import { media } from '@styles';

const Content = styled.section`
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: ${({ theme }) => theme.spacing.multiple(1.5)};
  }

  h2 {
    font-size: 1.6rem;
    ${media.tablet`
      font-size: 2rem;
    `}
  }

  h3 {
    font-size: 1.3rem;
    ${media.tablet`
      font-size: 1.4rem;
    `}
  }

  h4 {
    font-size: 1.1rem;
    ${media.tablet`
      font-size: 1.2rem;
    `}
  }

  p {
    line-height: 1.6rem;
  }
`;

export default Content;
