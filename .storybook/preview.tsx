import type { Preview, StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "~/styles/themes/mainTheme";
import GlobalStyles from "~/styles/GlobalStyles";
import React from "react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story: StoryFn) => (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
