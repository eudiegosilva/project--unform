import React from 'react';

import PropTypes from 'prop-types';

import { LabelWrapper } from './styles';

const Label = ({ label }) => <LabelWrapper>{label}</LabelWrapper>;

Label.propTypes = {
  label: PropTypes.string.isRequired,
};
export default Label;
