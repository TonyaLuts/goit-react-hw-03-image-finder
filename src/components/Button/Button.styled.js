import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  padding: ${p => p.theme.spasing(2)};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: ${p => p.theme.spasing(2)};
  margin: ${p => p.theme.spasing(10)} auto;
  width: 150px;
  cursor: pointer;
  border: none;
  box-shadow: 2px 2px 5px 1px rgb(51, 51, 51, 0.2);
  &:hover,
  &:focus {
    transform: scale(1.1);
    transition-duration: 300ms;
  }
  &:active {
    box-shadow: 2px 2px 5px 1px #79f7f9;
    transform: scale(1);
    transition-duration: 300ms;
  }
`;
