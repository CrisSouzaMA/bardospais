/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import style from './style.module.css';

const Content = ({ selectedOption }: any) => {
   const renderContent = () => {
      switch(selectedOption) {
        case '1': return <div>Conteúdo para Opção 1</div>;
        case '2': return <div>Conteúdo para Opção 2</div>;
        // Adicione casos para outras keys conforme necessário
        default: return <div>Selecione uma opção</div>;
      }
    };
  
    return(
      <div className={style.contentStyle}>{renderContent()}</div>
    ); 
};

export default Content;