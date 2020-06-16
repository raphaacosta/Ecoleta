import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.0);
  height: 80px;
  width: 80%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.text}
`;

export const Content = styled.header`
  display: flex;
  flex-direction: row;
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
