import React from 'react';
import { userInitialState } from '.';
import { User } from '../../types/User';
import { Button } from '../styled';

interface IProps<T> {
  formState: User;
  setFormState: React.Dispatch<React.SetStateAction<T>>;
  handleChange: React.ChangeEventHandler;
  handleSubmit: React.FormEventHandler;
  clearFormState?: React.MouseEventHandler;
}

export const UsersForm: React.FC<IProps<User>> = ({
  formState,
  setFormState,
  handleChange,
  handleSubmit,
}) => {
  const clearFormState = () => {
    setFormState(userInitialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{formState.id ? 'Edit' : 'New'}</h1>
      <p>
        Name:{' '}
        <input name="name" onChange={handleChange} value={formState.name} />
      </p>
      <p>
        E-mail:{' '}
        <input name="email" onChange={handleChange} value={formState.email} />
      </p>
      <p>
        Job title:{' '}
        <input
          name="job_title"
          onChange={handleChange}
          value={formState.job_title}
        />
      </p>
      <p>
        <Button type="submit">Send</Button>
        {formState?.id && <Button onClick={clearFormState}>Cancel</Button>}
      </p>
    </form>
  );
};
