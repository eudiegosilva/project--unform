import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import {
  InputContainer,
  InputWrapper,
  ErrorContent,
} from 'components/inputText/styles';
import Label from 'components/label';
import PropTypes from 'prop-types';

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
      {label && <Label content={label} />}
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
