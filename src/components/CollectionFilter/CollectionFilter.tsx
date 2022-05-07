import React, { FC } from 'react';
import { collectionSelector } from 'data/Collections/slice';
import { useSelector } from 'react-redux';
import { Tag } from 'components';
import * as S from './CollectionFilter.style';

type IProps = {
  currentCollectionId?: string;
};
export const CollectionFilter: FC<IProps> = ({ currentCollectionId }) => {
  const { collections } = useSelector(collectionSelector);

  return (
    collections && (
      <S.Container>
        <S.FilterText>Filtrar por coleções:</S.FilterText>
        <S.TagWrapper>
          {collections.results.map((collection) => (
            <S.StyledLink
              key={collection.id}
              to={`/collections/${collection.id}`}
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
