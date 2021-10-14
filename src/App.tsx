import React from 'react';
import { useAuth } from 'context/auth-context';

import './App.css';
import { ScreensMain } from 'screens/screens-main';
import { UserInfo } from 'screens/user-info';
function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <ScreensMain /> : <UserInfo />}</div>;
}

export default App;
