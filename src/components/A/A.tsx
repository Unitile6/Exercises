import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
};

export function A({ href, children }: Props) {
  return (
    <a
      href={href}
      className="underline text-purple-600"
      target="blank"
      rel="noopener"
    >
      {children}
    </a>
  );
}
