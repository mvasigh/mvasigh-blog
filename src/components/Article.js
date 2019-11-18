import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from './Button';
import { toHslaString } from '@libs/color';

const Article = styled.article`
  max-width: 700px;
  margin: 0 auto;
`;

Article.Meta = styled.p`
  color: ${({ theme }) => toHslaString(theme.palette.text.secondary)};
`;

Article.Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.multiple(1)};
`;

const ArticleExcerptStyles = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.multiple(6)};
  line-height: 1.8em;

  a {
    margin-left: 0.2em;
  }

  p {
    margin-bottom: 0;
  }

  .read-more {
    float: right;
  }
`;

Article.Excerpt = ({ children, href, linkProps, ...props }) => (
  <>
    <ArticleExcerptStyles>
      <p className="excerpt-text">{children}</p>
      <Button
        as={Link}
        to={href}
        className="read-more"
        color="mintCream"
        {...linkProps}
      >
        Read More &rarr;
      </Button>
    </ArticleExcerptStyles>
  </>
);

export default Article;
