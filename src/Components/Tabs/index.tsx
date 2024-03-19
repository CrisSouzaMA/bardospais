/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styles from './style.module.css';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import CardContent from '../Card';

const items = [
    {
      key: '1',
      label: 'Lanches',
      category: 'lanches',
      content: <CardContent category="1" />,
    },
    {
      key: '2',
      label: 'Bebidas',
      category: 'bebidas',
      content: <CardContent category="2" />,
    },
    {
      key: '3',
      label: 'Itens de mercearia',
      category: 'mercearia',
      content: <CardContent category="3" />,
    },
  ];
  
  const TabsComponent = () => {
    const [activeKey, setActiveKey] = useState('1');

    const onChangeTab = (key: string) => {
        setActiveKey(key);
        console.log({ activeKey })
    };

    return (
      <Tabs activeKey={activeKey} onChange={onChangeTab} items={items}/>
    );
  }
  
  export default TabsComponent;