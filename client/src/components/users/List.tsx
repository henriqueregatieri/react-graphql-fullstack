import React from 'react';
import { User } from '../../types/User';
import { Item } from './Item';
import { UsersResolvers } from '../../resolvers/users';
import { List } from '../styled';

interface IProps<T> {
  setFormState: React.Dispatch<React.SetStateAction<T>>;
}

export const UsersList: React.FC<IProps<User>> = ({ setFormState }) => {
  const { getAllUsers } = UsersResolvers();

  const loadingElement = <div>Loading</div>;
  const errorElement = <div>Error :(</div>;

  return (
    <>
      <h1>List</h1>
      <div>
        {getAllUsers.loading && loadingElement}
        {getAllUsers.error && errorElement}

        <List>
          {getAllUsers.data?.getUsers.map((user: User, key: number) => (
            <Item key={key} user={user} setFormState={setFormState} />
          ))}
        </List>
      </div>
    </>
  );
};
