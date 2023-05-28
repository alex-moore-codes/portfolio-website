import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="w-full rounded-theme bg-white p-card shadow-xl">
      {children}
    </div>
  );
}
