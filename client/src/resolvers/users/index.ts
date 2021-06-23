import {
  useMutation,
  MutationTuple,
  OperationVariables,
  useQuery,
} from '@apollo/client';

import { ADD_USER, EDIT_USER, GET_USERS, DELETE_USER } from './operators';
import { User } from '../../types/User';

export const UsersResolvers = () => {
  const getAllUsers = useQuery(GET_USERS);

  const [createMutation]: MutationTuple<Function, OperationVariables> =
    useMutation(ADD_USER, {
      refetchQueries: [{ query: GET_USERS }],
    });

  const createAction = (user: User): void => {
    createMutation({
      variables: user,
    });
  };

  const [editMutation] = useMutation(EDIT_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const editAction = (user: User): void => {
    console.log('edit', user);
    editMutation({ variables: user });
  };

  const [deleteMutation] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const deleteAction = (user: User): void => {
    user.id &&
      deleteMutation({
        variables: {
          id: typeof user.id === 'string' ? parseFloat(user.id) : user.id,
        },
      });
  };

  return {
    getAllUsers,
    createAction,
    editAction,
    deleteAction,
  };
};
