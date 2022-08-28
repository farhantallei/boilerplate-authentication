import { Login } from '@app/pages/auth';
import { Dashboard } from '@app/pages/restricted';
import { AuthRoute, RestrictedRoute } from '@app/routes';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route element={<RestrictedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
