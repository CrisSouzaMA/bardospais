/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styles from './style.module.css';
import { HeartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

type SetOption = React.Dispatch<React.SetStateAction<string>>;

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

const items: MenuItem[] = [
    getItem('Lanches', 'sub1', <HeartOutlined />, [
      getItem('Hamburguer', '1'),
      getItem('Cachorro quente', '2'),
      getItem('Misto Quente', '3'),
    ]),
    getItem('Bebidas', 'sub2', <HeartOutlined />, [
      getItem('Refrigerante', '5'),
      getItem('Cerveja', '6'),
      getItem('Aguas e sucos', 'sub3'),
    ]),
    getItem('Outros', 'sub4', <HeartOutlined />, [
      getItem('Doces', '9'),
      getItem('Cigarro', '10'),
      getItem('Itens de mercado', '11'),
    ]),
  ];

const Sidebar = ({ setSelectedOption }: any) => {
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
       if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        setOpenKeys(keys);
       } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };

    const onClickState = (event: any) => {
        setSelectedOption(event.key);
    };
    
    return(
     <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
      items={items}
      onClick={(event) => onClickState(event)}
     />
    );
}

export default Sidebar;