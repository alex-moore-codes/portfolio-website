import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  width?: string;
};

export default function Card({ children, width = 'w-full' }: CardProps) {
  return (
    <div className={`${width} rounded-theme bg-white p-card shadow-xl`}>
      {children}
    </div>
  );
}
