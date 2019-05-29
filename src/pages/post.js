import React from 'react';
import styled from 'styled-components';
import { media } from '@styles';
import { Title } from '@components';

const Container = styled.div`
  ${media.desktop`
    padding-top: ${({ theme }) => theme.spacing.multiple(3)};
    padding-bottom: ${({ theme }) => theme.spacing.multiple(3)};
    padding-left: ${({ theme }) => theme.spacing.multiple(6)};
    padding-right: ${({ theme }) => theme.spacing.multiple(6)};
  `}
`;

const Post = () => {
  return (
    <Container>
      <Title>Post title goes here</Title>
    </Container>
  );
};

export default Post;
