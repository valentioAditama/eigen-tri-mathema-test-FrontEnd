import React, { useEffect, useState } from 'react';
import { Card, Layout, Space } from 'antd';
import { Col, Row } from 'antd';
import { Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import axios from 'axios';
import './Dashboard.css'
import NewsList from '../../components/Dashboard/NewsList';

const { Header, Content } = Layout;

const Dashboard: React.FC = () => {
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
                  <li><a href="/">Home</a></li>
                  <li><a href="/review">Detail</a></li>
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
            <div>
              <img src="https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/01/Tesla-Gigafactory-Berlin-Hero-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" className='banner' alt="" />
              <div className='centerTextBanner'>
                <h3>Welcome To Open News</h3>
                <small style={{ fontSize: '25px' }}>- Place to find the latest news - </small>
              </div>
            </div>

            <div style={{ margin: '20px' }}>
              <NewsList />
            </div>
          </Content>
        </Layout>
      </Space>
    </main>
  );
}

export default Dashboard;