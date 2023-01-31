import React from 'react';
import './Dashboard.css'
import { Card, Divider, Layout, Menu, Space } from 'antd';
import { Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';

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
            <div>
              <img src="https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/01/Tesla-Gigafactory-Berlin-Hero-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" className='banner' alt="" />
              <div className='centerTextBanner'>
                <h3>Welcome To Open News</h3>
                <small style={{ fontSize: '25px' }}>- Place to find the latest news - </small>
              </div>
            </div>
            <div>
              <Row justify="space-between" style={{margin: 30}}>
                <Col span={4}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/01/Tesla-Gigafactory-Berlin-Hero-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/01/Tesla-Gigafactory-Berlin-Hero-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/01/Tesla-Gigafactory-Berlin-Hero-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/01/Tesla-Gigafactory-Berlin-Hero-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/01/Tesla-Gigafactory-Berlin-Hero-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>

          <Footer>helloworld</Footer>
        </Layout>
      </Space>
    </main>
  );
}

export default Dashboard;