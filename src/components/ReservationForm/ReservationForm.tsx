import { reserveBook } from 'api/library';
import { ChangeEvent, useState, SyntheticEvent, FC } from 'react';
import * as S from './ReservationForm.style';

type IProps = {
  bookId: number;
};
export const ReservationForm: FC<IProps> = ({ bookId }) => {
  const initialForm = {
    name: '',
    email: '',
    phone: '',
    comment: '',
  };

  const [form, setForm] = useState({
    ...initialForm,
  });

  const onChangeText = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof typeof form
  ) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };
  const sendReservation = async () => {
    const res = await reserveBook({ ...form, book: bookId });
    console.log({ here: res });
    if (typeof res === 'string') {
      return;
    }

    if (res.status === 201) {
      setForm({ ...initialForm });
    }
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    sendReservation();
  };
  return (
    <S.StyledForm onSubmit={handleSubmit}>
      <S.StyledInput
        value={form.name}
        onChange={(e) => onChangeText(e, 'name')}
        placeholder='name'
      />
      <S.StyledInput
        value={form.email}
        onChange={(e) => onChangeText(e, 'email')}
        placeholder='email'
      />
      <S.StyledInput
        value={form.phone}
        onChange={(e) => onChangeText(e, 'phone')}
        placeholder='phone'
      />
      <S.StyledInput
        value={form.comment}
        onChange={(e) => onChangeText(e, 'comment')}
        placeholder='comment'
      />
      <S.Submit type='submit' />
    </S.StyledForm>
  );
};
