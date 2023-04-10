import { Button } from '../Button/Button.styled';

export const Btn = ({ type, btnName }) => {
  return (
    <>
      <Button type={type}>{btnName}</Button>
    </>
  );
};
