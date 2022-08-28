import classNames from 'classnames';
import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './TextInput.module.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password';
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={classNames(styles.input, className)}
        {...props}
      />
    );
  }
);
