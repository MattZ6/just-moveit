import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    title: 'light' | 'dark';

    dividerColor: string;

    backgroundColor: string;

    primaryColor: string;
    primaryDark: string;

    success: string;

    warn: string;

    primaryTextHighlight: string;
    primaryDarkTextHighlight: string;

    text: string;

    white: string;

    modalOverlay: string;
  }
}
