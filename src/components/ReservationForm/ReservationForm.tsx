import { ChangeEvent, useState, SyntheticEvent, FC, useEffect } from 'react';
import * as S from './ReservationForm.style';
import { useAppDispatch } from 'store';
import { sendReservation } from 'data/Reservations/action';
import { useSelector } from 'react-redux';
import { reservationSelector } from 'data/Reservations/slice';

type IProps = {
  bookId: number;
};

const initialForm = {
  name: '',
  email: '',
  phone: '',
  comment: '',
};
export const ReservationForm: FC<IProps> = ({ bookId }) => {
  const dispatch = useAppDispatch();
  const { isSuccessful } = useSelector(reservationSelector);

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
    dispatch(sendReservation({ ...form, book: bookId }));
  };

  useEffect(() => {
    if (isSuccessful) {
      setForm({ ...initialForm });
    }
  }, [isSuccessful]);

  return (
    <S.Container>
      <S.Note>
        Caso queira comprar este livro, preencha os campos em baixo e entraremos
        em contacto consigo.
      </S.Note>
      <S.StyledForm onSubmit={handleSubmit}>
        <S.StyledInput
          value={form.name}
          onChange={(e) => onChangeText(e, 'name')}
          placeholder='O seu Nome *'
        />
        <S.StyledInput
          value={form.email}
          onChange={(e) => onChangeText(e, 'email')}
          placeholder='E-mail *'
        />
        <S.StyledInput
          value={form.phone}
          onChange={(e) => onChangeText(e, 'phone')}
          placeholder='Contacto telefónico'
        />
        <S.TextArea
          value={form.comment}
          onChange={(e) => onChangeText(e, 'comment')}
          placeholder='Comentário'
        />
        <S.Submit type='submit' value='Reservar' />
      </S.StyledForm>
    </S.Container>
  );
};
