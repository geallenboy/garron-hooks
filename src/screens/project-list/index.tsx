import React from 'react';
import { SearchPanel } from './search-panel';
import { useEffect, useState } from 'react';
import { List } from './list';
import { cleanObject, useMount, useDebounce } from 'utils';
import { useHttp } from 'utils/http';

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  });
  const debouncedParam = useDebounce(param, 200);
  const [users, setUsers] = useState([]);
  const [lists, setLists] = useState([]);
  const client = useHttp();
  useEffect(() => {
    client('projects', { data: cleanObject(debouncedParam) }).then(setLists);
    // eslint-disable-next-line
  }, [debouncedParam]);
  useMount(() => {
    client('users').then(setUsers);
  });
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} lists={lists} />
    </div>
  );
};
