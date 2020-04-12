import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  width: 330px;
`;
export const InputWrapper = styled.input`
  height: 44px;
  border-radius: 4px;
  border: 2px solid #ddd;
  padding: 0 14px;
`;
export const LabelWrapper = styled.label`
  width: 100%;
  font-family: 'Roboto', sans-serif;
`;
export const ErrorContent = styled.span`
  color: red;
  width: 100%;
`;
