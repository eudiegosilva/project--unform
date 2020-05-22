import React from 'react';

import { ButtonWrapper } from 'components/button/styles';
import PropTypes from 'prop-types';

const Button = ({ type, text }) => (
  <ButtonWrapper type={type}>{text}</ButtonWrapper>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'submit',
};
export default Button;
