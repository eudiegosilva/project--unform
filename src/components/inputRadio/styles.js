import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const InputRadioWrapper = styled.input`
  opacity: 0;
  position: absolute;

  & + label {
    cursor: pointer;
    padding: 0;
    position: relative;
  }

  & + label:before {
    background: ${props => props.theme.colors.white1};
    border-radius: 50%;
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
        : `2px solid ${props.theme.colors.green1}`};
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
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.green1};
    content: '';
    height: 22px;
    position: absolute;
    width: 22px;
  }
`;

export const InputContent = styled.div`
  align-items: center;
  display: flex;
  height: 44px;
  justify-content: space-around;
`;

export const InputRadioContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const InputRadioLabel = styled.label`
  align-items: center;
  display: flex;
`;

export const ErrorContent = styled.span`
  color: ${props => props.theme.colors.error1};
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
`;
