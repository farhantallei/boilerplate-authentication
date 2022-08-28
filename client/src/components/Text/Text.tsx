import { AlignText, BaseColor } from '@app/types';
import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Text.module.scss';

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: AlignText;
  color?: BaseColor;
}

export const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ align = 'start', color, children, className, ...others }, ref) => {
    const aligns: Record<typeof align, string> = {
      left: styles.left,
      right: styles.right,
      center: styles.center,
      end: styles.end,
      start: styles.start,
      justify: styles.justify,
    };

    const colors: Partial<Record<BaseColor, string>> = {
      gray: styles.gray,
      red: styles.red,
      pink: styles.pink,
      purple: styles.purple,
      indigo: styles.indigo,
      blue: styles.blue,
      cyan: styles.cyan,
      teal: styles.teal,
      green: styles.green,
      lime: styles.lime,
      yellow: styles.yellow,
      orange: styles.orange,
      brown: styles.brown,
    };

    return (
      <div
        ref={ref}
        className={classNames(
          styles.text,
          aligns[align],
          { [colors[color!]!]: color },
          className
        )}
        {...others}>
        {children}
      </div>
    );
  }
);
