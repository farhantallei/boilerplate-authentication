import { useClient } from '@app/client';
import { useRefreshToken } from '@app/features/auth/hooks';
import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function AuthRoute() {
  const { isAuthenticated } = useClient();
  const { refreshToken } = useRefreshToken();

  useEffect(() => {
    refreshToken();
  }, []);

  if (isAuthenticated == null) return null;
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  return <Outlet />;
}
