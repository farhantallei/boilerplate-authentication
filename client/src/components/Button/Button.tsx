import { BaseColor } from '@app/types';
import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: BaseColor;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, children, className, ...others }, ref) => {
    const colors: Partial<Record<BaseColor, string>> = {
      blue: styles.blue,
    };

    return (
      <button
        ref={ref}
        className={classNames(
          styles.button,
          { [colors[color!]!]: color },
          className
        )}
        {...others}>
        {children}
      </button>
    );
  }
);
