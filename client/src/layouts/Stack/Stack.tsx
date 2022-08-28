import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Stack.module.scss';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.stack, className)}
        {...others}>
        {children}
      </div>
    );
  }
);
