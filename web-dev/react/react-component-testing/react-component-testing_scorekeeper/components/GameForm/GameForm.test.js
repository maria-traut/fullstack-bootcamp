import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);
  const input1 = screen.getByLabelText("Name of game");
  expect(input1).toBeInTheDocument();
  const input2 = screen.getByLabelText("Player names, separated by comma");
  expect(input2).toBeInTheDocument();
  const button = screen.getByRole("button", { name: "Create game" });
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const formHeading = screen.getByRole("heading", {
    name: "Create a new game",
  });
  expect(formHeading).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  render(<GameForm />);
  const user = userEvent.setup();
  const input1 = screen.getByLabelText("Name of game");
  await user.type(input1, "Frogger");
  const input2 = screen.getByLabelText("Player names, separated by comma");
  await user.type(input2, "Pia, Ina");
  const button = screen.getByRole("button", { name: "Create game" });
  await user.click(button);
});

test("does not submit form if one input field is left empty", async () => {
  render(<GameForm />);
  const user = userEvent.setup();
  const input1 = screen.getByLabelText("Name of game");
  await user.type(input1, "Frogger");
  expect(input1).toBeInTheDocument();
  const input2 = screen.getByLabelText("Player names, separated by comma");
  await user.type(input2, "Pia, Ina");
  expect(input2).not.toBeInTheDocument();
  const button = screen.getByRole("button", { name: "Create game" });
  await user.click(button);
});
