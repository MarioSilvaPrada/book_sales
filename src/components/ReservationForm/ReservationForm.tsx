import { ChangeEvent, useState, SyntheticEvent, FC, useEffect } from "react";
import * as S from "./ReservationForm.style";
import { useAppDispatch } from "store";
import { sendReservation } from "data/Reservations/action";
import { useSelector } from "react-redux";
import { reservationSelector } from "data/Reservations/slice";
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
  const dispatch = useAppDispatch();
  const { isSuccessful, errorMessage, loading } =
    useSelector(reservationSelector);

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

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Por favor preencha o seu nome e email");
      return;
    }
    dispatch(sendReservation({ ...form, book: bookId }));
  };

  useEffect(() => {
    if (isSuccessful) {
      setForm({ ...initialForm });
    }
  }, [isSuccessful]);

  const validate = (key: string) => {
    if (typeof errorMessage !== "string") {
      return key in errorMessage.data;
    }
    return false;
  };

  const getSubmitValue = () => {
    if (loading) {
      return "A enviar mensagem...";
    }
    if (isSuccessful) {
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
          isInvalid={validate("name")}
        />
        <S.StyledInput
          value={form.email}
          onChange={(e) => onChangeText(e, "email")}
          placeholder="E-mail *"
          isInvalid={validate("email")}
        />
        <S.StyledInput
          value={form.phone}
          onChange={(e) => onChangeText(e, "phone")}
          placeholder="Contacto telefónico"
          isInvalid={validate("phone")}
        />
        <S.TextArea
          value={form.comment}
          onChange={(e) => onChangeText(e, "comment")}
          placeholder="Comentário"
        />
        <S.Submit
          isSuccessful={isSuccessful}
          type="submit"
          value={getSubmitValue()}
        />
      </S.StyledForm>
    </S.Container>
  );
};
