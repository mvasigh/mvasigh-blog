import React from 'react';
import styled from 'styled-components';
import { Title, Content, ArticleMeta } from '@components';

const Article = styled.article`
  max-width: 700px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
`;

const Post = ({ pageContext }) => {
  return (
    <Article>
      <Header>
        <Title>{pageContext.title}</Title>
        <ArticleMeta date={pageContext.date} />
      </Header>
      <Content dangerouslySetInnerHTML={{ __html: pageContext.html }} />
    </Article>
  );
};

export default Post;
