import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';

import { useField } from '@unform/core';
import {
  InputSelectContainer,
  InputSelectWrapper,
  ErrorContent,
} from 'components/inputSelect/styles';
import Label from 'components/label';
import PropTypes from 'prop-types';

const InputSelect = ({ name, label, options, ...rest }) => {
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

  return (
    <InputSelectContainer>
      {label && <Label content={label} />}
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

InputSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

InputSelect.defaultProps = {
  label: '',
};
export default InputSelect;
