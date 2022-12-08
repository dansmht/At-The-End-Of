import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  type?: 'button' | 'reset' | 'submit',
  onClick: () => void,
  disabled?: boolean,
  className?: string,
  children: ReactNode,
}

export const Button: FC<Props> = ({
  type, onClick, disabled, className, children,
}) => (
  <button
    type={type || 'button'}
    className={classNames(styles.Button, className)}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
