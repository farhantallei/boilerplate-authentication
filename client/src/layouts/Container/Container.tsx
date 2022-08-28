import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Container.module.scss';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  center?: boolean;
  fullHeight?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    { center = false, fullHeight = false, children, className, ...others },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          styles.container,
          { [styles.center]: center, [styles.fullHeight]: fullHeight },
          className
        )}
        {...others}>
        {children}
      </div>
    );
  }
);
