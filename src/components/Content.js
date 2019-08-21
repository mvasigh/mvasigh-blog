import styled from 'styled-components';
import { media } from '@styles';

const Content = styled.section`
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.multiple(0.5)};
  }
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.multiple(0.7)};
  }

  h4,
  h5,
  h6 {
    margin-bottom: ${({ theme }) => theme.spacing.multiple(0.8)};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.multiple(1.2)};
  }

  h2 {
    font-size: 1.6em;
    ${media.tablet`
      font-size: 2em;
    `}
  }

  h3 {
    font-size: 1.3em;
    ${media.tablet`
      font-size: 1.4em;
    `}
  }

  h4 {
    font-size: 1.1em;
    ${media.tablet`
      font-size: 1.2em;
    `}
  }

  p {
    font-size: 1em;
    ${media.phone`
      font-size: 1.1em;
    `}
    line-height: 1.6em;
  }
`;

export default Content;
