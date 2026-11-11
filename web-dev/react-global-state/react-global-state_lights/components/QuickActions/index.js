import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onTurnLightsOff,
  onTurnLightsOn,
  lightsOnSum,
  lights,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={onTurnLightsOff}
        disabled={lightsOnSum === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={onTurnLightsOn}
        disabled={lightsOnSum === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
