import React from 'react';
import './App.css';
import { useAuth } from 'context/auth-context';
import { ErrorBoundary } from 'components/error-boudnary';
import { FullPageErrorFallback, FullPageLoading } from 'components/lib';

const ScreensMain = React.lazy(() => import('screens/screens-main'));
const UserInfo = React.lazy(() => import('screens/user-info'));

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <React.Suspense fallback={<FullPageLoading />}>
          {user ? <ScreensMain /> : <UserInfo />}
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
