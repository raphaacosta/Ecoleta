import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.0);
  height: 40px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text}
`;

export const Content = styled.header`
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.title};
    font-weight: bold;
    text-decoration: none;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
      color: ${({ theme }) => theme.title === 'light' ? theme.colors.primary : theme.colors.text};
    }
  }
`;
