import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FaTwitter, FaDev, FaGithub, FaLinkedin, FaLink } from 'react-icons/fa';
import { media } from '@styles';
import { toHslString } from '../libs/color';

const FooterStyles = styled.footer`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.multiple(1)};
  ${media.tablet`
    padding: ${({ theme }) => theme.spacing.multiple(2)};
  `}
`;

const SocialLinkStyles = styled.ul`
  list-style-type: none;
  li {
    font-size: 1.4em;
    ${media.tablet`
      font-size: 2em;
    `}
    &:not(:first-child) {
      margin-left: ${({ theme }) => theme.spacing.multiple(1)};
    }
    display: inline-block;
  }
`;

const Divider = styled.hr`
  height: 0.2rem;
  background: ${({ theme }) => toHslString(theme.palette.greyscale.white)};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(1)};
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
      <Divider />
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
