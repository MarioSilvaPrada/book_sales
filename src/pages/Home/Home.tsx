import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { booksSelector, setBookCount } from "data/Books/slice";
import { BookCard, Grid, ScreenTemplate } from "components";
import { useGetBooksQuery } from "data/Books/booksApi";
export const Home = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const { count } = useSelector(booksSelector);

  const searchField = searchParams.get("search") || undefined;
  const page = searchParams.get("page") || undefined;
  const collection = searchParams.getAll("collection") || "";
  const categories = searchParams.getAll("category") || "";

  const { data, isLoading, isFetching } = useGetBooksQuery({
    search: searchField,
    page: page,
    collection: Boolean(collection?.length) ? collection : undefined,
    category: Boolean(categories?.length) ? categories : undefined,
  });

  const { results: books } = data || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchParams, page, searchField]);

  useEffect(() => {
    if (data?.count) {
      dispatch(setBookCount(data.count));
    }
  }, [data, count, dispatch]);

  return (
    <ScreenTemplate
      isLoadingBooks={isLoading || isFetching}
      currentPage={page}
      searchActive
    >
      <Grid>
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Grid>
    </ScreenTemplate>
  );
};
