import styled from 'styled-components';

export const Image = styled.img`
  height: 30vh;
  object-fit: cover;
  display: block;
  &:hover,
  &:focus {
    transform: scale(1.1);
    transition-duration: 300ms;
  }
`;
