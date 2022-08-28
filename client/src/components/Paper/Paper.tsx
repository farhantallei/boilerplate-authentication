import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Paper.module.scss';

interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Paper = forwardRef<HTMLDivElement, PaperProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.paper, className)}
        {...others}>
        {children}
      </div>
    );
  }
);
