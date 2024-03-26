import { ReactNode, useState } from 'react';

interface TabProps {
  label: string;
  children: ReactNode;
  icon: ReactNode;
}

export const Tabs: React.FC<{ children: ReactNode[] }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(() => {
    const firstChild = children[0] as React.ReactElement<TabProps>;
    return firstChild?.props.label || '';
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex border-b border-gray-300 py-4">
        {(children as React.ReactElement<TabProps>[]).map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label ? 'border-b-2 border-red-500' : ''
            }  flex items-center justify-center flex-grow text-gray-700 font-medium py-2`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            <span className="hidden md:inline">{child.props.label}</span>{' '}
            {/* Renderize a legenda apenas em telas maiores */}
            <span className="md:hidden text-2xl">{child.props.icon}</span>{' '}
            {/* Renderize o ícone em todas as telas */}
          </button>
        ))}
      </div>
      <div className="py-4">
        {(children as React.ReactElement<TabProps>[]).map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};
