import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "./Link";

export default function Navigation() {
  const router = useRouter();
  //console.log(router.pathname);

  return (
    <StyledNavigation>
      <StyledLink href="/" $isActive={router.pathname === "/"}>
        <StyledActiveBox $isActive={router.pathname === "/"}>
          <span>Fish List</span>
        </StyledActiveBox>
      </StyledLink>
      <StyledLink href="/ocean" $isActive={router.pathname === "/ocean"}>
        <StyledActiveBox $isActive={router.pathname === "/ocean"}>
          <span>Explore</span>
        </StyledActiveBox>
      </StyledLink>
      <StyledLink href="/favorite" $isActive={router.pathname === "/favorite"}>
        <StyledActiveBox $isActive={router.pathname === "/favorite"}>
          <span>Favorites </span>
        </StyledActiveBox>
      </StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  /* height: 2rem; */
  background-color: lightgrey;
  box-shadow:
    0 1px 10px #4a7375,
    inset 0 0 10px rgba(255, 255, 255, 0.5);
  width: calc(100% - 32px);
  height: 3rem;
  max-width: 50rem;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #1c5e56;
  text-decoration: none;
  font-size: 1.25rem;
  line-height: 1.4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  height: 100%;
  text-align: center;
`;

const StyledActiveBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ $isActive }) => ($isActive ? "var(--color-nemo)" : "#252629")};
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
`;
