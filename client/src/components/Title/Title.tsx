import { AlignText } from '@app/types';
import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Title.module.scss';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  align?: AlignText;
  order: 1 | 2 | 3 | 4 | 5 | 6;
}

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ align = 'start', order, children, className, ...others }, ref) => {
    const orders: Record<typeof order, Heading> = {
      1: 'h1',
      2: 'h2',
      3: 'h3',
      4: 'h4',
      5: 'h5',
      6: 'h6',
    };

    const aligns: Record<typeof align, string> = {
      left: styles.left,
      right: styles.right,
      center: styles.center,
      end: styles.end,
      start: styles.start,
      justify: styles.justify,
    };

    const Heading = orders[order];

    return (
      <Heading
        ref={ref}
        className={classNames(
          styles.heading,
          styles[orders[order]],
          aligns[align],
          className
        )}
        {...others}>
        {children}
      </Heading>
    );
  }
);
