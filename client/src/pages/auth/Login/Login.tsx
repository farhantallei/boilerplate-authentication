import { Button, Loader, Paper, Text, TextInput, Title } from '@app/components';
import { useLogin } from '@app/features/auth/hooks';
import { Container, Stack } from '@app/layouts';
import { LoginForm } from '@app/types';
import { useState } from 'react';
import styles from './Login.module.scss';

export function Login() {
  const [form, setForm] = useState<LoginForm>({ username: '', password: '' });
  const { login, error, isError, isLoading } = useLogin();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(form);
  }

  return (
    <Container className={styles.root} center fullHeight>
      <Paper>
        <Container className={styles.container}>
          <Stack>
            <Title order={1} align="center">
              Login
            </Title>
            <form className={styles.form} onSubmit={handleSubmit}>
              {isError ? (
                <Text className={styles.error} align="center" color="red">
                  {error}
                </Text>
              ) : null}
              <TextInput
                className={styles.input}
                name="username"
                title="Username"
                placeholder="Username"
                onChange={handleChange}
              />
              <TextInput
                className={styles.input}
                name="password"
                type="password"
                title="Password"
                placeholder="Password"
                onChange={handleChange}
              />
              <Button type="submit" title="submit">
                {isLoading ? <Loader /> : 'Login'}
              </Button>
            </form>
          </Stack>
        </Container>
      </Paper>
    </Container>
  );
}
