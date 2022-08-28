import { useLogout } from '@app/features/auth/hooks';

export function Dashboard() {
  const { logout, error, isError, isLoading } = useLogout();

  return (
    <>
      {isError ? <div>{error}</div> : null}
      {isLoading ? <div>Loading</div> : null}
      <button type="button" title="button" onClick={logout}>
        Logout
      </button>
    </>
  );
}
