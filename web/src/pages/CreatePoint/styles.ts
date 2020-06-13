import styled from 'styled-components';

export const PageCreatePoint = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;
`;

export const Header = styled.header`
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    color: ${({ theme }) => theme.colors.title};
    font-weight: bold;
    text-decoration: none;
    
    display: flex;
    align-items: center;

    > svg {
      margin-right: 16px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Form = styled.form`
  margin: 80px auto;
  padding: 64px;
  max-width: 730px;
  background: ${({ theme }) => theme.colors.box};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 36px;
  }

  fieldset {
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;
  }

  legend {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    h2 {
      font-size: 24px;
    }

    span {
      font-size: 14px;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .field {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    label {
      font-size: 14px;
      margin-bottom: 8px;
    }

    input[type='text'],
    input[type='email'],
    input[type='number'] {
      flex: 1;
      background: ${({ theme }) => theme.colors.background};
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.text};
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      flex: 1;
      background: ${({ theme }) => theme.colors.background};
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.text};
    }

    & :disabled {
      cursor: not-allowed;
    }
  }

  .field-check {
    flex-direction: row;
    align-items: center;

    input[type='checkbox'] {
      background: ${({ theme }) => theme.colors.primary};
    }

    label {
      margin: 0 0 0 8px;
    }
  }

  .leaflet-container {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-bottom: 24px;
  }

  > button {
    width: 260px;
    height: 56px;
    background: ${({ theme }) => theme.title === 'light' ? theme.colors.button : theme.colors.button};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.title};
    font-weight: bold;
    font-size: 16px;
    border: 0;
    align-self: flex-end;
    margin-top: 40px;
    transition: background-color 0.2s;
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.title === 'light' ? theme.colors.secundary : theme.colors.background};
      border: 2px solid ${({ theme }) => theme.title === 'light' ? theme.colors.title : theme.colors.title};
      font-weight: bolder;
    }
  }
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;
  
  > div + div,
  > input + input {
    margin-left: 24px;
  }
`;

export const ItemsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    > button {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;

      cursor: pointer;
      background: ${({ theme }) => theme.title === 'light' ? theme.colors.background :theme.colors.button};
      border: 2px solid ${({ theme }) => theme.colors.background};
      width: 100%;
      height: 180px;
      border-radius: 8px;
      padding: 32px 24px 16px;

      > span {
        flex: 1;
        margin-top: 12px;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.title};
        font-weight: bolder;
      }

      &.selected {
        background: ${({ theme }) => theme.title === 'light' ? theme.colors.tertiary : theme.colors.button};
        border: 2px solid ${({ theme }) => theme.title === 'light' ? theme.colors.primary : theme.colors.title};
      }
    }
  }
`;

export const Message = styled.div`
  background-color: #0E0A14Ef;
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 400ms;

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed #4ECB79;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;

    svg {
      color: #4ECB79;
      width: 24px;
      height: 24px;
      margin-bottom: 8px;
    }
  }

  .hide {
    display: none;  
  }
`;