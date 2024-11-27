import { ChevronIcon } from "assets/icons/chevron";
import { CloseIcon } from "assets/icons/close";
import { booksSelector, setFilter, setIsFilterOpen } from "data/Books/slice";
import {
  useGetCategoriesQuery,
  useGetCollectionsQuery,
} from "data/Collections/collectionsApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "store";
import styled from "styled-components";

export const Filters = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const collectionsURL = searchParams.getAll("collection") || "";
  const categoriesURL = searchParams.getAll("category") || "";
  const [isOpened, setIsOpened] = useState({
    collections: false,
    categories: false,
  });
  const { isFilterOpen, filterCategories, filterCollections } =
    useSelector(booksSelector);
  const { data: collections, isLoading: loadingCollections } =
    useGetCollectionsQuery();
  const { data: categories, isLoading: loadingCategories } =
    useGetCategoriesQuery();

  const closeFilter = () => {
    dispatch(setIsFilterOpen(false));
  };

  if (loadingCollections || loadingCategories) return null;

  const onApply = () => {
    const params = new URLSearchParams();
    if (filterCollections) {
      for (const collection of filterCollections) {
        params.append("collection", String(collection));
      }
    }

    if (filterCategories) {
      for (const category of filterCategories) {
        params.append("category", String(category));
      }
    }

    setSearchParams(params);
    closeFilter();
    onClear();
  };

  const onClear = () => {
    dispatch(setFilter({ field: "collection", values: [] }));
    dispatch(setFilter({ field: "categories", values: [] }));
  };

  const filterOptions = [
    {
      title: "Colecções",
      onClick: () =>
        setIsOpened({ ...isOpened, collections: !isOpened.collections }),
      options:
        collections?.results.map((collection) => ({
          title: collection.title,
          id: collection.id,
          checked: filterCollections.includes(collection.id),
          onChange: (checked: boolean) => {
            dispatch(
              setFilter({
                field: "collection",
                values: !filterCollections.includes(collection.id)
                  ? [...filterCollections, collection.id]
                  : filterCollections.filter((id) => id !== collection.id),
              })
            );
          },
        })) || [],
      isOpened: isOpened.collections,
    },
    {
      title: "Categorias",
      onClick: () =>
        setIsOpened({ ...isOpened, categories: !isOpened.categories }),
      options: categories?.map((category) => ({
        title: category.title,
        id: category.id,
        checked: filterCategories.includes(category.id),
        onChange: (checked: boolean) => {
          dispatch(
            setFilter({
              field: "categories",
              values: !filterCategories.includes(category.id)
                ? [...filterCategories, category.id]
                : filterCategories.filter((id) => id !== category.id),
            })
          );
        },
      })),
      isOpened: isOpened.categories,
    },
  ];

  return (
    <FilterContainer isOpened={isFilterOpen}>
      <TopWrapper>
        <p>Filtros</p>
        {Boolean(filterCategories.length || filterCollections.length) && (
          <ClearButton onClick={onClear}>Apagar seleção</ClearButton>
        )}
        <button onClick={closeFilter}>
          <CloseIcon size={16} />
        </button>
      </TopWrapper>
      <FilterWrapper>
        {filterOptions.map((filter) => (
          <FilterRow key={filter.title}>
            <IconWrapper onClick={filter.onClick}>
              <FilterTitle>{filter.title}</FilterTitle>
              <ChevronIcon size={20} />
            </IconWrapper>
            <Accordion isOpen={filter.isOpened}>
              {filter.options?.map((option) => (
                <Label>
                  <input
                    type="checkbox"
                    checked={option.checked}
                    //@ts-ignore
                    onChange={option.onChange}
                  />
                  {option.title}
                </Label>
              ))}
            </Accordion>
          </FilterRow>
        ))}
      </FilterWrapper>
      <FilterButton onClick={onApply}>Aplicar</FilterButton>
    </FilterContainer>
  );
};

const ClearButton = styled.button`
  font-size: 0.8rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.third};

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.main};
  margin: 0.5rem;
  border-radius: 0.5rem;
`;

const Label = styled.label`
  display: flex;
  align-items: flex-start;
  text-align: left;
  gap: 0.3rem;
  cursor: pointer;

  & > input[type="checkbox"] {
    margin-top: 0.2rem;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  overflow-y: auto;
  max-height: 60vh;
`;

const FilterContainer = styled.div<{ isOpened: boolean }>`
  border-radius: 0.5rem;
  background-color: white;
  border-radius: 0.5rem;
  position: fixed;
  right: 2rem;
  transition: 0.8s;
  transform: translateX(${({ isOpened }) => (isOpened ? "0" : "300%")});
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 18rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

const Accordion = styled.div<{ isOpen?: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  @media (max-width: 900px) {
    gap: 1rem;
  }
`;

const FilterRow = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem 1rem;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

const FilterTitle = styled.p`
  font-weight: bold;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  position: sticky;
  top: 0;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
`;
