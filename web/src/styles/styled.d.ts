import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      tertiary: string;

      background: string;
      box: string;
      button: string;
      title: string;
      text: string;
    },
  }
}