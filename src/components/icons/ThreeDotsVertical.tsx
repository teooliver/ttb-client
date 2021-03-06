import { FC } from 'react';

interface Props {
  className?: string;
  size?: string;
  color?: string;
}

export const ThreeDotsVertical: FC<Props> = ({ className, size, color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || '16'}
      height={size || '16'}
      fill={color || 'currentColor'}
      className={className || 'bi-three-dots-vertical'}
      viewBox='0 0 16 16'
    >
      <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
    </svg>
  );
};
