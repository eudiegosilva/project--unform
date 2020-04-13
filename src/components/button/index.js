import React from 'react';

import PropTypes from 'prop-types';

import { ButtonWrapper } from './styles';

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
