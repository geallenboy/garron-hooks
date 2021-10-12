import React from 'react';
import { User } from './search-panel';

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  lists: Project[];
  users: User[];
}

export const List = ({ lists, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <td>名称</td>
          <td>负责人</td>
        </tr>
      </thead>
      <tbody>
        {lists.map((project) => (
          <tr key={project.personId}>
            <td>{project.name}</td>
            <td>{users.find((user) => user.id === project.personId)?.name || '未知'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
