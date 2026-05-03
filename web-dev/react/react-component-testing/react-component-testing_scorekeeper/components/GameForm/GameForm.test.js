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
  const gameNameInput = screen.getByLabelText("Name of game");
  expect(gameNameInput).toBeInTheDocument();
  const playerNameInput = screen.getByLabelText(
    "Player names, separated by comma",
  );
  expect(playerNameInput).toBeInTheDocument();
  const button = screen.getByRole("button", { name: "Create game" });
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const form = screen.getByRole("form", {
    name: "Create a new game",
  });
  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const handleCreateGame = jest.fn();
  const user = userEvent.setup();
  render(<GameForm onCreateGame={handleCreateGame} />);

  const gameNameInput = screen.getByLabelText("Name of game");
  const playerNameInput = screen.getByLabelText(
    "Player names, separated by comma",
  );
  const button = screen.getByRole("button", { name: "Create game" });

  await user.type(gameNameInput, "Frogger");
  await user.type(playerNameInput, "Pia, Ina");
  await user.click(button);
  expect(handleCreateGame).toHaveBeenCalledWith({
    playerNames: ["Pia", "Ina"],
    nameOfGame: "Frogger",
  });
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
