import styled from 'styled-components';
import { media } from '@styles';

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(0.5)};
  ${media.tablet`
    margin-bottom: ${({ theme }) => theme.spacing.multiple(0.5)};
    font-size: 2.8rem;
  `}
  font-weight: 900;
  line-height: 1.2;

  a {
    font-family: 'Muli', sans-serif;
    text-decoration: none;
  }
`;

Title.Secondary = styled.h2`
  font-size: 1.6rem;
  ${media.tablet`
    font-size: 2rem;
  `}
  font-weight: 900;

  a {
    font-family: 'Muli', sans-serif;
    text-decoration: none;
  }
`;

export default Title;
