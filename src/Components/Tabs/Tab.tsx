import { ReactNode } from 'react';

interface TabProps {
  label: string;
  children: ReactNode;
}

export const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <div data-label={label} className="hidden w-full">
      {children}
    </div>
  );
};
