import { FC } from "react";

import { Tag } from "components";
import * as S from "./CollectionFilter.style";
import { CollectionResponse } from "data/Collections/types";

type IProps = {
  currentCollectionId?: string;
  collectionResponse: CollectionResponse;
};
export const CollectionFilter: FC<IProps> = ({
  currentCollectionId,
  collectionResponse,
}) => {
  const { results: collections } = collectionResponse;

  return (
    collections && (
      <S.Container>
        <S.HeaderWrapper>
          <S.FilterText>Filtrar por coleções:</S.FilterText>
        </S.HeaderWrapper>
        <S.TagWrapper>
          {collections.map((collection) => (
            <S.StyledLink
              key={collection.id}
              to={{
                pathname: "/",
                search: `?collectionId=${collection.id}`,
              }}
            >
              <Tag isSelected={currentCollectionId === String(collection.id)}>
                {collection.title}
              </Tag>
            </S.StyledLink>
          ))}
        </S.TagWrapper>
      </S.Container>
    )
  );
};
