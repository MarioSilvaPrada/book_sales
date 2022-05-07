import { setBooks } from 'data/Books/actions';
import { FC, useState, SyntheticEvent } from 'react';
import { useAppDispatch } from 'store';
import * as S from './style';
import { BsSearch } from 'react-icons/bs';

type IProps = {};
export const SearchBar: FC<IProps> = () => {
  const dispatch = useAppDispatch();

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
          <BsSearch size={15}/>
        </S.IconWrapper>
        <S.SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Pesquise por título ou autor'
        />
        <S.Submit type='submit' value='Pesquisar' />
      </S.StyledForm>
    </S.Container>
  );
};
