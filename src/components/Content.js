import styled from 'styled-components';

const Content = styled.section`
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: ${({ theme }) => theme.spacing.multiple(1.5)};
  }
`;

export default Content;
