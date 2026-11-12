import styled from "styled-components";
import ProductList from "@/components/ProductList";
import ProductForm from "@/components/ProductForm";

export default function HomePage() {
  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠{" "}
        </span>
        Fish Shop
        <span role="img" aria-label="A fish">
          {" "}
          🐠
        </span>
      </Heading>
      <ProductForm />
      <hr />
      <ProductList />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;
