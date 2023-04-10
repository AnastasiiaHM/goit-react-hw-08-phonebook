import styled from 'styled-components';

export const UserMenu = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;
`;

export const UserEmail = styled.p`
  margin-right: 30px;
`;

export const LogoutBtn = styled.button`
  padding: 10px;
  width: 100px;
  border: 2px solid #5b5d8f;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 500;
  color: #5b5d8f;
  background-color: lavender;
  &:hover {
    color: white;
    background-color: #5b5d8f;
  }
`;
