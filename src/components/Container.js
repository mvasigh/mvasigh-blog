import styled from 'styled-components';
import { media } from '@styles';

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing.multiple(1)};
  padding-right: ${({ theme }) => theme.spacing.multiple(1)};
  ${media.desktop`
    padding-left: ${({ theme }) => theme.spacing.multiple(6)};
    padding-right: ${({ theme }) => theme.spacing.multiple(6)};
  `}
  ${media.tablet`
    padding-left: ${({ theme }) => theme.spacing.multiple(6)};
    padding-right: ${({ theme }) => theme.spacing.multiple(6)};
  `}
`;

export default Container;
