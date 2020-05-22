import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const InputWrapper = styled.input`
  /* border: 2px solid ${props => props.theme.colors.gray1}; */
  /* border-radius: 4px; */
  /* height: 44px; */
  /* padding: 0 14px; */
  /* width: 100%; */
`;

export const InputContent = styled.div`
  border: 1px solid red;

  display: flex;
  justify-content: space-around;
  height: 44px;
  align-items: center;
`;

export const InputRadioContainer = styled.div`
  border: 1px solid red;
  align-items: center;
  display: flex;
`;

export const InputRadioLabel = styled.label`
  /* align-items: center; */
  /* display: flex; */
`;

export const ErrorContent = styled.span`
  color: ${props => props.theme.colors.error1};
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
`;
