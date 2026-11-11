import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <BoxContainer>
      <BoxWithStyledComponents $isBlack />
      <BoxWithStyledComponents />
      <BoxWithClassName isBlack />
      <BoxWithClassName />
    </BoxContainer>
  );
}

const BoxContainer = styled.section`
  display: flex;
`;
