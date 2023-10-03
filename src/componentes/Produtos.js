import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import axios from 'axios';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import css from '../css.css'

export default function Produtos() {
  
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProdutos(response.data);
      })
  }, []);

  return (
    <>
     <Cabecalho/>
     <h1>Produtos</h1>
      <Row gutter={16}>
        {produtos.map((produtos) => (
          <Col span={6} key={produtos.id}>
            <Link to={`/produto/${produtos.id}`}>
              <Card id='produtos'
                title={produtos.title}
                cover={<img alt={produtos.title} src={produtos.image} />}
              >
                <p id='valor2'>Preço: R${produtos.price}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Rodape/>
    </>
  );
}
