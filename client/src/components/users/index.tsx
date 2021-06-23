import React from 'react';
import { useForm } from '../../hooks/useForm';
import { UsersList } from './List';
import { UsersForm } from './Form';
import { User } from '../../types/User';
import { UsersResolvers } from '../../resolvers/users';

export const userInitialState: User = {
  name: '',
  email: '',
  job_title: '',
};

export const UsersIndex: React.FC = (props) => {
  const { createAction, editAction } = UsersResolvers();

  const submitAction = () => {
    !formState.id
      ? createAction(formState)
      : editAction({
          id:
            typeof formState.id === 'string'
              ? parseFloat(formState.id)
              : formState.id,
          name: formState.name,
          email: formState.email,
          job_title: formState.job_title,
        });

    setFormState(userInitialState);
  };

  const { formState, setFormState, handleChange, handleSubmit } = useForm<User>(
    userInitialState,
    submitAction
  );

  return (
    <>
      <UsersList setFormState={setFormState} />
      <UsersForm
        formState={formState}
        setFormState={setFormState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
