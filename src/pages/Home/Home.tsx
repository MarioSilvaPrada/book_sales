import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { booksSelector, setBookCount } from "data/Books/slice";
import { BookCard, Grid, ScreenTemplate } from "components";
import { useGetBooksQuery } from "data/Books/booksApi";
import { useGetCollectionByIdQuery } from "data/Collections/collectionsApi";
export const Home = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const { count } = useSelector(booksSelector);

  const searchField = searchParams.get("search") || undefined;
  const page = searchParams.get("page") || undefined;
  const collectionId = searchParams.get("collectionId") || "";

  const { data, isLoading, isFetching } = useGetBooksQuery({
    search: searchField,
    page: page,
  });

  const {
    data: collection,
    isLoading: loadingCollection,
    isFetching: fetchingCollection,
  } = useGetCollectionByIdQuery({ id: collectionId });

  const { results: books } = data || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchParams, collectionId, page, searchField]);

  useEffect(() => {
    if (data && count === 0) {
      dispatch(setBookCount(data.count));
    }
  }, [data, count, dispatch]);

  return (
    <ScreenTemplate
      isLoadingBooks={isLoading || isFetching || fetchingCollection}
      isLoadingCollections={loadingCollection}
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
          ? collection?.books_collection?.map((book) => (
              <BookCard key={book.id} book={book} />
            ))
          : books?.map((book) => <BookCard key={book.id} book={book} />)}
      </Grid>
    </ScreenTemplate>
  );
};
