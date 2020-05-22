import React from 'react';

import { LabelWrapper } from 'components/label/styles';
import PropTypes from 'prop-types';

const Label = ({ content }) => <LabelWrapper>{content}</LabelWrapper>;

Label.propTypes = {
  content: PropTypes.string.isRequired,
};
export default Label;
