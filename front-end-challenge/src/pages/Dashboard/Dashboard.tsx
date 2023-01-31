import React from 'react';
import './Dashboard.css'
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

let headerStyle: string = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

function Dashboard() {
  return (
    <main>
      <Space
        direction='vertical'
        style={{
          width: '100%'
        }}
        size={[0, 48]}
      >
        <Layout>
          <Header style={headerStyle}>helloworld</Header>
          <Layout>
            <Content>
              <div className='navbar'>hellowrold</div>
            </Content>
            <Sider>helloworld</Sider>
          </Layout>
          <Footer>helloworld</Footer>
        </Layout>
      </Space>
    </main>
  );
}

export default Dashboard;