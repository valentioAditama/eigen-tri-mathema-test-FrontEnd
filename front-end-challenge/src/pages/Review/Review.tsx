import React, { useEffect, useState } from 'react';
import { Card, Layout, Space } from 'antd';
import { Col, Row } from 'antd';
import './Review.css'
import NewsList from '../../components/Dashboard/NewsList';

const { Header, Content } = Layout;

const Review: React.FC = () => {
  return (
    <main>
      <Space
        direction='vertical'
        style={{
          width: '100%'
        }}
        size={[0, 48]}>
        <Layout>
          <Header style={{
            backgroundColor: '#0d0f06',
            zIndex: '1'
          }}>
            <Row>
              <Col span={12}>
                <ul>
                  <li className='logo'>
                    Open News
                  </li>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">Category</a></li>
                  <li><a href="#about">About</a></li>
                </ul>
              </Col>
              <Col span={12}>
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                  <ul>
                    <li><a href="#about">Sign Up</a></li>
                    <li><a href="#about">Login</a></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Header>

          <Content>
            <div style={{ margin: '20px' }}>
              <ul>
                <li></li>
              </ul>
            </div>
          </Content>
        </Layout>
      </Space>
    </main>
  );
}

export default Review;