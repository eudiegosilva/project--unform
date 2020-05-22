import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const InputContent = styled.div`
  display: flex;
  justify-content: space-around;
  height: 44px;
`;

export const InputCheckboxContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const InputCheckboxWrapper = styled.input`
  opacity: 0;
  position: absolute;

  & + label {
    cursor: pointer;
    padding: 0;
    position: relative;
  }

  & + label:before {
    background: white;
    border-radius: 4px;
    border: 2px solid ${props => props.theme.colors.gray1};
    content: '';
    display: inline-block;
    height: 20px;
    margin-right: 10px;
    width: 20px;
  }

  &:hover + label:before {
    border: ${props =>
      props.disabled
        ? `2px solid ${props.theme.colors.gray1}`
        : `1px solid ${props.theme.colors.green1}`};
  }

  &:checked + label:before {
    background-color: ${props => props.theme.colors.white1};
    border: 2px solid ${props => props.theme.colors.green1};
  }

  &:disabled + label {
    color: ${props => props.theme.colors.gray2};
    cursor: auto;
  }

  &:disabled + label:before {
    background: ${props => props.theme.colors.gray1};
    box-shadow: none;
  }

  &:checked + label:after {
    background: ${props => props.theme.colors.green1};
    box-shadow: 2px 0 0 ${props => props.theme.colors.green1},
      4px 0 0 ${props => props.theme.colors.green1},
      4px -2px 0 ${props => props.theme.colors.green1},
      4px -4px 0 ${props => props.theme.colors.green1},
      4px -6px 0 ${props => props.theme.colors.green1},
      4px -8px 0 ${props => props.theme.colors.green1};
    content: '';
    height: 2px;
    left: 5px;
    position: absolute;
    top: 9px;
    transform: rotate(45deg);
    width: 2px;
  }
`;

export const InputCheckboxLabel = styled.label`
  align-items: center;
  display: flex;
`;
