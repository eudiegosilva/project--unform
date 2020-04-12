import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import {
  InputContainer,
  InputWrapper,
  ErrorContent,
  LabelWrapper,
} from './styles';

export default function InputText({ name, type, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer>
      {label && <LabelWrapper>{label}</LabelWrapper>}
      <InputWrapper
        ref={inputRef}
        type={type}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <ErrorContent>{error}</ErrorContent>}
    </InputContainer>
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
};

InputText.defaultProps = {
  type: 'text',
  label: '',
};
