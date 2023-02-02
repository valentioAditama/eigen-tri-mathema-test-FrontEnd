import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import { Layout, Space } from 'antd';
import './Review.css';
import { title } from 'process';

const { Header, Content } = Layout;

export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
  content: string;
}

const Review = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        'https://newsapi.org/v2/everything?q=apple&from=2023-01-31&to=2023-01-31&sortBy=popularity&apiKey=4e5a2895ab4e4d72a888becae8ce37a8&pageSize=1'
      );
      console.log(result);
      const data = await result.json();
      setNews(data.articles);
    };

    fetchData();
  }, []);

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
            <div style={{ margin: '20px' }}>
              <Row justify={'center'}>
                {news.map((item: Article) => (
                  <Col key={item.title} span={12}
                    style={{
                      display: 'flex',
                      justifyContent: 'end',
                      marginTop: '10px'
                    }}>
                    <img src={item.urlToImage} style={{
                      height: '65vh', marginLeft: '50px'
                    }} alt="" />
                  </Col>
                ))}

                {news.map((item: Article) => (
                  <Col key={item.title} span={12}>
                    <div className='information'>
                      <p className='title'>{item.title}</p>
                      <Row style={{ marginTop: '5px' }}>

                        <Col span={6}>
                          <small className='author'><b>Author</b> : {item.author}</small>
                        </Col>
                        <Col span={12}>
                          <small className='author'><b>publishedAt</b> : {item.publishedAt}</small>
                        </Col>
                      </Row>

                      <Row>
                        <p className='description'>{item.description}</p>
                        <p className='content'>{item.content}</p>
                        <a href={item.url}>
                          <Button style={{ marginTop: '20px' }}>Load More ?</Button>
                        </a>
                      </Row>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Content>
        </Layout>
      </Space>
    </main>


  );
};

export default Review;
