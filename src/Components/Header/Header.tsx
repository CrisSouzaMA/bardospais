import React from 'react';
import styles from './style.module.css';
import { MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Header = () => {
   return(
    <div className={styles.headerStyle}>
      <Button type="text" className={styles.iconCss} icon={<MenuOutlined  />} />
      <p>BAR DOS PAIS</p>
    </div>
   ); 
};

export default Header;