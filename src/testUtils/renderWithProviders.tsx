import { render, type RenderOptions } from "@testing-library/react";
import { type PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "~/styles/GlobalStyles";
import mainTheme from "~/styles/themes/mainTheme";

const renderWithProviders = (
  ui: React.ReactElement,
  renderOptions?: RenderOptions
) => {
  const Wrapper: React.FC = ({ children }: PropsWithChildren) => (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderWithProviders;
