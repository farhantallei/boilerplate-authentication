interface LoginForm {
  username: string;
  password: string;
}

export interface FastifyError {
  statusCode: number;
  error: string;
  message: string;
}

export type AlignText =
  | 'left'
  | 'right'
  | 'center'
  | 'end'
  | 'start'
  | 'justify';

export type BaseColor =
  | 'gray'
  | 'red'
  | 'pink'
  | 'purple'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'brown';
