import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled, { css } from "styled-components";
import ChevronLeft from "../../public/images/chevron-left.svg";
import ArrowLeft from "../../public/images/arrow-left.svg";
import ArrowRight from "../../public/images/arrow-right.svg";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <Main>
      <BackLink href="/volumes">
        <ChevronLeft /> All Volumes
      </BackLink>

      <Title>{title}</Title>
      <Description>{description}</Description>
      <BookInfo $color={color}>
        <BookList>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              <BookNumber>{ordinal}</BookNumber>
              <BookTitle>{title}</BookTitle>
            </li>
          ))}
        </BookList>
        <BookCover
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </BookInfo>
      {previousVolume ? (
        <NavLink href={`/volumes/${previousVolume.slug}`} $position="left">
          <ArrowLeft />
          <div>
            <LinkHeading>Previous Volume</LinkHeading>
            <LinkTitle>{previousVolume.title}</LinkTitle>
          </div>
        </NavLink>
      ) : null}
      {nextVolume ? (
        <NavLink href={`/volumes/${nextVolume.slug}`} $position="right">
          <div>
            <LinkHeading>Next Volume</LinkHeading>
            <LinkTitle>{nextVolume.title}</LinkTitle>
          </div>
          <ArrowRight />
        </NavLink>
      ) : null}
    </Main>
  );
}

const Main = styled.main`
  padding: 1.5rem;
`;

const Title = styled.h1`
  font: var(--font-headline-1);
  &:hover {
    color: salmon;
  }
`;

const BackLink = styled(Link)`
  font: var(--font-body);
  color: unset;
  text-decoration: none;
  font-weight: normal;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BookInfo = styled.ul`
  color: var(--color-smoke);
  margin-inline: -1.5rem;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  background-color: ${({ $color }) => $color};
`;

const BookList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;
const BookNumber = styled.div`
  font: var(--font-caption--italic);
  margin: 0;
  margin-bottom: 8px;
`;

const BookTitle = styled.h3`
  font: var(--font-title);
`;

const BookCover = styled(Image)`
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const Description = styled.p`
  font: var(--font-body);
  padding-block: 1rem;
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: normal;
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ $position }) =>
    $position === "left" &&
    css`
      grid-area: prev;
      justify-self: start;
      text-align: start;
    `}
  ${({ $position }) =>
    $position === "right" &&
    css`
      grid-area: next;
      justify-self: end;
      text-align: end;
    `};
`;

const LinkHeading = styled.h3`
  font: var(--font-caption--italic);
  margin: 0;
`;

const LinkTitle = styled.p`
  font: var(--font-caption);
  font-weight: bold;
  margin: 0;
`;
