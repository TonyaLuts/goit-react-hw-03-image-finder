import { LoadMoreBtn } from './Button.styled';
import { BiLoader } from 'react-icons/bi';

export const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      <span>Load more</span>
      <BiLoader />
    </LoadMoreBtn>
  );
};
