import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const FooterStyles = styled.footer`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.multiple(3)};
`;

const SocialLinkStyles = styled.ul`
  list-style-type: none;
  padding: ${({ theme }) => theme.spacing.multiple(1)};
  li {
    &:not(:first-child) {
      margin-left: ${({ theme }) => theme.spacing.multiple(0.5)};
      &::before {
        content: '◆';
        margin-right: ${({ theme }) => theme.spacing.multiple(0.5)};
      }
    }
    display: inline-block;
  }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allSocialJson {
        edges {
          node {
            name
            label
            href
          }
        }
      }
    }
  `);

  const socialLinks = data.allSocialJson.edges.reduce((acc, edge) => {
    const { node } = edge;
  });

  return (
    <FooterStyles>
      <hr />
      <SocialLinkStyles>
        {data.allSocialJson.edges.map(edge => {
          const { node } = edge;
          return (
            <li key={node.href}>
              <a href={node.href} title={node.name}>
                {node.label}
              </a>
            </li>
          );
        })}
      </SocialLinkStyles>
    </FooterStyles>
  );
};

export default Footer;
