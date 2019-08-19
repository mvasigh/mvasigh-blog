import React from 'react';
import styled from 'styled-components';

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

Article.Excerpt = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
`;

export default Article;
