import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import {
  InputContainer,
  InputContent,
  InputCheckboxContainer,
  InputCheckboxWrapper,
  InputCheckboxLabel,
  ErrorContent,
} from 'components/inputCheckbox/styles';
import Label from 'components/label';

function Checkbox({ name, label, options, ...rest }) {
  const inputRefs = useRef([]);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      path: 'value',
      getValue: refs => {
        const results = refs
          .filter(reference => reference.checked)
          .map(reference => reference.value);
        return results;
      },
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer>
      {label && <Label content={label} />}
      <InputContent>
        {options.map((option, index) => (
          <InputCheckboxContainer key={option.value}>
            <InputCheckboxWrapper
              type="checkbox"
              ref={currentRef => {
                inputRefs.current[index] = currentRef;
              }}
              value={option.value}
              id={`checkbox-${index}`}
              checked={option.checked}
              disabled={option.disabled}
              {...rest}
            />
            <InputCheckboxLabel htmlFor={`checkbox-${index}`}>
              {option.label}
            </InputCheckboxLabel>
          </InputCheckboxContainer>
        ))}
      </InputContent>
      {error && <ErrorContent>{error}</ErrorContent>}
    </InputContainer>
  );
}

export default Checkbox;
