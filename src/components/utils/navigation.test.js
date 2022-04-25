import { render, screen } from "@testing-library/react";
import App from "../../App";

test("Renders header", () => {
  render(<App />);
  const header = screen.getByTestId("navigation");
  expect(header).toBeInTheDocument();
});
