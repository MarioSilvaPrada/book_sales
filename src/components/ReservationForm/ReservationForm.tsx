import { ChangeEvent, useState, SyntheticEvent, FC, useEffect } from "react";
import * as S from "./ReservationForm.style";
import { useReserveBookMutation } from "data/Books/booksApi";
type IProps = {
  bookId: number;
};

const initialForm = {
  name: "",
  email: "",
  phone: "",
  comment: "",
};

export const ReservationForm: FC<IProps> = ({ bookId }) => {
  const [reserveBook, { isLoading, isSuccess, isError }] =
    useReserveBookMutation();

  const [form, setForm] = useState({
    ...initialForm,
  });

  const onChangeText = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof typeof form
  ) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Por favor preencha o seu nome e email");
      return;
    }
    await reserveBook({ ...form, book: bookId });
  };

  useEffect(() => {
    if (isSuccess) {
      setForm({ ...initialForm });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      alert("Ocorreu um erro ao enviar a mensagem. Por favor tente novamente");
    }
  }, [isError]);

  const getSubmitValue = () => {
    if (isLoading) {
      return "A enviar mensagem...";
    }
    if (isSuccess) {
      return "A sua mensagem foi enviada com sucesso";
    }
    return "Reservar";
  };

  return (
    <S.Container>
      <S.Note>
        Caso pretenda comprar este livro, preencha os campos em baixo e
        entraremos em contacto consigo. Pode também fazer reserva para o mail
        info@livrospt.com
      </S.Note>
      <S.StyledForm onSubmit={handleSubmit}>
        <S.StyledInput
          value={form.name}
          onChange={(e) => onChangeText(e, "name")}
          placeholder="O seu Nome *"
        />
        <S.StyledInput
          value={form.email}
          onChange={(e) => onChangeText(e, "email")}
          placeholder="E-mail *"
        />
        <S.StyledInput
          value={form.phone}
          onChange={(e) => onChangeText(e, "phone")}
          placeholder="Contacto telefónico"
        />
        <S.TextArea
          value={form.comment}
          onChange={(e) => onChangeText(e, "comment")}
          placeholder="Comentário"
        />
        <S.Submit
          isSuccessful={isSuccess}
          type="submit"
          value={getSubmitValue()}
        />
      </S.StyledForm>
    </S.Container>
  );
};
