import styled from 'styled-components';
import { media } from '@styles';
import { toHslString } from '@libs/color';

const Title = styled.h1`
  color: ${({ theme }) => toHslString(theme.palette.brand.mintCream)};
  font-size: 2.2em;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(0.25)};
  ${media.tablet`
    margin-bottom: ${({ theme }) => theme.spacing.multiple(0.25)};
    font-size: 2.8em;
  `}
  font-weight: 900;
  line-height: 1.2;

  a {
    font-family: 'Muli', sans-serif;
    text-decoration: none;
  }
`;

Title.Secondary = styled.h2`
  font-size: 1.6em;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(0.25)};
  ${media.tablet`
    font-size: 2em;
    margin-bottom: ${({ theme }) => theme.spacing.multiple(0.25)};
  `}
  font-weight: 900;

  a {
    color: ${({ theme }) => toHslString(theme.palette.brand.mintCream)};
    font-family: 'Muli', sans-serif;
    text-decoration: none;
  }
`;

export default Title;
