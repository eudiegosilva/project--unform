import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background-color: ${props => props.theme.colors.black1};
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.colors.white1};
  height: 44px;
  margin-top: 8px;
  width: 100%;
`;
