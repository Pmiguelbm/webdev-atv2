import React, { useEffect, useState } from 'react';
import Cabecalho from '../componentes/Cabecalho';
import Rodape from '../componentes/Rodape';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';

export default function PaginaInicial(){
    const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProdutos(response.data);
      })
  }, []);
  
    return <>
        <Cabecalho/>
            <div className="site-layout-content">
            <br/>
            <Row gutter={10}>
              {produtos.map((produtos) => (
                <ul span={3} key={produtos.id}>
                  <Link to={`/produto/${produtos.id}`}>
                    <Card id='card'
                      title={produtos.title}
                      cover={<img width='60%' alt={produtos.title} src={produtos.image} />}
                    >
                      <p id='valor'>Valor: R${produtos.price}</p>
                    </Card>
                  </Link>
                </ul>
              ))}
            </Row>
          </div>
        <Rodape/>
    </>;
}