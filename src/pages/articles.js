import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Article, Title } from '@components';

const Articles = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt(pruneLength: 340, format: PLAIN, truncate: true)
            fields {
              slug
            }
            frontmatter {
              title
              date(fromNow: true)
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMarkdownRemark.edges.map(edge => {
        const { node } = edge;
        return (
          <Article key={node.id}>
            <Article.Header>
              <Title.Secondary>
                <Link to={`/articles/${node.fields.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </Title.Secondary>
              <Article.Meta>{node.frontmatter.date}</Article.Meta>
            </Article.Header>
            <Article.Excerpt href={`/articles/${node.fields.slug}`}>
              {node.excerpt}
            </Article.Excerpt>
          </Article>
        );
      })}
    </>
  );
};

export default Articles;
