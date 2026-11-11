import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import Comments from "@/components/Comments";
import Image from "next/image";
import { useState } from "react";
import ProductForm from "@/components/ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <button
        type="button"
        alt="edit"
        onClick={() => setIsEditMode(!isEditMode)}
      >
        {isEditMode ? <>⬅️</> : <>✏️</>}
      </button>
      <button type="button" alt="delete" disabled={isEditMode}>
        ❌
      </button>
      {isEditMode && <ProductForm isEditMode />}
      <ProductCard>
        <h2>{data.name}</h2>
        {data.imageUrl && (
          <ImageWrapper>
            <Image
              src={data.imageUrl}
              alt={data.name}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </ImageWrapper>
        )}
        <p>Description: {data.description}</p>
        <p>
          Price: {data.price} {data.currency}
        </p>
        <StyledLink href="/">Back to all</StyledLink>
      </ProductCard>
      {data.reviews && <Comments reviews={data.reviews} />}
    </>
  );
}

export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
`;
