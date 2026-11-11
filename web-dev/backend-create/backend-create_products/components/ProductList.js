import useSWR from "swr";
import StyledLink from "@/components/Link";
import styled from "styled-components";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>Available Fishes</StyledHeading>
      <StyledList>
        {data.map((product) => (
          <StyledListItem key={product._id}>
            <StyledLink href={`/${product._id}`}>{product.name}</StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}

const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  justify-items: center;
  padding: 0;
`;

const StyledListItem = styled.li`
  box-shadow: 0px 1px 5px -2px var(--color-granite);
  border-radius: 10px;
`;
