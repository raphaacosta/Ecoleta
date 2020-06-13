import styled from 'styled-components';

export const DropzoneStyle = styled.div`
  height: 300px;
  background: ${({ theme }) => theme.title === 'light' ? theme.colors.tertiary : theme.colors.background};
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  outline: 0;

  img {
    width: 100%;
    height: 100%; 
    object-fit: cover;
  }

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed ${({ theme }) => theme.colors.primary};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};

    svg {
      color: ${({ theme }) => theme.colors.primary};
      width: 24px;
      height: 24px;
      margin-bottom: 8px;
    }
  }
`;

