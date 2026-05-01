import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onTurnLightsOff, onTurnLightsOn }) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={onTurnLightsOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={onTurnLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
