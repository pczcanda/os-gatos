import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  startingUrl?: string;
}

export function renderWithBrowserRoute(
  ui: React.ReactElement,
  { startingUrl, ...renderOptions }: ExtendedRenderOptions = {}
) {
  if (startingUrl) {
    window.history.replaceState({}, "", startingUrl);
  }

  return { ...render(ui, { wrapper: BrowserRouter, ...renderOptions }) };
}
