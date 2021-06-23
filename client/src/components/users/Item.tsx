import swal from 'sweetalert';
import { User } from '../../types/User';
import { UsersResolvers } from '../../resolvers/users';
import { Button } from '../styled';

interface IProps<T> {
  user: T;
  setFormState: React.Dispatch<React.SetStateAction<T>>;
}

export const Item: React.FC<IProps<User>> = ({ user, setFormState }) => {
  const { deleteAction } = UsersResolvers();

  const editItem = (user: User): void => {
    setFormState(user);
  };

  const deleteItem = (user: User) => {
    swal({
      title: 'Are you sure?',
      text: 'Are you sure that you want to delete this record?',
      icon: 'warning',
      buttons: ['No', 'Yes'],
      dangerMode: true,
    }).then((response) => {
      if (response) {
        deleteAction(user);
        swal('Deleted!', 'You record has been deleted!', 'success');
      }
    });
  };

  return (
    <li key={user.id}>
      <div>ID: {user.id}</div>
      <div>Name: {user.name}</div>
      <div>E-mail: {user.email}</div>
      <div>Job title: {user.job_title}</div>
      <Button onClick={() => editItem(user)}>Edit</Button>
      <Button onClick={() => deleteItem(user)}>Delete</Button>
    </li>
  );
};
