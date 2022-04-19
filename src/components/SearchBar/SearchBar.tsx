import { setBooks } from 'data/Books/actions';
import { FC, useState, SyntheticEvent } from 'react';
import { useAppDispatch } from 'store';
import * as S from './style';
import { BsSearch } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';

type IProps = {};
export const SearchBar: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  let [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState('');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (search) {
      dispatch(setBooks(undefined, search));
    }
  };
  return (
    <S.Container>
      <S.StyledForm onSubmit={handleSubmit}>
        <S.IconWrapper>
          <BsSearch />
        </S.IconWrapper>
        <S.SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Pesquise por título do livro ou autor'
        />
        <S.Submit type='submit' value='Pesquisar' />
      </S.StyledForm>
    </S.Container>
  );
};
