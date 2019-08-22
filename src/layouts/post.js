import React from 'react';
import { Title, Content, Article, SEO } from '@components';

const Post = ({ pageContext }) => {
  return (
    <>
      <SEO title={`${pageContext.title} - Mehdi Vasigh`} />
      <Article>
        <Article.Header>
          <Title>{pageContext.title}</Title>
          <Article.Meta>{pageContext.date}</Article.Meta>
        </Article.Header>
        <Content dangerouslySetInnerHTML={{ __html: pageContext.html }} />
      </Article>
    </>
  );
};

export default Post;
