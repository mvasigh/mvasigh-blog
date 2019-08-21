import styled from 'styled-components';
import { media } from '@styles';

const Main = styled.main`
  flex-grow: 1;
  padding-top: ${({ theme }) => theme.spacing.multiple(6)};
  ${media.tablet`
    padding-top: ${({ theme }) => theme.spacing.multiple(8)};
  `}
`;

export default Main;
