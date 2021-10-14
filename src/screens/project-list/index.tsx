import React from 'react';
import { SearchPanel } from './search-panel';
import { useEffect, useState } from 'react';
import { List } from './list';
import { cleanObject, useMount, useDebounce } from 'utils';
import { useHttp } from 'utils/http';
import styled from '@emotion/styled';
import { Typography } from 'antd';

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  });
  const debouncedParam = useDebounce(param, 200);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const [lists, setLists] = useState([]);
  const client = useHttp();
  useEffect(() => {
    setIsLoading(true);
    client('projects', { data: cleanObject(debouncedParam) })
      .then(setLists)
      .catch((error) => {
        setLists([]);
        setError(error);
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line
  }, [debouncedParam]);
  useMount(() => {
    client('users').then(setUsers);
  });
  return (
    <Container>
      <h2>项目列表</h2>
      <SearchPanel users={users} param={param} setParam={setParam} />
      {error ? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}
      <List users={users} dataSource={lists} loading={isLoading} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
