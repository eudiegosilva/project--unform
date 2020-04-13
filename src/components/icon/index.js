import React from 'react';

import PropTypes from 'prop-types';

import { IconContainer, IconWrapper } from './styles';

const Icon = ({ src, alt, width }) => (
  <IconContainer>
    <IconWrapper src={src} alt={alt} width={width} />
  </IconContainer>
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Icon;
