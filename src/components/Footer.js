import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FaTwitter, FaDev, FaGithub, FaLinkedin, FaLink } from 'react-icons/fa';

const FooterStyles = styled.footer`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.multiple(2)};
`;

const SocialLinkStyles = styled.ul`
  list-style-type: none;
  padding: ${({ theme }) => theme.spacing.multiple(1)};
  li {
    font-size: 2rem;
    &:not(:first-child) {
      margin-left: ${({ theme }) => theme.spacing.multiple(1)};
    }
    display: inline-block;
  }
`;

const socialIcons = {
  twitter: FaTwitter,
  dev: FaDev,
  github: FaGithub,
  linkedin: FaLinkedin
};

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allSocialJson {
        edges {
          node {
            name
            handle
            label
            href
          }
        }
      }
    }
  `);

  const socials = data.allSocialJson.edges.map(edge => edge.node);

  return (
    <FooterStyles>
      <hr />
      <SocialLinkStyles>
        {socials.map(social => {
          const Icon = socialIcons[social.name] || FaLink;
          return (
            <li key={social.href}>
              <a
                href={social.href}
                title={`${social.handle} on ${social.label}`}
              >
                <Icon></Icon>
              </a>
            </li>
          );
        })}
      </SocialLinkStyles>
    </FooterStyles>
  );
};

export default Footer;
