import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";

export default function Volumes() {
  return (
    <Main>
      <Title>The Lord of the Rings</Title>
      <Introduction>{introduction}</Introduction>
      <VolumesOverview>All Volumes</VolumesOverview>
      <BookList>
        {volumes.map((volume) => (
          <BookTitle key={volume.id}>
            <Image
              src={volume.cover}
              alt={`Cover image of ${volume.title}`}
              width={80}
              height={130}
            />
            <StyledLink href={`/volumes/${volume.slug}`}>
              {volume.title}
            </StyledLink>
          </BookTitle>
        ))}
      </BookList>
    </Main>
  );
}
const Main = styled.main`
  padding: 2.5rem;
`;

const Title = styled.h1`
  font: var(--font-headline-1);
`;
const Introduction = styled.p`
  font: var(--font-body);
  padding-block: 1rem;
`;

const VolumesOverview = styled.h2`
  font: var(--font-headline-2);
`;

const BookList = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  justify-items: center;
`;

const BookTitle = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font: var(--font-caption);
  &:hover {
    text-decoration: underline;
    color: salmon;
  }
`;
