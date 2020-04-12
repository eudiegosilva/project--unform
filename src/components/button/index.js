import React from 'react';

import { ButtonWrapper } from './styles';

const Button = ({ type, text }) => (
  <ButtonWrapper type={type}>{text}</ButtonWrapper>
);

export default Button;
