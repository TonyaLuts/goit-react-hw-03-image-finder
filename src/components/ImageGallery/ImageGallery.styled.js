import styled from 'styled-components';

export const ListGallery = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.spasing(5)};
  padding-top: ${p => p.theme.spasing(5)};
`;
