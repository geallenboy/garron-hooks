import React from 'react';
import { useAuth } from 'context/auth-context';

import './App.css';
import { Authenticated } from 'screens/authenticated';
import { UserInfo } from 'screens/user-info';
function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <Authenticated /> : <UserInfo />}</div>;
}

export default App;
