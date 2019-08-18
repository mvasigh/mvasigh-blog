import styled from 'styled-components';
import { media } from '@styles';

const Container = styled.main`
  flex-grow: 1;
  ${media.desktop`
    padding-top: ${({ theme }) => theme.spacing.multiple(3)};
    padding-bottom: ${({ theme }) => theme.spacing.multiple(3)};
    padding-left: ${({ theme }) => theme.spacing.multiple(6)};
    padding-right: ${({ theme }) => theme.spacing.multiple(6)};
  `}
`;

export default Container;
