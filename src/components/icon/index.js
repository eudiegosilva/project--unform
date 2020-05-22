import React from 'react';

import { IconContainer, IconWrapper } from 'components/icon/styles';
import PropTypes from 'prop-types';

const Icon = ({ src, alt, width }) => (
  <IconContainer>
    <IconWrapper src={src} alt={alt} width={width} />
  </IconContainer>
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Icon;
