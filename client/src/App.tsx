import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  GET_USERS,
  VIEW_USERS,
  DELETE_USER,
  EDIT_USER,
  ADD_USER,
} from './queries';
import { Card, CardBody, CardHeader, CardSubtitle, Spinner } from 'reactstrap';

const App = () => {
  const getAllUsers = useQuery(GET_USERS);
  const userInfo = useQuery(VIEW_USERS, { variables: { id: 1 } });
  const deleteMutation = useMutation(DELETE_USER, { variables: { id: 8 } });
  const editMutation = useMutation(EDIT_USER, {
    variables: { id: 9, name: 'Username', email: 'email', job_title: 'job' },
  });
  const createMutation = useMutation(ADD_USER, {
    variables: { name: 'Username', email: 'email', job_title: 'job' },
  });

  if (getAllUsers.loading || userInfo.loading) return <Spinner color="dark" />;
  if (getAllUsers.error || userInfo.error)
    return <React.Fragment>Error :(</React.Fragment>;

  return (
    <div className="container">
      <Card>
        <CardHeader>Query - Displaying all data</CardHeader>
        <CardBody>
          <pre>{JSON.stringify(getAllUsers.data, null, 2)}</pre>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Query - Displaying data with args</CardHeader>
        <CardBody>
          <CardSubtitle>Viewing a user by id</CardSubtitle>
          <pre>{JSON.stringify(userInfo.data, null, 2)}</pre>
        </CardBody>
      </Card>
    </div>
  );
};

export default App;
