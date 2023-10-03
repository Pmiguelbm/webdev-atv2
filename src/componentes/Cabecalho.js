import {Link} from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
export default function Cabecalho(){
    return<>
        <section>
            
                <ul>
                <Link to={`/`}>
                <li>
                    Página Inicial
                        </li>
                        </Link>
                <Link to={`/produtos`}>
                <li>
                    Produtos
                        </li>
                        </Link>
                <Link to={`/sobre`}>
                <li>
                    Sobre
                        </li>
                        </Link>

                </ul>
        </section>
        
    </>
}