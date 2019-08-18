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

const Article = styled.article`
  max-width: 700px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
`;

const Post = ({ pageContext }) => {
  return (
    <Container>
      <Article>
        <Header>
          <Title>{pageContext.title}</Title>
          <ArticleMeta date={pageContext.date} />
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: pageContext.html }} />
      </Article>
    </Container>
  );
};

export default Post;
