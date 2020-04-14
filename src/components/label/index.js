import React from 'react';

import PropTypes from 'prop-types';

import { LabelWrapper } from './styles';

const Label = ({ content }) => <LabelWrapper>{content}</LabelWrapper>;

Label.propTypes = {
  content: PropTypes.string.isRequired,
};
export default Label;
