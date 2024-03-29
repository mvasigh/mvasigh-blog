import { createGlobalStyle } from 'styled-components';
import { toHslString } from '@libs/color';
import 'typeface-ubuntu-mono';

const CodeStyles = createGlobalStyle`
  code[class*="language-"],
  pre[class*="language-"] {
    color: white;
    background: none;
    font-family: 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    & .token {
      font-family: 'Ubuntu Mono', monospace;
    }
  }

  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }

  pre[class*="language-"],
  :not(pre) > code[class*="language-"] {
    background: ${({ theme }) => toHslString(theme.palette.code.background)};
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: ${({ theme }) => theme.spacing.multiple(1.5)} 0;
    overflow: auto;
    /* border-radius: 0.2em; */
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    ${({ theme }) =>
      theme.type === 'dark'
        ? ''
        : `color: ${toHslString(theme.palette.text.primary)};
           background: ${toHslString(theme.palette.greyscale.lightGrey)};`};
    padding: .15em .2em .05em;
    border-radius: .3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${({ theme }) => toHslString(theme.palette.code.comment)};
  }

  .token.punctuation {
    opacity: .7;
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol {
    color: ${({ theme }) => toHslString(theme.palette.code.tag)};
  }

  .token.selector,
  .token.attr-name,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${({ theme }) => toHslString(theme.palette.code.method)};
  }

  .token.string {
    color: ${({ theme }) => toHslString(theme.palette.code.string)};
  }

  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: ${({ theme }) => toHslString(theme.palette.code.variable)};
  }

  .token.operator,
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: ${({ theme }) => toHslString(theme.palette.code.keyword)};
  }

  .token.regex,
  .token.important {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.deleted {
    color: red;
  }
`;

export default CodeStyles;
