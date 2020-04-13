import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.input`
  height: 44px;
  border-radius: 4px;
  border: 2px solid ${props => props.theme.colors.white2};
  padding: 0 14px;
  width: 100%;
`;

export const LabelWrapper = styled.label``;

export const ErrorContent = styled.span`
  color: red;
`;
