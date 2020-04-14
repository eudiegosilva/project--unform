import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';

import { useField } from '@unform/core';
import { Label } from 'components';

import {
  InputSelectContainer,
  InputSelectWrapper,
  ErrorContent,
} from './styles';

const InputSelect = ({ name, label, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map(option => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  const inputStyle = {
    control: styles => ({
      ...styles,
      border: `2px solid #ddd`,
      height: '44px',
      borderRadius: 4,
    }),
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <InputSelectContainer>
      {label && <Label label={label} />}
      <InputSelectWrapper>
        <ReactSelect
          defaultValue={defaultValue}
          ref={selectRef}
          classNamePrefix="react-select"
          options={options}
          styles={inputStyle}
        />
      </InputSelectWrapper>
      {error && <ErrorContent>{error}</ErrorContent>}
    </InputSelectContainer>
  );
};

export default InputSelect;
