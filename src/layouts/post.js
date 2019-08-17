import React from 'react';
import styled from 'styled-components';
import { media } from '@styles';
import { Title, Content, ArticleMeta } from '@components';

const Container = styled.div`
  ${media.desktop`
    padding-top: ${({ theme }) => theme.spacing.multiple(3)};
    padding-bottom: ${({ theme }) => theme.spacing.multiple(3)};
    padding-left: ${({ theme }) => theme.spacing.multiple(6)};
    padding-right: ${({ theme }) => theme.spacing.multiple(6)};
  `}
`;

const Post = ({ pageContext }) => {
  return (
    <Container>
      <Title>{pageContext.title}</Title>
      <ArticleMeta date={pageContext.date} />
      <Content dangerouslySetInnerHTML={{ __html: pageContext.html }} />
    </Container>
  );
};

export default Post;
