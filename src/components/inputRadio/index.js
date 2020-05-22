import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import {
  InputContainer,
  InputWrapper,
  InputContent,
  InputRadioContainer,
  InputRadioLabel,
  ErrorContent,
} from 'components/inputRadio/styles';
import Label from 'components/label';
import PropTypes from 'prop-types';

function InputRadio({ name, label, options, ...rest }) {
  const inputRefs = useRef([]);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      path: 'value',
      getValue: refs => {
        const checked = refs.find(ref => ref.checked);
        return checked ? checked.value : '';
      },
      setValue: (refs, value) => {
        const item = refs.find(ref => ref.value === value);
        if (item) {
          item.checked = true;
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer>
      {label && <Label content={label} />}
      <InputContent>
        {options.map((option, index) => (
          <InputRadioContainer key={option.value}>
            <InputWrapper
              ref={currentRef => {
                inputRefs.current[index] = currentRef;
              }}
              name={fieldName}
              type="radio"
              id={`radio-${index}`}
              value={option.value}
              defaultChecked={defaultValue === option.value}
              disabled={option.disabled}
              {...rest}
            />
            <InputRadioLabel htmlFor={`radio-${index}`}>
              {option.label}
            </InputRadioLabel>
          </InputRadioContainer>
        ))}
      </InputContent>
      {error && <ErrorContent>{error}</ErrorContent>}
    </InputContainer>
  );
}

InputRadio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ).isRequired,
};

InputRadio.defaultProps = {
  label: '',
};

export default InputRadio;
