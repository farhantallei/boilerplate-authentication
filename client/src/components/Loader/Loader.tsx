import { BaseColor } from '@app/types';
import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Loader.module.scss';

interface LoaderProps extends React.SVGProps<SVGSVGElement> {
  color?: BaseColor;
}

export const Loader = forwardRef<SVGSVGElement, LoaderProps>(
  ({ color, className, ...others }, ref) => {
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
      <svg
        ref={ref}
        width="36px"
        height="9px"
        viewBox="0 0 120 30"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(
          styles.loader,
          { [colors[color!]!]: color },
          className
        )}
        role="presentation"
        {...others}>
        <circle cx="15" cy="15" r="15">
          <animate
            attributeName="r"
            from="15"
            to="15"
            begin="0s"
            dur="0.8s"
            values="15;9;15"
            calcMode="linear"
            repeatCount="indefinite"></animate>
          <animate
            attributeName="fill-opacity"
            from="1"
            to="1"
            begin="0s"
            dur="0.8s"
            values="1;.5;1"
            calcMode="linear"
            repeatCount="indefinite"></animate>
        </circle>
        <circle cx="60" cy="15" r="9" fill-opacity="0.3">
          <animate
            attributeName="r"
            from="9"
            to="9"
            begin="0s"
            dur="0.8s"
            values="9;15;9"
            calcMode="linear"
            repeatCount="indefinite"></animate>
          <animate
            attributeName="fill-opacity"
            from="0.5"
            to="0.5"
            begin="0s"
            dur="0.8s"
            values=".5;1;.5"
            calcMode="linear"
            repeatCount="indefinite"></animate>
        </circle>
        <circle cx="105" cy="15" r="15">
          <animate
            attributeName="r"
            from="15"
            to="15"
            begin="0s"
            dur="0.8s"
            values="15;9;15"
            calcMode="linear"
            repeatCount="indefinite"></animate>
          <animate
            attributeName="fill-opacity"
            from="1"
            to="1"
            begin="0s"
            dur="0.8s"
            values="1;.5;1"
            calcMode="linear"
            repeatCount="indefinite"></animate>
        </circle>
      </svg>
    );
  }
);
