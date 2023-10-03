import {Link} from 'react-router-dom';
import Produtos from './Produtos';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;
export default function Menu(){
    return<>
    
    <Layout>
        <Header>@Pmiguelbms</Header>
        <Content style={{ padding: '24px' }}>
          <div className="site-layout-content">
          </div>
        </Content>
        <Footer>@Pmiguelbms</Footer>
      </Layout>

    </>
}