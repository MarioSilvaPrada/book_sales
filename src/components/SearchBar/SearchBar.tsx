import { FC, useState, SyntheticEvent, useEffect } from "react";
import { useAppDispatch } from "store";
import * as S from "./style";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";

type IProps = {};
export const SearchBar: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchField = searchParams.get("search");
    if (searchField) {
      setSearch(searchField);
    }
  }, [searchParams, dispatch]);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (search) {
      history(`?search=${search}`);
    } else {
      history("/");
    }
  };
  return (
    <S.Container>
      <S.StyledForm onSubmit={handleSubmit}>
        <S.IconWrapper>
          <BsSearch size={15} />
        </S.IconWrapper>
        <S.SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquise por título ou autor"
        />
        <S.Submit type="submit" value="Pesquisar" />
      </S.StyledForm>
    </S.Container>
  );
};
