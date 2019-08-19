import React from 'react';
import { Title, Content, Article } from '@components';

const Post = ({ pageContext }) => {
  return (
    <Article>
      <Article.Header>
        <Title>{pageContext.title}</Title>
        <Article.Meta date={pageContext.date} />
      </Article.Header>
      <Content dangerouslySetInnerHTML={{ __html: pageContext.html }} />
    </Article>
  );
};

export default Post;
