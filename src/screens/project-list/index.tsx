import React from 'react';
import { SearchPanel } from './search-panel';
import { useEffect, useState } from 'react';
import qs from 'qs';
import { List } from './list';
import { cleanObject, useMount, useDebounce } from 'utils';
const apiUrl = 'http://localhost:3001';

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  });
  const debouncedParam = useDebounce(param, 200);
  const [users, setUsers] = useState([]);
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(
      async (response) => {
        if (response.ok) {
          setLists(await response.json());
        }
      }
    );
  }, [debouncedParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} lists={lists} />
    </div>
  );
};
