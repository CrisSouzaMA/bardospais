import React, { useState } from 'react';
import Sidebar from '../../Components/Siderbar/Sidebar';
import style from './style.module.css';
import Content from '../../Components/Content/Content';

const Home = () => {
    const [selectedOption, setSelectedOption] = useState('1');

    return(
        <div className={style.home}>
          <Sidebar setSelectedOption={setSelectedOption} />
          <Content selectedOption={selectedOption} />
        </div>
    );
}

export default Home;