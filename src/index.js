import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial';
import Produto from './componentes/Produto';
import Produtos from './componentes/Produtos';
import './antd.less';
import './css.css';
import Sobre from './paginas/Sobre';

const roteador = createBrowserRouter([
  { path: '/',element:<PaginaInicial/> },
  { path: '/produto', element:<Produto/>},
  { path: '/produto/:id', element:<Produto/>},
  { path: '/produtos', element:<Produtos/>},
  { path: '/sobre', element:<Sobre/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={roteador}/>
  </React.StrictMode>
);

reportWebVitals();
