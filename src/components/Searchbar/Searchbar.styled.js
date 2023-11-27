import styled from 'styled-components';

export const Header = styled.header`
  padding: ${p => p.theme.spasing(10)};
  display: flex;
  justify-content: center;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(226, 45, 253, 1) 100%
  );
  box-shadow: 2px 2px 5px 1px #79f7f9;
`;

export const FormField = styled.form`
  display: flex;
`;

export const FormInput = styled.input`
  padding: ${p => p.theme.spasing(2)};
  font: inherit;
  width: 500px;
  border-color: #e22dfd;
  border: none;
  &:hover,
  &:focus {
    outline: none;
    border-color: #79f7f9;
    box-shadow: 0 0 10px #79f7f9;
    transition-duration: 300ms;
  }
`;

export const SearchBtn = styled.button`
  padding: ${p => p.theme.spasing(2)};
  border: none;
  width: 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: ${p => p.theme.spasing(2)};
  cursor: pointer;
  &:hover,
  &:focus {
    background: #94e9eb;
    box-shadow: 0 0 10px #79f7f9;
    transition-duration: 300ms;
  }
`;
