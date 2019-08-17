import React from 'react';
import styled from 'styled-components';

const ArticleMeta = ({ date, timeToRead }) => {
  return <p>{new Date(date).toDateString()}</p>;
};

export default ArticleMeta;
