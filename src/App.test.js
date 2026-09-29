import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  global.fetch = jest.fn(() => Promise.resolve({ ok: false, json: () => Promise.resolve({}) }));
});

test("renderiza o nome e as seções principais", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1, name: /Guilherme Teixeira/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Projetos selecionados/i })).toBeInTheDocument();
});
