import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const InputWrapper = styled.input`
  border: 2px solid ${props => props.theme.colors.white2};
  border-radius: 4px;
  height: 44px;
  padding: 0 14px;
  width: 100%;
`;

export const ErrorContent = styled.span`
  color: ${props => props.theme.colors.error1};
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
`;
