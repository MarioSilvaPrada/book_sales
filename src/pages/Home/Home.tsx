import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { booksSelector, setBookCount } from "data/Books/slice";
import { BookCard, Grid, ScreenTemplate } from "components";
import { getBooksFromCollection } from "data/Collections/actions";
import { collectionSelector } from "data/Collections/slice";
import { useGetBooksQuery } from "data/Books/booksApi";
export const Home = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { collectionsFilter, loading: loadingCollections } =
    useSelector(collectionSelector);
  const { count } = useSelector(booksSelector);

  const searchField = searchParams.get("search") || undefined;
  const page = searchParams.get("page") || undefined;
  const collectionId = searchParams.get("collectionId") || undefined;

  const { data, isLoading, isFetching } = useGetBooksQuery({
    search: searchField,
    page: page,
  });

  const { results: books } = data || {};

  console.log({ data, isLoading, page });

  useEffect(() => {
    window.scrollTo(0, 0);

    if (collectionId) {
      dispatch(getBooksFromCollection(collectionId));
    }
  }, [dispatch, searchParams, collectionId, page, searchField]);

  useEffect(() => {
    if (data && count === 0) {
      dispatch(setBookCount(data.count));
    }
  }, [data]);

  return (
    <ScreenTemplate
      isLoadingBooks={isLoading || isFetching}
      isLoadingCollections={loadingCollections}
      currentPage={page}
      currentCollectionId={collectionId}
      searchActive
      addFilter
      searchField={searchField}
      collectionId={collectionId}
      paginationDisabled={!!collectionId}
    >
      <Grid>
        {collectionId
          ? collectionsFilter[collectionId]?.map((book) => (
              <BookCard key={book.id} book={book} />
            ))
          : books?.map((book) => <BookCard key={book.id} book={book} />)}
      </Grid>
    </ScreenTemplate>
  );
};
