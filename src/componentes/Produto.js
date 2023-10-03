import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import Menu from './Menu';
import Sider from 'antd/es/layout/Sider';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';

export default function Produto() {
  
  const {id} = useParams();
  const [produto, setProduto] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      setProduto(response.data);
    })
    .catch((error) => {
      console.error('Erro ao buscar produto:', error);
    });
  }, [id]);

  return (
    <>
    <Cabecalho/>
    
    <Card 
    hoverable
    style={{marginTop:50, width: 300, float: 'right', marginRight: 450}}
    cover={<img alt={produto.title} src={produto.image} />}
    />
      <Card
      style={{ marginTop:50, width: 500, float: 'left', marginLeft: 400, height:400}}>
      <h1>{produto.title}</h1>
      <p>Preço: R${produto.price}</p>
        <p>Descrição: {produto.description}</p>
      </Card>
    </>
    );
}

