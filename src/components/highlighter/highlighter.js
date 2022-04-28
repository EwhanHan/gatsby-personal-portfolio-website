import * as React from 'react';

const Highlighter = props => {
  const { type } = props;
  const className =
    type === 'primary'
      ? 'text__highlight__primary'
      : 'text__highlight__secondary';
  return <span className={className}>{props.children}</span>;
};

export default Highlighter;
