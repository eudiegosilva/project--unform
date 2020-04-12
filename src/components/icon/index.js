import React from 'react';

import PropTypes from 'prop-types';

import { IconContainer, IconWrapper } from './styles';

const Icon = ({ src, alt }) => (
  <IconContainer>
    <IconWrapper src={src} alt={alt} />
  </IconContainer>
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Icon;
