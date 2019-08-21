import React from 'react';
import { Title, Content, Article } from '@components';

const Post = ({ pageContext }) => {
  return (
    <Article>
      <Article.Header>
        <Title>{pageContext.title}</Title>
        <Article.Meta>{pageContext.date}</Article.Meta>
      </Article.Header>
      <Content dangerouslySetInnerHTML={{ __html: pageContext.html }} />
    </Article>
  );
};

export default Post;
