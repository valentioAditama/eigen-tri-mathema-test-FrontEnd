import React from 'react';
import './Dashboard.css'
import { Divider, Layout, Menu, Space } from 'antd';
import { Col, Row } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function Dashboard() {
  return (
    <main>
      <Space
        direction='vertical'
        style={{
          width: '100%'
        }}
        size={[0, 48]}>
        <Layout>
          <Row justify={'space-between'}>
            <Col span={12}>
              helloworld
            </Col>
            <Col span={12} flex={''}>
              helloworld
            </Col>
          </Row>
          <Layout>
            <Content>
              <div>hellowrold</div>
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