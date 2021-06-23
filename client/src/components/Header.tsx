import { UsersResolvers } from '../resolvers/users';
import { Header as HeaderEl, Counter } from './styled';

export const Header = () => {
  const { getAllUsers } = UsersResolvers();

  return (
    <HeaderEl>
      <Counter>Count: {getAllUsers.data?.getUsers?.length}</Counter>
      <h1>My CRUD</h1>
    </HeaderEl>
  );
};
