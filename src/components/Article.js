import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Article = styled.article`
  max-width: 700px;
  margin: 0 auto;
`;

Article.Meta = ({ date }) => {
  return <p>{date}</p>;
};

Article.Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
`;

const ArticleExcerptStyles = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};

  a {
    margin-left: 0.2rem;
  }
`;

Article.Excerpt = ({ children, href, linkProps, ...props }) => (
  <ArticleExcerptStyles>
    {children}
    <Link to={href} {...linkProps}>
      Read More
    </Link>
  </ArticleExcerptStyles>
);

export default Article;
