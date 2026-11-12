import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="Bernd" score={3} />);
  const playerName = screen.getByText("Bernd");
  expect(playerName).toBeInTheDocument();

  const playerScore = screen.getByText(3);
  expect(playerScore).toBeInTheDocument();

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleIncrease = jest.fn();
  const handleDecrease = jest.fn();
  const user = userEvent.setup();
  render(
    <Player
      onIncreasePlayerScore={handleIncrease}
      onDecreasePlayerScore={handleDecrease}
    />,
  );
  const increaseButton = screen.getByRole("button", { name: "Increase Score" });

  expect(handleIncrease).toHaveBeenCalledTimes(0);
  await user.click(increaseButton);
  expect(handleIncrease).toHaveBeenCalledTimes(1);
  const decreaseButton = screen.getByRole("button", { name: "Decrease Score" });

  expect(handleDecrease).toHaveBeenCalledTimes(0);
  await user.click(decreaseButton);
  expect(handleDecrease).toHaveBeenCalledTimes(1);
});
