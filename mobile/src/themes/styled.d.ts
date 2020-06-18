import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      tertiary: string;
      
      background: string;
      card: string;
      select: string;
      button: string;
      title: string;
      text: string;
    }
  }
}